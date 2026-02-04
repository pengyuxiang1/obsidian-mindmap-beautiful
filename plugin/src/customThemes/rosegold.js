// 玫瑰金主题 - 优雅的粉金色调
export default {
  // 连线颜色 - 玫瑰金
  lineColor: '#e8b4b8',
  lineWidth: 2,
  // 概要连线
  generalizationLineWidth: 2,
  generalizationLineColor: '#d4a5a5',
  // 背景色 - 深玫瑰灰
  backgroundColor: '#2a2226',
  
  // 根节点样式 - 玫瑰金
  root: {
    fillColor: '#e8b4b8',
    color: '#2a2226',
    borderColor: '#f5d0d0',
    borderWidth: 2,
    borderRadius: 10,
    fontSize: 22,
    fontWeight: 'bold'
  },
  
  // 二级节点样式 - 深玫瑰背景
  second: {
    fillColor: '#3d2f33',
    color: '#f5d0d0',
    borderColor: '#e8b4b8',
    borderWidth: 1,
    borderRadius: 6,
    fontSize: 15
  },
  
  // 三级及以下节点样式
  node: {
    fillColor: 'transparent',
    color: '#e8c4c8',
    fontSize: 13,
    borderColor: '#5a4850',
    borderWidth: 1
  },
  
  // 概要节点样式
  generalization: {
    fillColor: '#d4a5a5',
    borderColor: '#e8b4b8',
    borderWidth: 1,
    color: '#2a2226'
  }
}
