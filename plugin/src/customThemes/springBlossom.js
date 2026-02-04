// 春日樱花主题 - 亮色系 | 柔和粉色渐变
// 风格: 婚礼/活动策划，柔和优雅
// 特点: 渐变填充、圆润形状、流动连线
export default {
  // 背景色 - 淡紫粉
  backgroundColor: '#FAF5FF',
  
  // 连线样式 - 曲线 + 流动动画
  lineColor: '#E879F9',
  lineWidth: 2,
  lineDasharray: '8,4',          // 虚线效果
  lineStyle: 'curve',            // 曲线连接
  lineFlow: true,                // 开启流动动画
  lineFlowDuration: 2,           // 流动周期 2 秒
  lineFlowForward: true,         // 正向流动
  
  // 概要连线
  generalizationLineWidth: 2,
  generalizationLineColor: '#C084FC',
  
  // 根节点样式 - 渐变 + 椭圆形
  root: {
    shape: 'ellipse',            // 椭圆形状
    gradientStyle: true,         // 开启渐变
    startColor: '#F0ABFC',       // 渐变起始色 - 浅粉
    endColor: '#E879F9',         // 渐变结束色 - 洋红
    fillColor: '#E879F9',
    color: '#FFFFFF',
    borderColor: '#D946EF',
    borderWidth: 2,
    borderRadius: 20,
    fontSize: 22,
    fontWeight: 'bold',
    fontFamily: 'PingFang SC, -apple-system, sans-serif',
    paddingX: 20,
    paddingY: 12
  },
  
  // 二级节点样式 - 圆角矩形 + 浅色渐变
  second: {
    shape: 'roundedRectangle',   // 胶囊形状
    gradientStyle: true,
    startColor: '#FAE8FF',
    endColor: '#F5D0FE',
    fillColor: '#F5D0FE',
    color: '#86198F',
    borderColor: '#E879F9',
    borderWidth: 1,
    borderDasharray: 'none',
    borderRadius: 16,
    fontSize: 15,
    fontFamily: 'PingFang SC, -apple-system, sans-serif',
    paddingX: 14,
    paddingY: 8
  },
  
  // 三级及以下节点样式
  node: {
    shape: 'rectangle',
    fillColor: '#FFFFFF',
    color: '#7C3AED',
    fontSize: 13,
    borderColor: '#DDD6FE',
    borderWidth: 1,
    borderRadius: 8,
    fontFamily: 'PingFang SC, -apple-system, sans-serif',
    paddingX: 10,
    paddingY: 6
  },
  
  // 概要节点样式
  generalization: {
    shape: 'roundedRectangle',
    fillColor: '#DDD6FE',
    borderColor: '#C084FC',
    borderWidth: 1,
    borderRadius: 12,
    color: '#4C1D95',
    fontFamily: 'PingFang SC, -apple-system, sans-serif'
  }
}
