// DevDark 开发者深色主题 - 基于 UI/UX Pro Max 设计系统
// 风格: 开发工具/IDE 配色，代码编辑器风格
// 特点: 深色语法主题配色 + 蓝色焦点
export default {
  // 连线颜色 - 蓝色焦点
  lineColor: '#3B82F6',
  lineWidth: 2,
  // 概要连线
  generalizationLineWidth: 2,
  generalizationLineColor: '#60A5FA',
  // 背景色 - IDE 深色背景
  backgroundColor: '#0F172A',
  
  // 根节点样式 - 主蓝
  root: {
    fillColor: '#2563EB',
    color: '#F1F5F9',
    borderColor: '#3B82F6',
    borderWidth: 2,
    borderRadius: 8,
    fontSize: 22,
    fontWeight: 'bold',
    fontFamily: '"JetBrains Mono", "Fira Code", monospace'
  },
  
  // 二级节点样式 - 代码块风格
  second: {
    fillColor: '#1E293B',
    color: '#93C5FD',
    borderColor: '#334155',
    borderWidth: 1,
    borderRadius: 6,
    fontSize: 14,
    fontFamily: '"JetBrains Mono", "Fira Code", monospace'
  },
  
  // 三级及以下节点样式 - 注释风格
  node: {
    fillColor: 'transparent',
    color: '#94A3B8',
    fontSize: 13,
    borderColor: '#334155',
    borderWidth: 1,
    borderRadius: 4,
    fontFamily: '"JetBrains Mono", "Fira Code", monospace'
  },
  
  // 概要节点样式
  generalization: {
    fillColor: '#1E40AF',
    borderColor: '#3B82F6',
    borderWidth: 1,
    borderRadius: 6,
    color: '#E0F2FE',
    fontFamily: '"JetBrains Mono", "Fira Code", monospace'
  }
}
