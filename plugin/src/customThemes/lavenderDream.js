// 薰衣草之梦主题 - 亮色系 | 浪漫紫色系
// 风格: 优雅浪漫，适合女性用户
// 特点: 紫色渐变、柔和边框、流动连线
export default {
  // 背景色 - 淡紫白
  backgroundColor: '#FAF5FF',
  
  // 连线样式 - 曲线 + 流动
  lineColor: '#8B5CF6',
  lineWidth: 2,
  lineDasharray: '10,5',
  lineStyle: 'curve',
  lineFlow: true,
  lineFlowDuration: 2.5,
  lineFlowForward: true,
  
  // 概要连线
  generalizationLineWidth: 2,
  generalizationLineColor: '#A78BFA',
  
  // 根节点样式 - 渐变菱形
  root: {
    shape: 'roundedRectangle',
    gradientStyle: true,
    startColor: '#C4B5FD',
    endColor: '#8B5CF6',
    fillColor: '#8B5CF6',
    color: '#FFFFFF',
    borderColor: '#7C3AED',
    borderWidth: 2,
    borderRadius: 18,
    fontSize: 22,
    fontWeight: 'bold',
    fontFamily: 'PingFang SC, -apple-system, sans-serif',
    paddingX: 22,
    paddingY: 12
  },
  
  // 二级节点样式
  second: {
    shape: 'roundedRectangle',
    gradientStyle: true,
    startColor: '#EDE9FE',
    endColor: '#DDD6FE',
    fillColor: '#DDD6FE',
    color: '#5B21B6',
    borderColor: '#A78BFA',
    borderWidth: 1,
    borderDasharray: '4,2',      // 虚线边框
    borderRadius: 14,
    fontSize: 15,
    fontFamily: 'PingFang SC, -apple-system, sans-serif',
    paddingX: 14,
    paddingY: 8
  },
  
  // 三级及以下节点样式
  node: {
    shape: 'rectangle',
    fillColor: '#FFFFFF',
    color: '#6D28D9',
    fontSize: 13,
    borderColor: '#E9D5FF',
    borderWidth: 1,
    borderRadius: 8,
    fontFamily: 'PingFang SC, -apple-system, sans-serif',
    paddingX: 10,
    paddingY: 6
  },
  
  // 概要节点样式
  generalization: {
    shape: 'roundedRectangle',
    fillColor: '#EDE9FE',
    borderColor: '#8B5CF6',
    borderWidth: 1,
    borderRadius: 12,
    color: '#4C1D95',
    fontFamily: 'PingFang SC, -apple-system, sans-serif'
  }
}
