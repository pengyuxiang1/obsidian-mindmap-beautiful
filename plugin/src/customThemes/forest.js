// 森林绿主题 - 清新自然的绿色系
export default {
  // 连线颜色 - 翠绿色
  lineColor: '#2ecc71',
  lineWidth: 2,
  // 概要连线
  generalizationLineWidth: 2,
  generalizationLineColor: '#27ae60',
  // 背景色 - 深森林绿
  backgroundColor: '#1a2f23',
  
  // 根节点样式 - 翠绿背景
  root: {
    fillColor: '#2ecc71',
    color: '#ffffff',
    borderColor: '#27ae60',
    borderWidth: 2,
    borderRadius: 12,
    fontSize: 22,
    fontWeight: 'bold'
  },
  
  // 二级节点样式 - 深绿背景
  second: {
    fillColor: '#1e3d2f',
    color: '#a8e6cf',
    borderColor: '#2ecc71',
    borderWidth: 1,
    borderRadius: 8,
    fontSize: 15
  },
  
  // 三级及以下节点样式
  node: {
    fillColor: 'transparent',
    color: '#c8e6c9',
    fontSize: 13,
    borderColor: '#2d5a3f',
    borderWidth: 1
  },
  
  // 概要节点样式
  generalization: {
    fillColor: '#27ae60',
    borderColor: '#2ecc71',
    borderWidth: 1,
    color: '#ffffff'
  }
}
