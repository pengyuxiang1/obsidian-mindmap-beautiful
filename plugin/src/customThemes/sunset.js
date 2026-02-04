// 暖阳橙主题 - 温暖的日落色调
export default {
  // 连线颜色 - 橙色
  lineColor: '#ff7f50',
  lineWidth: 2,
  // 概要连线
  generalizationLineWidth: 2,
  generalizationLineColor: '#ffa07a',
  // 背景色 - 深暖褐
  backgroundColor: '#2d1f1a',
  
  // 根节点样式 - 日落橙
  root: {
    fillColor: '#ff6347',
    color: '#ffffff',
    borderColor: '#ff7f50',
    borderWidth: 2,
    borderRadius: 10,
    fontSize: 22,
    fontWeight: 'bold'
  },
  
  // 二级节点样式 - 深橙褐
  second: {
    fillColor: '#3d2820',
    color: '#ffb347',
    borderColor: '#ff7f50',
    borderWidth: 1,
    borderRadius: 6,
    fontSize: 15
  },
  
  // 三级及以下节点样式
  node: {
    fillColor: 'transparent',
    color: '#ffdab9',
    fontSize: 13,
    borderColor: '#5a3d30',
    borderWidth: 1
  },
  
  // 概要节点样式
  generalization: {
    fillColor: '#ffa07a',
    borderColor: '#ff6347',
    borderWidth: 1,
    color: '#2d1f1a'
  }
}
