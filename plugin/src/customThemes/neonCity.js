// 霓虹都市主题 - 深色系 | 赛博朋克升级版
// 风格: 未来都市、霓虹灯效、炫酷科幻
// 特点: 渐变填充、流动连线、霓虹发光效果
export default {
  // 背景色 - 深紫蓝
  backgroundColor: '#0A0A1A',
  
  // 连线样式 - 霓虹流动
  lineColor: '#FF00FF',
  lineWidth: 2,
  lineDasharray: '6,3',
  lineStyle: 'curve',
  lineFlow: true,
  lineFlowDuration: 1,
  lineFlowForward: true,
  
  // 概要连线
  generalizationLineWidth: 2,
  generalizationLineColor: '#00FFFF',
  
  // 根节点样式 - 霓虹渐变
  root: {
    shape: 'octagonalRectangle',  // 八角矩形
    gradientStyle: true,
    startColor: '#FF00FF',
    endColor: '#00FFFF',
    fillColor: '#FF00FF',
    color: '#FFFFFF',
    borderColor: '#00FFFF',
    borderWidth: 2,
    borderRadius: 8,
    fontSize: 22,
    fontWeight: 'bold',
    fontFamily: '"Orbitron", PingFang SC, sans-serif',
    paddingX: 24,
    paddingY: 14
  },
  
  // 二级节点样式
  second: {
    shape: 'parallelogram',       // 平行四边形
    gradientStyle: true,
    startColor: '#1A1A2E',
    endColor: '#16213E',
    fillColor: '#1A1A2E',
    color: '#00FFFF',
    borderColor: '#FF00FF',
    borderWidth: 1,
    borderDasharray: '4,2',
    borderRadius: 4,
    fontSize: 15,
    fontFamily: 'PingFang SC, -apple-system, sans-serif',
    paddingX: 16,
    paddingY: 10
  },
  
  // 三级及以下节点样式
  node: {
    shape: 'rectangle',
    fillColor: 'transparent',
    color: '#E0E0FF',
    fontSize: 13,
    borderColor: '#333366',
    borderWidth: 1,
    borderDasharray: '2,2',
    borderRadius: 4,
    fontFamily: 'PingFang SC, -apple-system, sans-serif',
    paddingX: 10,
    paddingY: 6
  },
  
  // 概要节点样式
  generalization: {
    shape: 'diamond',             // 菱形
    fillColor: '#00FFFF',
    borderColor: '#FF00FF',
    borderWidth: 2,
    borderRadius: 0,
    color: '#0A0A1A',
    fontFamily: 'PingFang SC, -apple-system, sans-serif'
  }
}
