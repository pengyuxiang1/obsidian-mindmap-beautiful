// Terminal Green 终端绿主题 - 基于 UI/UX Pro Max 设计系统
// 风格: 自主系统、无人机、机器人、舰队管理
// 特点: 终端绿 + 战术深色，复古终端风格
export default {
  // 连线颜色 - 终端绿
  lineColor: '#00FF41',
  lineWidth: 2,
  // 概要连线
  generalizationLineWidth: 2,
  generalizationLineColor: '#008F11',
  // 背景色 - 终端深黑
  backgroundColor: '#0D1117',
  
  // 根节点样式 - 系统核心
  root: {
    fillColor: '#00FF41',
    color: '#0D1117',
    borderColor: '#008F11',
    borderWidth: 2,
    borderRadius: 4,
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: '"JetBrains Mono", "Fira Code", "Courier New", monospace'
  },
  
  // 二级节点样式 - 子系统
  second: {
    fillColor: '#161B22',
    color: '#00FF41',
    borderColor: '#30363D',
    borderWidth: 1,
    borderRadius: 4,
    fontSize: 14,
    fontFamily: '"JetBrains Mono", "Fira Code", "Courier New", monospace'
  },
  
  // 三级及以下节点样式 - 命令行
  node: {
    fillColor: 'transparent',
    color: '#7EE787',
    fontSize: 13,
    borderColor: '#30363D',
    borderWidth: 1,
    borderRadius: 2,
    fontFamily: '"JetBrains Mono", "Fira Code", "Courier New", monospace'
  },
  
  // 概要节点样式 - 警告红
  generalization: {
    fillColor: '#FF3333',
    borderColor: '#FF6666',
    borderWidth: 1,
    borderRadius: 4,
    color: '#0D1117',
    fontFamily: '"JetBrains Mono", "Fira Code", "Courier New", monospace'
  }
}
