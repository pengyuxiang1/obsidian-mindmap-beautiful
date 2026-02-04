// Neumorphism 新拟态主题 - 基于 UI/UX Pro Max 设计系统
// 风格: 健康/健身应用、冥想平台、极简交互界面
// 特点: 柔和 UI，浮雕效果，微妙深度
export default {
  // 连线颜色 - 柔和蓝
  lineColor: '#94A3B8',
  lineWidth: 2,
  // 概要连线
  generalizationLineWidth: 2,
  generalizationLineColor: '#64748B',
  // 背景色 - 柔和灰（新拟态需要中性背景）
  backgroundColor: '#E2E8F0',
  
  // 根节点样式 - 浮雕主节点
  root: {
    fillColor: '#E2E8F0',
    color: '#334155',
    borderColor: '#CBD5E1',
    borderWidth: 0,
    borderRadius: 16,
    fontSize: 22,
    fontWeight: 'bold',
    fontFamily: 'PingFang SC, -apple-system, BlinkMacSystemFont, sans-serif'
  },
  
  // 二级节点样式 - 凹陷效果
  second: {
    fillColor: '#E2E8F0',
    color: '#475569',
    borderColor: '#CBD5E1',
    borderWidth: 0,
    borderRadius: 12,
    fontSize: 15,
    fontFamily: 'PingFang SC, -apple-system, BlinkMacSystemFont, sans-serif'
  },
  
  // 三级及以下节点样式
  node: {
    fillColor: 'transparent',
    color: '#64748B',
    fontSize: 13,
    borderColor: '#CBD5E1',
    borderWidth: 1,
    borderRadius: 8,
    fontFamily: 'PingFang SC, -apple-system, BlinkMacSystemFont, sans-serif'
  },
  
  // 概要节点样式
  generalization: {
    fillColor: '#CBD5E1',
    borderColor: '#94A3B8',
    borderWidth: 0,
    borderRadius: 10,
    color: '#334155',
    fontFamily: 'PingFang SC, -apple-system, BlinkMacSystemFont, sans-serif'
  }
}
