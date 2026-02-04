/**
 * 本地 txt 解析模块
 * 替代 simple-mind-map/src/parse/txt.js（该模块在新版本中已被移除）
 */

// 获取节点文本
const getNodeText = data => {
  if (!data) return ''
  return data.richText && typeof data.text === 'object'
    ? data.text.map(item => item.text || '').join('')
    : data.text || ''
}

// 获取缩进
const getIndent = level => {
  return new Array(level).fill('   ').join('')
}

// 遍历节点树
const walk = (root, parent, callback, layerIndex = 0) => {
  if (!root) return
  callback(root, parent, layerIndex === 0, layerIndex)
  if (root.children && root.children.length > 0) {
    root.children.forEach(child => {
      walk(child, root, callback, layerIndex + 1)
    })
  }
}

/**
 * 将思维导图数据转换为 txt 纯文本格式
 * @param {Object} root - 思维导图根节点数据
 * @returns {string} txt 格式的文本
 */
export const toTxt = root => {
  let content = ''
  walk(root, null, (node, parent, isRoot, layerIndex) => {
    const nodeData = node.data || node
    content += getIndent(layerIndex)
    content += ' ' + getNodeText(nodeData)
    // 概要
    const generalization = nodeData.generalization
    if (Array.isArray(generalization)) {
      content += generalization
        .map(item => {
          return ` [${getNodeText(item)}]`
        })
        .join('')
    } else if (generalization && generalization.text) {
      content += ` [${getNodeText(generalization)}]`
    }
    content += '\n'
  })
  return content
}

/**
 * 将 txt 纯文本解析为思维导图数据格式
 * @param {string} str - txt 格式的文本
 * @returns {Object} 思维导图数据结构
 */
export const txtTo = str => {
  if (!str || typeof str !== 'string') {
    return { data: { text: '中心主题' }, children: [] }
  }

  const lines = str.split('\n').filter(line => line.trim())
  if (lines.length === 0) {
    return { data: { text: '中心主题' }, children: [] }
  }

  // 解析每行的缩进级别
  const parseIndent = line => {
    let indent = 0
    let i = 0
    while (i < line.length && (line[i] === ' ' || line[i] === '\t')) {
      if (line[i] === '\t') {
        indent += 3
      } else {
        indent++
      }
      i++
    }
    return Math.floor(indent / 3)
  }

  // 构建节点树
  const nodes = []
  lines.forEach(line => {
    const level = parseIndent(line)
    const text = line.trim()
    if (text) {
      nodes.push({
        level,
        data: { text },
        children: []
      })
    }
  })

  if (nodes.length === 0) {
    return { data: { text: '中心主题' }, children: [] }
  }

  // 构建树形结构
  const root = {
    data: { text: nodes[0].data.text },
    children: []
  }

  const stack = [{ node: root, level: -1 }]

  for (let i = 1; i < nodes.length; i++) {
    const item = nodes[i]
    const newNode = {
      data: { text: item.data.text },
      children: []
    }

    // 找到合适的父节点
    while (stack.length > 1 && stack[stack.length - 1].level >= item.level) {
      stack.pop()
    }

    stack[stack.length - 1].node.children.push(newNode)
    stack.push({ node: newNode, level: item.level })
  }

  return root
}

export default {
  toTxt,
  txtTo
}
