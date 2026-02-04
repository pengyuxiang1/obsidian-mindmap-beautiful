// 赛博朋克主题
export default {
  // 连线颜色 - 霓虹粉
  lineColor: '#ff00ff',
  lineWidth: 2,
  // 概要连线
  generalizationLineWidth: 2,
  generalizationLineColor: '#00ffff',
  // 背景色 - 深蓝黑
  backgroundColor: '#0a0a1a',
  
  // 根节点样式 - 霓虹粉背景
  root: {
    fillColor: '#ff00ff',
    color: '#000000',
    borderColor: '#00ffff',
    borderWidth: 2,
    borderRadius: 8,
    fontSize: 22,
    fontWeight: 'bold'
  },
  
  // 二级节点样式 - 深蓝背景，青色边框
  second: {
    fillColor: '#1a1a2e',
    color: '#00ffff',
    borderColor: '#ff00ff',
    borderWidth: 1,
    borderRadius: 5,
    fontSize: 14
  },
  
  // 三级及以下节点样式
  node: {
    fillColor: 'transparent',
    color: '#ffffff',
    fontSize: 12,
    borderColor: '#333366',
    borderWidth: 1
  },
  
  // 概要节点样式
  generalization: {
    fillColor: '#00ffff',
    borderColor: '#ff00ff',
    borderWidth: 1,
    color: '#000000'
  }
}
