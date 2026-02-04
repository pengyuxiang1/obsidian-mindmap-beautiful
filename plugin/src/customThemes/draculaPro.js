// Dracula Pro 主题 - 深色系 | 流行代码编辑器配色
// 风格: Dracula 配色方案，眼睛友好
// 特点: 紫色系、高对比度、流动连线
export default {
  // 背景色 - Dracula 背景
  backgroundColor: '#282A36',
  
  // 连线样式 - 流动
  lineColor: '#BD93F9',           // Dracula 紫
  lineWidth: 2,
  lineDasharray: '6,4',
  lineStyle: 'curve',
  lineFlow: true,
  lineFlowDuration: 2,
  lineFlowForward: true,
  
  // 概要连线
  generalizationLineWidth: 2,
  generalizationLineColor: '#FF79C6',
  
  // 根节点样式
  root: {
    shape: 'roundedRectangle',
    gradientStyle: true,
    startColor: '#BD93F9',        // Dracula 紫
    endColor: '#FF79C6',          // Dracula 粉
    fillColor: '#BD93F9',
    color: '#F8F8F2',
    borderColor: '#FF79C6',
    borderWidth: 2,
    borderRadius: 12,
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: '"JetBrains Mono", "Fira Code", monospace',
    paddingX: 20,
    paddingY: 12
  },
  
  // 二级节点样式
  second: {
    shape: 'roundedRectangle',
    fillColor: '#44475A',
    color: '#50FA7B',             // Dracula 绿
    borderColor: '#6272A4',
    borderWidth: 1,
    borderRadius: 8,
    fontSize: 14,
    fontFamily: '"JetBrains Mono", "Fira Code", monospace',
    paddingX: 14,
    paddingY: 8
  },
  
  // 三级及以下节点样式
  node: {
    shape: 'rectangle',
    fillColor: 'transparent',
    color: '#F1FA8C',             // Dracula 黄
    fontSize: 13,
    borderColor: '#44475A',
    borderWidth: 1,
    borderRadius: 6,
    fontFamily: '"JetBrains Mono", "Fira Code", monospace',
    paddingX: 10,
    paddingY: 6
  },
  
  // 概要节点样式
  generalization: {
    shape: 'roundedRectangle',
    fillColor: '#FF79C6',
    borderColor: '#BD93F9',
    borderWidth: 1,
    borderRadius: 8,
    color: '#282A36',
    fontFamily: '"JetBrains Mono", "Fira Code", monospace'
  }
}
