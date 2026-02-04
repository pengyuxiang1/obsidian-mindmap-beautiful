// 深海主题
export default {
  // 连线颜色 - 海蓝色
  lineColor: '#1e90ff',
  lineWidth: 2,
  // 概要连线
  generalizationLineWidth: 2,
  generalizationLineColor: '#00ced1',
  // 背景色 - 深海蓝
  backgroundColor: '#0c1929',
  
  // 根节点样式 - 发光蓝
  root: {
    fillColor: '#1e90ff',
    color: '#ffffff',
    borderColor: '#00bfff',
    borderWidth: 2,
    borderRadius: 10,
    fontSize: 20,
    fontWeight: 'bold'
  },
  
  // 二级节点样式
  second: {
    fillColor: '#152238',
    color: '#87ceeb',
    borderColor: '#1e90ff',
    borderWidth: 1,
    borderRadius: 6,
    fontSize: 14
  },
  
  // 三级及以下节点样式
  node: {
    fillColor: 'transparent',
    color: '#b0c4de',
    fontSize: 12,
    borderColor: '#1e4d6b',
    borderWidth: 1
  },
  
  // 概要节点样式
  generalization: {
    fillColor: '#00ced1',
    borderColor: '#1e90ff',
    borderWidth: 1,
    color: '#ffffff'
  }
}
