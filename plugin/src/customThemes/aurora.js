// 极光紫主题 - 梦幻的紫色渐变感
export default {
  // 连线颜色 - 紫罗兰
  lineColor: '#9b59b6',
  lineWidth: 2,
  // 概要连线
  generalizationLineWidth: 2,
  generalizationLineColor: '#8e44ad',
  // 背景色 - 深紫黑
  backgroundColor: '#1a1625',
  
  // 根节点样式 - 极光紫
  root: {
    fillColor: '#9b59b6',
    color: '#ffffff',
    borderColor: '#e056fd',
    borderWidth: 2,
    borderRadius: 10,
    fontSize: 22,
    fontWeight: 'bold'
  },
  
  // 二级节点样式 - 深紫背景
  second: {
    fillColor: '#2d2040',
    color: '#dda0dd',
    borderColor: '#9b59b6',
    borderWidth: 1,
    borderRadius: 6,
    fontSize: 15
  },
  
  // 三级及以下节点样式
  node: {
    fillColor: 'transparent',
    color: '#d8bfd8',
    fontSize: 13,
    borderColor: '#4a3660',
    borderWidth: 1
  },
  
  // 概要节点样式
  generalization: {
    fillColor: '#8e44ad',
    borderColor: '#9b59b6',
    borderWidth: 1,
    color: '#ffffff'
  }
}
