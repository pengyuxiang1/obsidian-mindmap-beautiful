// 银河之夜主题 - 深色系 | 星空紫蓝
// 风格: 宇宙星空、深邃神秘
// 特点: 紫蓝渐变、星空感、流动连线
export default {
  // 背景色 - 深空紫
  backgroundColor: '#0D0D1F',
  
  // 连线样式 - 星轨流动
  lineColor: '#818CF8',
  lineWidth: 2,
  lineDasharray: '10,5',
  lineStyle: 'curve',
  lineFlow: true,
  lineFlowDuration: 3,
  lineFlowForward: true,
  
  // 概要连线
  generalizationLineWidth: 2,
  generalizationLineColor: '#A5B4FC',
  
  // 根节点样式 - 星核
  root: {
    shape: 'ellipse',
    gradientStyle: true,
    startColor: '#A78BFA',
    endColor: '#6366F1',
    fillColor: '#6366F1',
    color: '#FFFFFF',
    borderColor: '#818CF8',
    borderWidth: 2,
    borderRadius: 24,
    fontSize: 22,
    fontWeight: 'bold',
    fontFamily: 'PingFang SC, -apple-system, sans-serif',
    paddingX: 24,
    paddingY: 14
  },
  
  // 二级节点样式 - 行星
  second: {
    shape: 'roundedRectangle',
    gradientStyle: true,
    startColor: '#1E1B4B',
    endColor: '#312E81',
    fillColor: '#312E81',
    color: '#C7D2FE',
    borderColor: '#6366F1',
    borderWidth: 1,
    borderRadius: 14,
    fontSize: 15,
    fontFamily: 'PingFang SC, -apple-system, sans-serif',
    paddingX: 16,
    paddingY: 10
  },
  
  // 三级及以下节点样式 - 星尘
  node: {
    shape: 'rectangle',
    fillColor: 'transparent',
    color: '#A5B4FC',
    fontSize: 13,
    borderColor: '#3730A3',
    borderWidth: 1,
    borderRadius: 6,
    fontFamily: 'PingFang SC, -apple-system, sans-serif',
    paddingX: 10,
    paddingY: 6
  },
  
  // 概要节点样式
  generalization: {
    shape: 'roundedRectangle',
    gradientStyle: true,
    startColor: '#4F46E5',
    endColor: '#6366F1',
    fillColor: '#4F46E5',
    borderColor: '#818CF8',
    borderWidth: 1,
    borderRadius: 12,
    color: '#E0E7FF',
    fontFamily: 'PingFang SC, -apple-system, sans-serif'
  }
}
