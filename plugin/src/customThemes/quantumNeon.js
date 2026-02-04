// Quantum Neon 量子霓虹主题 - 基于 UI/UX Pro Max 设计系统
// 风格: 量子计算、高科技、干涉图案 + 霓虹 + 深黑
// 特点: 青色、紫色、洋红的科幻配色
export default {
  // 连线颜色 - 霓虹青
  lineColor: '#00FFFF',
  lineWidth: 2,
  // 概要连线
  generalizationLineWidth: 2,
  generalizationLineColor: '#7B61FF',
  // 背景色 - 量子深黑
  backgroundColor: '#050510',
  
  // 根节点样式 - 量子核心
  root: {
    fillColor: '#7B61FF',
    color: '#E0E0FF',
    borderColor: '#00FFFF',
    borderWidth: 2,
    borderRadius: 12,
    fontSize: 22,
    fontWeight: 'bold',
    fontFamily: 'PingFang SC, -apple-system, BlinkMacSystemFont, sans-serif'
  },
  
  // 二级节点样式 - 量子态
  second: {
    fillColor: '#0A0A1F',
    color: '#00FFFF',
    borderColor: '#333344',
    borderWidth: 1,
    borderRadius: 8,
    fontSize: 15,
    fontFamily: 'PingFang SC, -apple-system, BlinkMacSystemFont, sans-serif'
  },
  
  // 三级及以下节点样式 - 量子位
  node: {
    fillColor: 'transparent',
    color: '#B0B0FF',
    fontSize: 13,
    borderColor: '#333344',
    borderWidth: 1,
    borderRadius: 4,
    fontFamily: 'PingFang SC, -apple-system, BlinkMacSystemFont, sans-serif'
  },
  
  // 概要节点样式
  generalization: {
    fillColor: '#FF00FF',
    borderColor: '#7B61FF',
    borderWidth: 1,
    borderRadius: 6,
    color: '#050510',
    fontFamily: 'PingFang SC, -apple-system, BlinkMacSystemFont, sans-serif'
  }
}
