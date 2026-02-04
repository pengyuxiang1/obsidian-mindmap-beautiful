/**
 * 自动生成主题预览图脚本
 * 
 * 使用 Puppeteer 在无头浏览器中渲染思维导图并截图
 * 
 * 使用方法:
 *   node scripts/generate-theme-preview.js
 * 
 * 依赖:
 *   npm install puppeteer --save-dev
 */

const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

// 示例思维导图数据
const sampleMindMapData = {
  data: { text: '根节点' },
  children: [
    {
      data: { text: '二级节点' },
      children: [
        { data: { text: '分支主题' }, children: [] },
        { data: { text: '分支主题' }, children: [] }
      ]
    }
  ]
};

// 主题列表 - 需要与 customThemes/index.js 保持同步
const themesToGenerate = [
  // 亮色主题
  { name: 'minimal', file: 'minimal.js' },
  { name: 'springBlossom', file: 'springBlossom.js' },
  { name: 'oceanBreeze', file: 'oceanBreeze.js' },
  { name: 'sunnyDay', file: 'sunnyDay.js' },
  { name: 'lavenderDream', file: 'lavenderDream.js' },
  { name: 'mintFresh', file: 'mintFresh.js' },
  { name: 'skyBlue', file: 'skyBlue.js' },
  { name: 'coralReef', file: 'coralReef.js' },
  { name: 'neumorphism', file: 'neumorphism.js' },
  // 深色主题 - 经典
  { name: 'cyberpunk', file: 'cyberpunk.js' },
  { name: 'oceanDeep', file: 'oceanDeep.js' },
  { name: 'forest', file: 'forest.js' },
  { name: 'sunset', file: 'sunset.js' },
  { name: 'aurora', file: 'aurora.js' },
  { name: 'rosegold', file: 'rosegold.js' },
  // 深色主题 - 高级
  { name: 'glassmorphism', file: 'glassmorphism.js' },
  { name: 'auroraUI', file: 'auroraUI.js' },
  { name: 'neonCity', file: 'neonCity.js' },
  { name: 'galaxyNight', file: 'galaxyNight.js' },
  { name: 'quantumNeon', file: 'quantumNeon.js' },
  { name: 'cryptoGold', file: 'cryptoGold.js' },
  { name: 'vaporwave', file: 'vaporwave.js' },
  // 深色主题 - 开发者
  { name: 'devDark', file: 'devDark.js' },
  { name: 'terminalGreen', file: 'terminalGreen.js' },
  { name: 'monokai', file: 'monokai.js' },
  { name: 'draculaPro', file: 'draculaPro.js' }
];

async function generatePreview(themeName, themeConfig) {
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  
  const page = await browser.newPage();
  await page.setViewport({ width: 800, height: 300 });
  
  // 创建 HTML 页面来渲染思维导图
  const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        * { margin: 0; padding: 0; }
        body { overflow: hidden; }
        #container { width: 800px; height: 300px; }
      </style>
    </head>
    <body>
      <div id="container"></div>
      <script src="https://unpkg.com/simple-mind-map@0.14.0/dist/simpleMindMap.umd.min.js"></script>
      <script>
        const themeConfig = ${JSON.stringify(themeConfig)};
        const data = ${JSON.stringify(sampleMindMapData)};
        
        // 定义自定义主题
        simpleMindMap.default.defineTheme('${themeName}', themeConfig);
        
        // 创建思维导图实例
        const mindMap = new simpleMindMap.default({
          el: document.getElementById('container'),
          data: data,
          theme: '${themeName}',
          layout: 'logicalStructure',
          scaleRatio: 0.1,
          enableFreeDrag: false,
          readonly: true,
          initRootNodePosition: ['5%', '35%']
        });
        
        // 渲染完成后调整视图
        mindMap.on('node_tree_render_end', () => {
          // 设置缩放比例
          mindMap.view.setScale(1.8);
          
          // 向上移动视图 40px，向左移动 30px
          mindMap.view.translateY(-40);
          mindMap.view.translateX(-30);
          
          // 等待一小段时间确保渲染完成
          setTimeout(() => {
            window.renderComplete = true;
          }, 500);
        });
        
        // 备用超时
        setTimeout(() => {
          window.renderComplete = true;
        }, 2000);
      </script>
    </body>
    </html>
  `;
  
  await page.setContent(html, { waitUntil: 'networkidle0' });
  
  // 等待渲染完成
  await page.waitForFunction('window.renderComplete === true', { timeout: 5000 });
  
  // 额外等待确保渲染稳定
  await new Promise(resolve => setTimeout(resolve, 300));
  
  // 获取思维导图容器的实际大小
  const boundingBox = await page.$eval('#container', (element) => {
    const rect = element.getBoundingClientRect();
    return {
      x: rect.left,
      y: rect.top,
      width: rect.width,
      height: rect.height
    };
  });
  
  // 截图，包含完整的思维导图
  const outputPath = path.join(__dirname, '..', 'src', 'customThemes', 'imgs', `${themeName}.png`);
  await page.screenshot({ 
    path: outputPath,
    clip: {
      x: 0,
      y: 0,
      width: Math.max(800, Math.ceil(boundingBox.width)),
      height: Math.max(300, Math.ceil(boundingBox.height))
    }
  });
  
  console.log(`✅ 已生成: ${outputPath}`);
  
  await browser.close();
}

async function main() {
  console.log('🎨 开始生成主题预览图...\n');
  
  // 确保输出目录存在
  const imgsDir = path.join(__dirname, '..', 'src', 'customThemes', 'imgs');
  if (!fs.existsSync(imgsDir)) {
    fs.mkdirSync(imgsDir, { recursive: true });
  }
  
  for (const theme of themesToGenerate) {
    try {
      // 动态加载主题配置
      const themePath = path.join(__dirname, '..', 'src', 'customThemes', theme.file);
      
      // 由于主题文件是 ES Module，需要特殊处理
      // 这里简化处理，直接读取文件内容并 eval
      let themeContent = fs.readFileSync(themePath, 'utf-8');
      
      // 移除 export default，提取配置对象
      themeContent = themeContent.replace(/export\s+default\s*/, 'module.exports = ');
      
      // 创建临时文件
      const tempPath = path.join(__dirname, `temp_${theme.name}.js`);
      fs.writeFileSync(tempPath, themeContent);
      
      const themeConfig = require(tempPath);
      
      // 删除临时文件
      fs.unlinkSync(tempPath);
      
      await generatePreview(theme.name, themeConfig);
    } catch (error) {
      console.error(`❌ 生成 ${theme.name} 失败:`, error.message);
    }
  }
  
  console.log('\n🎉 预览图生成完成！');
}

main().catch(console.error);
