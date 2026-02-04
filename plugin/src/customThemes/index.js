// 自定义主题索引文件 - 基于 UI/UX Pro Max 设计系统
// ================================================
// 特性：渐变填充、多种形状、流动动画、虚线边框等高级样式

// === 亮色主题 ===
import minimal from './minimal'
import springBlossom from './springBlossom'
import oceanBreeze from './oceanBreeze'
import sunnyDay from './sunnyDay'
import lavenderDream from './lavenderDream'
import mintFresh from './mintFresh'
import skyBlue from './skyBlue'
import coralReef from './coralReef'
import neumorphism from './neumorphism'

// === 深色主题 - 经典系列 ===
import cyberpunk from './cyberpunk'
import oceanDeep from './oceanDeep'
import forest from './forest'
import sunset from './sunset'
import aurora from './aurora'
import rosegold from './rosegold'

// === 深色主题 - 高级系列 ===
import glassmorphism from './glassmorphism'
import auroraUI from './auroraUI'
import devDark from './devDark'
import quantumNeon from './quantumNeon'
import cryptoGold from './cryptoGold'
import vaporwave from './vaporwave'
import terminalGreen from './terminalGreen'
import neonCity from './neonCity'
import galaxyNight from './galaxyNight'
import monokai from './monokai'
import draculaPro from './draculaPro'

// 导入主题预览图 - 亮色
import minimalImg from './imgs/minimal.png'
import springBlossomImg from './imgs/springBlossom.png'
import oceanBreezeImg from './imgs/oceanBreeze.png'
import sunnyDayImg from './imgs/sunnyDay.png'
import lavenderDreamImg from './imgs/lavenderDream.png'
import mintFreshImg from './imgs/mintFresh.png'
import skyBlueImg from './imgs/skyBlue.png'
import coralReefImg from './imgs/coralReef.png'
import neumorphismImg from './imgs/neumorphism.png'

// 导入主题预览图 - 深色经典
import cyberpunkImg from './imgs/cyberpunk.png'
import oceanDeepImg from './imgs/oceanDeep.png'
import forestImg from './imgs/forest.png'
import sunsetImg from './imgs/sunset.png'
import auroraImg from './imgs/aurora.png'
import rosegoldImg from './imgs/rosegold.png'

// 导入主题预览图 - 深色高级
import glassmorphismImg from './imgs/glassmorphism.png'
import auroraUIImg from './imgs/auroraUI.png'
import devDarkImg from './imgs/devDark.png'
import quantumNeonImg from './imgs/quantumNeon.png'
import cryptoGoldImg from './imgs/cryptoGold.png'
import vaporwaveImg from './imgs/vaporwave.png'
import terminalGreenImg from './imgs/terminalGreen.png'
import neonCityImg from './imgs/neonCity.png'
import galaxyNightImg from './imgs/galaxyNight.png'
import monokaiImg from './imgs/monokai.png'
import draculaProImg from './imgs/draculaPro.png'

// 导出自定义主题列表
export const customThemeList = [
  // ========================================
  // 🌞 亮色主题系列 - Light Themes
  // ========================================
  {
    name: '📝 简约白',
    value: 'minimal',
    theme: minimal,
    dark: false,
    img: minimalImg
  },
  {
    name: '🌸 春日樱花',
    value: 'springBlossom',
    theme: springBlossom,
    dark: false,
    img: springBlossomImg
  },
  {
    name: '🌊 海洋微风',
    value: 'oceanBreeze',
    theme: oceanBreeze,
    dark: false,
    img: oceanBreezeImg
  },
  {
    name: '☀️ 阳光明媚',
    value: 'sunnyDay',
    theme: sunnyDay,
    dark: false,
    img: sunnyDayImg
  },
  {
    name: '💜 薰衣草梦',
    value: 'lavenderDream',
    theme: lavenderDream,
    dark: false,
    img: lavenderDreamImg
  },
  {
    name: '🍃 薄荷清新',
    value: 'mintFresh',
    theme: mintFresh,
    dark: false,
    img: mintFreshImg
  },
  {
    name: '🔵 天空蓝',
    value: 'skyBlue',
    theme: skyBlue,
    dark: false,
    img: skyBlueImg
  },
  {
    name: '🪸 珊瑚礁',
    value: 'coralReef',
    theme: coralReef,
    dark: false,
    img: coralReefImg
  },
  {
    name: '🔘 新拟态',
    value: 'neumorphism',
    theme: neumorphism,
    dark: false,
    img: neumorphismImg
  },
  
  // ========================================
  // 🌙 深色主题系列 - Dark Themes
  // ========================================
  
  // --- 经典系列 ---
  {
    name: '🌆 赛博朋克',
    value: 'cyberpunk',
    theme: cyberpunk,
    dark: true,
    img: cyberpunkImg
  },
  {
    name: '🌊 深海',
    value: 'oceanDeep', 
    theme: oceanDeep,
    dark: true,
    img: oceanDeepImg
  },
  {
    name: '🌲 森林',
    value: 'forest',
    theme: forest,
    dark: true,
    img: forestImg
  },
  {
    name: '🌅 暖阳',
    value: 'sunset',
    theme: sunset,
    dark: true,
    img: sunsetImg
  },
  {
    name: '🌌 极光',
    value: 'aurora',
    theme: aurora,
    dark: true,
    img: auroraImg
  },
  {
    name: '🌸 玫瑰金',
    value: 'rosegold',
    theme: rosegold,
    dark: true,
    img: rosegoldImg
  },
  
  // --- 高级系列 ---
  {
    name: '🪟 毛玻璃',
    value: 'glassmorphism',
    theme: glassmorphism,
    dark: true,
    img: glassmorphismImg
  },
  {
    name: '✨ Aurora UI',
    value: 'auroraUI',
    theme: auroraUI,
    dark: true,
    img: auroraUIImg
  },
  {
    name: '🌃 霓虹都市',
    value: 'neonCity',
    theme: neonCity,
    dark: true,
    img: neonCityImg
  },
  {
    name: '🌌 银河之夜',
    value: 'galaxyNight',
    theme: galaxyNight,
    dark: true,
    img: galaxyNightImg
  },
  {
    name: '⚛️ 量子霓虹',
    value: 'quantumNeon',
    theme: quantumNeon,
    dark: true,
    img: quantumNeonImg
  },
  {
    name: '🪙 加密金',
    value: 'cryptoGold',
    theme: cryptoGold,
    dark: true,
    img: cryptoGoldImg
  },
  {
    name: '🌴 蒸汽波',
    value: 'vaporwave',
    theme: vaporwave,
    dark: true,
    img: vaporwaveImg
  },
  
  // --- 开发者系列 ---
  {
    name: '💻 开发者',
    value: 'devDark',
    theme: devDark,
    dark: true,
    img: devDarkImg
  },
  {
    name: '🖥️ 终端绿',
    value: 'terminalGreen',
    theme: terminalGreen,
    dark: true,
    img: terminalGreenImg
  },
  {
    name: '🎨 Monokai',
    value: 'monokai',
    theme: monokai,
    dark: true,
    img: monokaiImg
  },
  {
    name: '🧛 Dracula',
    value: 'draculaPro',
    theme: draculaPro,
    dark: true,
    img: draculaProImg
  }
]

// 注册自定义主题的方法
export const registerCustomThemes = (MindMap) => {
  customThemeList.forEach(item => {
    MindMap.defineTheme(item.value, item.theme)
  })
}

export default customThemeList
