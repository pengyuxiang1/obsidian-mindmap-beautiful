// 阳光明媚主题 - 亮色系 | 暖黄橙渐变
// 风格: 活力阳光，适合创意头脑风暴
// 特点: 黄橙渐变、明亮活泼、带箭头连线
export default {
  // 背景色 - 暖白
  backgroundColor: '#FFFBEB',
  
  // 连线样式 - 曲线 + 箭头
  lineColor: '#F59E0B',
  lineWidth: 2,
  lineDasharray: 'none',
  lineStyle: 'curve',
  showLineMarker: true,          // 显示箭头
  lineMarkerDir: 'end',          // 箭头在末端
  
  // 概要连线
  generalizationLineWidth: 2,
  generalizationLineColor: '#FBBF24',
  
  // 根节点样式 - 太阳渐变
  root: {
    shape: 'ellipse',
    gradientStyle: true,
    startColor: '#FDE68A',
    endColor: '#F59E0B',
    fillColor: '#F59E0B',
    color: '#78350F',
    borderColor: '#D97706',
    borderWidth: 3,
    borderRadius: 24,
    fontSize: 22,
    fontWeight: 'bold',
    fontFamily: 'PingFang SC, -apple-system, sans-serif',
    paddingX: 24,
    paddingY: 14
  },
  
  // 二级节点样式
  second: {
    shape: 'roundedRectangle',
    gradientStyle: true,
    startColor: '#FEF3C7',
    endColor: '#FDE68A',
    fillColor: '#FDE68A',
    color: '#92400E',
    borderColor: '#FBBF24',
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
    color: '#B45309',
    fontSize: 13,
    borderColor: '#FDE68A',
    borderWidth: 1,
    borderRadius: 6,
    fontFamily: 'PingFang SC, -apple-system, sans-serif',
    paddingX: 10,
    paddingY: 6
  },
  
  // 概要节点样式
  generalization: {
    shape: 'roundedRectangle',
    fillColor: '#FEF3C7',
    borderColor: '#F59E0B',
    borderWidth: 1,
    borderRadius: 10,
    color: '#78350F',
    fontFamily: 'PingFang SC, -apple-system, sans-serif'
  }
}
