// 薄荷清新主题 - 亮色系 | 清凉绿色系
// 风格: 清新自然，适合健康/学习笔记
// 特点: 薄荷绿渐变、干净利落、圆角设计
export default {
  // 背景色 - 薄荷白
  backgroundColor: '#ECFDF5',
  
  // 连线样式
  lineColor: '#10B981',
  lineWidth: 2,
  lineDasharray: 'none',
  lineStyle: 'curve',
  
  // 概要连线
  generalizationLineWidth: 2,
  generalizationLineColor: '#34D399',
  
  // 根节点样式
  root: {
    shape: 'roundedRectangle',
    gradientStyle: true,
    startColor: '#6EE7B7',
    endColor: '#10B981',
    fillColor: '#10B981',
    color: '#FFFFFF',
    borderColor: '#059669',
    borderWidth: 2,
    borderRadius: 16,
    fontSize: 22,
    fontWeight: 'bold',
    fontFamily: 'PingFang SC, -apple-system, sans-serif',
    paddingX: 20,
    paddingY: 12
  },
  
  // 二级节点样式
  second: {
    shape: 'roundedRectangle',
    gradientStyle: true,
    startColor: '#D1FAE5',
    endColor: '#A7F3D0',
    fillColor: '#A7F3D0',
    color: '#065F46',
    borderColor: '#34D399',
    borderWidth: 1,
    borderRadius: 12,
    fontSize: 15,
    fontFamily: 'PingFang SC, -apple-system, sans-serif',
    paddingX: 14,
    paddingY: 8
  },
  
  // 三级及以下节点样式
  node: {
    shape: 'rectangle',
    fillColor: '#FFFFFF',
    color: '#047857',
    fontSize: 13,
    borderColor: '#A7F3D0',
    borderWidth: 1,
    borderRadius: 6,
    fontFamily: 'PingFang SC, -apple-system, sans-serif',
    paddingX: 10,
    paddingY: 6
  },
  
  // 概要节点样式
  generalization: {
    shape: 'roundedRectangle',
    fillColor: '#D1FAE5',
    borderColor: '#10B981',
    borderWidth: 1,
    borderRadius: 10,
    color: '#064E3B',
    fontFamily: 'PingFang SC, -apple-system, sans-serif'
  }
}
