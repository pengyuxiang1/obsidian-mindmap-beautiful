// Crypto Gold 加密金主题 - 基于 UI/UX Pro Max 设计系统
// 风格: 金融科技/加密货币，深色科技 + 信任感 + 活力强调
// 特点: 金色、琥珀色配深蓝黑背景
export default {
  // 连线颜色 - 金色
  lineColor: '#F59E0B',
  lineWidth: 2,
  // 概要连线
  generalizationLineWidth: 2,
  generalizationLineColor: '#FBBF24',
  // 背景色 - 深蓝黑
  backgroundColor: '#0F172A',
  
  // 根节点样式 - 金币核心
  root: {
    fillColor: '#F59E0B',
    color: '#0F172A',
    borderColor: '#FCD34D',
    borderWidth: 2,
    borderRadius: 10,
    fontSize: 22,
    fontWeight: 'bold',
    fontFamily: 'PingFang SC, -apple-system, BlinkMacSystemFont, sans-serif'
  },
  
  // 二级节点样式 - 深金
  second: {
    fillColor: '#1E293B',
    color: '#FCD34D',
    borderColor: '#334155',
    borderWidth: 1,
    borderRadius: 8,
    fontSize: 15,
    fontFamily: 'PingFang SC, -apple-system, BlinkMacSystemFont, sans-serif'
  },
  
  // 三级及以下节点样式
  node: {
    fillColor: 'transparent',
    color: '#FDE68A',
    fontSize: 13,
    borderColor: '#334155',
    borderWidth: 1,
    borderRadius: 6,
    fontFamily: 'PingFang SC, -apple-system, BlinkMacSystemFont, sans-serif'
  },
  
  // 概要节点样式
  generalization: {
    fillColor: '#8B5CF6',
    borderColor: '#A78BFA',
    borderWidth: 1,
    borderRadius: 6,
    color: '#F8FAFC',
    fontFamily: 'PingFang SC, -apple-system, BlinkMacSystemFont, sans-serif'
  }
}
