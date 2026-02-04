// 珊瑚礁主题 - 亮色系 | 温暖珊瑚色
// 风格: 温馨活力，适合生活/旅行笔记
// 特点: 珊瑚橙渐变、温暖配色、流动效果
export default {
  // 背景色 - 暖白
  backgroundColor: '#FFF7ED',
  
  // 连线样式 - 流动动画
  lineColor: '#F97316',
  lineWidth: 2,
  lineDasharray: '8,4',
  lineStyle: 'curve',
  lineFlow: true,
  lineFlowDuration: 1.8,
  lineFlowForward: true,
  
  // 概要连线
  generalizationLineWidth: 2,
  generalizationLineColor: '#FB923C',
  
  // 根节点样式
  root: {
    shape: 'ellipse',
    gradientStyle: true,
    startColor: '#FDBA74',
    endColor: '#F97316',
    fillColor: '#F97316',
    color: '#FFFFFF',
    borderColor: '#EA580C',
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
    startColor: '#FED7AA',
    endColor: '#FDBA74',
    fillColor: '#FDBA74',
    color: '#9A3412',
    borderColor: '#FB923C',
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
    color: '#C2410C',
    fontSize: 13,
    borderColor: '#FED7AA',
    borderWidth: 1,
    borderRadius: 8,
    fontFamily: 'PingFang SC, -apple-system, sans-serif',
    paddingX: 10,
    paddingY: 6
  },
  
  // 概要节点样式
  generalization: {
    shape: 'roundedRectangle',
    fillColor: '#FFEDD5',
    borderColor: '#F97316',
    borderWidth: 1,
    borderRadius: 10,
    color: '#7C2D12',
    fontFamily: 'PingFang SC, -apple-system, sans-serif'
  }
}
