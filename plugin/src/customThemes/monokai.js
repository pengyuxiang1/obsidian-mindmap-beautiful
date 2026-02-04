// Monokai 主题 - 深色系 | 经典代码编辑器配色
// 风格: 程序员最爱的 Monokai 配色方案
// 特点: 经典代码高亮色、等宽字体、开发者友好
export default {
  // 背景色 - Monokai 背景
  backgroundColor: '#272822',
  
  // 连线样式
  lineColor: '#A6E22E',           // Monokai 绿
  lineWidth: 2,
  lineDasharray: 'none',
  lineStyle: 'curve',
  
  // 概要连线
  generalizationLineWidth: 2,
  generalizationLineColor: '#66D9EF',
  
  // 根节点样式 - 函数定义色
  root: {
    shape: 'roundedRectangle',
    gradientStyle: true,
    startColor: '#F92672',        // Monokai 粉红
    endColor: '#AE81FF',          // Monokai 紫
    fillColor: '#F92672',
    color: '#F8F8F2',
    borderColor: '#AE81FF',
    borderWidth: 2,
    borderRadius: 8,
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: '"JetBrains Mono", "Fira Code", "Monaco", monospace',
    paddingX: 20,
    paddingY: 12
  },
  
  // 二级节点样式 - 类名色
  second: {
    shape: 'rectangle',
    fillColor: '#3E3D32',
    color: '#A6E22E',             // Monokai 绿
    borderColor: '#49483E',
    borderWidth: 1,
    borderRadius: 6,
    fontSize: 14,
    fontFamily: '"JetBrains Mono", "Fira Code", "Monaco", monospace',
    paddingX: 14,
    paddingY: 8
  },
  
  // 三级及以下节点样式 - 字符串色
  node: {
    shape: 'rectangle',
    fillColor: 'transparent',
    color: '#E6DB74',             // Monokai 黄
    fontSize: 13,
    borderColor: '#49483E',
    borderWidth: 1,
    borderRadius: 4,
    fontFamily: '"JetBrains Mono", "Fira Code", "Monaco", monospace',
    paddingX: 10,
    paddingY: 6
  },
  
  // 概要节点样式
  generalization: {
    shape: 'rectangle',
    fillColor: '#66D9EF',         // Monokai 青
    borderColor: '#A6E22E',
    borderWidth: 1,
    borderRadius: 6,
    color: '#272822',
    fontFamily: '"JetBrains Mono", "Fira Code", "Monaco", monospace'
  }
}
