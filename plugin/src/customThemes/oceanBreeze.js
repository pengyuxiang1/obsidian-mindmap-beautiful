// 海洋微风主题 - 亮色系 | 清新蓝绿渐变
// 风格: 清爽海洋风，适合夏日笔记
// 特点: 蓝绿渐变、波浪线条、圆润形状
export default {
  // 背景色 - 极淡青蓝
  backgroundColor: '#F0FDFA',
  
  // 连线样式 - 曲线 + 流动
  lineColor: '#14B8A6',
  lineWidth: 2,
  lineDasharray: '6,3',
  lineStyle: 'curve',
  lineFlow: true,
  lineFlowDuration: 1.5,
  lineFlowForward: true,
  
  // 概要连线
  generalizationLineWidth: 2,
  generalizationLineColor: '#2DD4BF',
  
  // 根节点样式 - 渐变圆角
  root: {
    shape: 'roundedRectangle',
    gradientStyle: true,
    startColor: '#5EEAD4',
    endColor: '#14B8A6',
    fillColor: '#14B8A6',
    color: '#FFFFFF',
    borderColor: '#0D9488',
    borderWidth: 2,
    borderRadius: 20,
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
    startColor: '#CCFBF1',
    endColor: '#99F6E4',
    fillColor: '#99F6E4',
    color: '#0F766E',
    borderColor: '#5EEAD4',
    borderWidth: 1,
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
    color: '#115E59',
    fontSize: 13,
    borderColor: '#A7F3D0',
    borderWidth: 1,
    borderRadius: 8,
    fontFamily: 'PingFang SC, -apple-system, sans-serif',
    paddingX: 10,
    paddingY: 6
  },
  
  // 概要节点样式
  generalization: {
    shape: 'roundedRectangle',
    fillColor: '#99F6E4',
    borderColor: '#2DD4BF',
    borderWidth: 1,
    borderRadius: 10,
    color: '#134E4A',
    fontFamily: 'PingFang SC, -apple-system, sans-serif'
  }
}
