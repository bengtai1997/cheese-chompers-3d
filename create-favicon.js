const fs = require('fs');
const path = require('path');
const { createCanvas, loadImage } = require('canvas');

async function createFavicon() {
  try {
    // 加载图像
    const image = await loadImage('./public/cheese_chompers_icon.png');
    
    // 创建32x32的canvas
    const canvas = createCanvas(32, 32);
    const ctx = canvas.getContext('2d');
    
    // 绘制图像到canvas，缩放到32x32
    ctx.drawImage(image, 0, 0, 32, 32);
    
    // 将canvas转换为buffer
    const buffer = canvas.toBuffer('image/png');
    
    // 写入到文件
    fs.writeFileSync('./public/favicon.ico', buffer);
    console.log('Favicon created successfully!');
  } catch (error) {
    console.error('Error creating favicon:', error);
  }
}

createFavicon();
