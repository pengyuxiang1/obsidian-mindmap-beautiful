// Glassmorphism 毛玻璃主题 - 基于 UI/UX Pro Max 设计系统
// 风格: 现代 SaaS、金融仪表盘、高端企业风格
// 特点: 半透明磨砂玻璃效果，层次分明
export default {
  // 连线颜色 - 柔和蓝
  lineColor: 'rgba(96, 165, 250, 0.8)',
  lineWidth: 2,
  // 概要连线
  generalizationLineWidth: 2,
  generalizationLineColor: 'rgba(147, 197, 253, 0.8)',
  // 背景色 - 深蓝黑（支持毛玻璃效果的深色背景）
  backgroundColor: '#0F172A',
  
  // 根节点样式 - 毛玻璃主节点
  root: {
    fillColor: 'rgba(59, 130, 246, 0.85)',
    color: '#F8FAFC',
    borderColor: 'rgba(147, 197, 253, 0.3)',
    borderWidth: 1,
    borderRadius: 12,
    fontSize: 22,
    fontWeight: 'bold',
    fontFamily: 'PingFang SC, -apple-system, BlinkMacSystemFont, sans-serif'
  },
  
  // 二级节点样式 - 半透明层
  second: {
    fillColor: 'rgba(30, 41, 59, 0.7)',
    color: '#93C5FD',
    borderColor: 'rgba(59, 130, 246, 0.4)',
    borderWidth: 1,
    borderRadius: 8,
    fontSize: 15,
    fontFamily: 'PingFang SC, -apple-system, BlinkMacSystemFont, sans-serif'
  },
  
  // 三级及以下节点样式
  node: {
    fillColor: 'transparent',
    color: '#CBD5E1',
    fontSize: 13,
    borderColor: 'rgba(51, 65, 85, 0.6)',
    borderWidth: 1,
    borderRadius: 6,
    fontFamily: 'PingFang SC, -apple-system, BlinkMacSystemFont, sans-serif'
  },
  
  // 概要节点样式
  generalization: {
    fillColor: 'rgba(59, 130, 246, 0.6)',
    borderColor: 'rgba(147, 197, 253, 0.5)',
    borderWidth: 1,
    borderRadius: 6,
    color: '#F1F5F9',
    fontFamily: 'PingFang SC, -apple-system, BlinkMacSystemFont, sans-serif'
  }
}
