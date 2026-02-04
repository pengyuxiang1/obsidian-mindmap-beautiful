// Aurora UI 极光主题 - 基于 UI/UX Pro Max 设计系统
// 风格: 现代 SaaS、创意机构、高端产品、英雄区域
// 特点: 活力渐变，平滑融合，北极光效果
export default {
  // 连线颜色 - 电光蓝到洋红渐变感
  lineColor: '#00BFFF',
  lineWidth: 2,
  // 概要连线
  generalizationLineWidth: 2,
  generalizationLineColor: '#FF1493',
  // 背景色 - 深空紫黑
  backgroundColor: '#0D0D1A',
  
  // 根节点样式 - 极光核心
  root: {
    fillColor: '#8B5CF6',
    color: '#FFFFFF',
    borderColor: '#A78BFA',
    borderWidth: 2,
    borderRadius: 16,
    fontSize: 22,
    fontWeight: 'bold',
    fontFamily: 'PingFang SC, -apple-system, BlinkMacSystemFont, sans-serif'
  },
  
  // 二级节点样式 - 极光波纹
  second: {
    fillColor: '#1E1B4B',
    color: '#A5B4FC',
    borderColor: '#6366F1',
    borderWidth: 1,
    borderRadius: 10,
    fontSize: 15,
    fontFamily: 'PingFang SC, -apple-system, BlinkMacSystemFont, sans-serif'
  },
  
  // 三级及以下节点样式
  node: {
    fillColor: 'transparent',
    color: '#C7D2FE',
    fontSize: 13,
    borderColor: '#3730A3',
    borderWidth: 1,
    borderRadius: 6,
    fontFamily: 'PingFang SC, -apple-system, BlinkMacSystemFont, sans-serif'
  },
  
  // 概要节点样式
  generalization: {
    fillColor: '#4F46E5',
    borderColor: '#818CF8',
    borderWidth: 1,
    borderRadius: 8,
    color: '#F5F3FF',
    fontFamily: 'PingFang SC, -apple-system, BlinkMacSystemFont, sans-serif'
  }
}
