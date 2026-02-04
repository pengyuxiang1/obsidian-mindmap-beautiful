// 天空蓝主题 - 亮色系 | 专业蓝色系
// 风格: 商务专业，适合工作笔记/项目管理
// 特点: 经典蓝色、清晰层级、专业感
export default {
  // 背景色 - 浅蓝灰
  backgroundColor: '#F8FAFC',
  
  // 连线样式
  lineColor: '#3B82F6',
  lineWidth: 2,
  lineDasharray: 'none',
  lineStyle: 'curve',
  
  // 概要连线
  generalizationLineWidth: 2,
  generalizationLineColor: '#60A5FA',
  
  // 根节点样式
  root: {
    shape: 'roundedRectangle',
    gradientStyle: true,
    startColor: '#93C5FD',
    endColor: '#3B82F6',
    fillColor: '#3B82F6',
    color: '#FFFFFF',
    borderColor: '#2563EB',
    borderWidth: 2,
    borderRadius: 12,
    fontSize: 22,
    fontWeight: 'bold',
    fontFamily: 'PingFang SC, -apple-system, sans-serif',
    paddingX: 20,
    paddingY: 12
  },
  
  // 二级节点样式
  second: {
    shape: 'rectangle',
    gradientStyle: true,
    startColor: '#EFF6FF',
    endColor: '#DBEAFE',
    fillColor: '#DBEAFE',
    color: '#1E40AF',
    borderColor: '#93C5FD',
    borderWidth: 1,
    borderRadius: 8,
    fontSize: 15,
    fontFamily: 'PingFang SC, -apple-system, sans-serif',
    paddingX: 14,
    paddingY: 8
  },
  
  // 三级及以下节点样式
  node: {
    shape: 'rectangle',
    fillColor: '#FFFFFF',
    color: '#1E3A8A',
    fontSize: 13,
    borderColor: '#BFDBFE',
    borderWidth: 1,
    borderRadius: 6,
    fontFamily: 'PingFang SC, -apple-system, sans-serif',
    paddingX: 10,
    paddingY: 6
  },
  
  // 概要节点样式
  generalization: {
    shape: 'rectangle',
    fillColor: '#DBEAFE',
    borderColor: '#3B82F6',
    borderWidth: 1,
    borderRadius: 8,
    color: '#1E40AF',
    fontFamily: 'PingFang SC, -apple-system, sans-serif'
  }
}
