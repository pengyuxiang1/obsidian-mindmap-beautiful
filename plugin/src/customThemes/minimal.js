// 简约白主题 - 清爽的浅色主题
export default {
  // 连线颜色 - 深灰
  lineColor: '#5c6370',
  lineWidth: 2,
  // 概要连线
  generalizationLineWidth: 2,
  generalizationLineColor: '#61afef',
  // 背景色 - 浅灰白
  backgroundColor: '#f5f5f5',
  
  // 根节点样式 - 蓝色重点
  root: {
    fillColor: '#61afef',
    color: '#ffffff',
    borderColor: '#528bff',
    borderWidth: 0,
    borderRadius: 8,
    fontSize: 22,
    fontWeight: 'bold'
  },
  
  // 二级节点样式 - 纯白背景
  second: {
    fillColor: '#ffffff',
    color: '#383a42',
    borderColor: '#d0d0d0',
    borderWidth: 1,
    borderRadius: 6,
    fontSize: 15
  },
  
  // 三级及以下节点样式
  node: {
    fillColor: 'transparent',
    color: '#4a4a4a',
    fontSize: 13,
    borderColor: '#e0e0e0',
    borderWidth: 1
  },
  
  // 概要节点样式
  generalization: {
    fillColor: '#61afef',
    borderColor: '#528bff',
    borderWidth: 1,
    color: '#ffffff'
  }
}
