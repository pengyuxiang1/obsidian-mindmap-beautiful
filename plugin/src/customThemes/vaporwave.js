// Vaporwave 蒸汽波主题 - 基于 UI/UX Pro Max 设计系统
// 风格: 合成波、复古未来主义、80-90年代、霓虹、故障艺术
// 特点: 粉色、青色、薄荷绿、紫色的复古美学
export default {
  // 连线颜色 - 霓虹粉
  lineColor: '#FF71CE',
  lineWidth: 2,
  // 概要连线
  generalizationLineWidth: 2,
  generalizationLineColor: '#01CDFE',
  // 背景色 - 深紫蓝
  backgroundColor: '#1A0A2E',
  
  // 根节点样式 - 日落霓虹
  root: {
    fillColor: '#FF71CE',
    color: '#1A0A2E',
    borderColor: '#B967FF',
    borderWidth: 2,
    borderRadius: 8,
    fontSize: 22,
    fontWeight: 'bold',
    fontFamily: '"Noto Sans SC", PingFang SC, sans-serif'
  },
  
  // 二级节点样式 - 青色霓虹
  second: {
    fillColor: '#2D1B4E',
    color: '#01CDFE',
    borderColor: '#FF71CE',
    borderWidth: 1,
    borderRadius: 6,
    fontSize: 15,
    fontFamily: '"Noto Sans SC", PingFang SC, sans-serif'
  },
  
  // 三级及以下节点样式 - 薄荷霓虹
  node: {
    fillColor: 'transparent',
    color: '#05FFA1',
    fontSize: 13,
    borderColor: '#B967FF',
    borderWidth: 1,
    borderRadius: 4,
    fontFamily: '"Noto Sans SC", PingFang SC, sans-serif'
  },
  
  // 概要节点样式
  generalization: {
    fillColor: '#B967FF',
    borderColor: '#01CDFE',
    borderWidth: 1,
    borderRadius: 6,
    color: '#FFFFFF',
    fontFamily: '"Noto Sans SC", PingFang SC, sans-serif'
  }
}
