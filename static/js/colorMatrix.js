/*
 * @Description: 图片亮度，饱和度，
 * @Version: 2.0
 * @Author: Yaowen Liu
 * @Date: 2021-06-04 10:09:17
 * @LastEditors: Yaowen Liu
 * @LastEditTime: 2021-06-04 14:16:30
 */
function ColorMatrix({ el, pictureBase64 }) {
  this.container = document.querySelector(el);
  this.originalResource = pictureBase64;
  this.canvas = null;
  this.ctx = null;
  this.alpha = 1;
  this.beta = 0;

  this.init();
}

ColorMatrix.prototype.init = function () {
  let image = new Image();
  image.src = this.originalResource;
  image.crossOrigin = 'Anonymous'; // 支持跨域图片
  image.onload = () => {
    this.canvas = document.createElement('canvas');
    this.ctx = this.canvas.getContext('2d');
    this.container.appendChild(this.canvas);

    this.canvas.width = image.width;
    this.canvas.height = image.height;

    this.ctx.drawImage(image, 0, 0, image.width, image.height);
    // 获取图片初始化像素信息
    this.originalImageData = this.ctx.getImageData(0, 0, image.width, image.height);
  }
}

// 亮度增加
ColorMatrix.prototype.lightUpdate = function (val) {
  this.beta = val;
  this.update();
}

// 更新RGBA
ColorMatrix.prototype.update = function () {
  let imageData = this.originalImageData;
  // 获取米格像素点信息
  for (let p = 0; p < imageData.data.length; p += 4) {
    let R = imageData.data[p];
    let G = imageData.data[p + 1];
    let B = imageData.data[p + 2];
    let A = imageData.data[p + 3];

    imageData.data[p] = R * this.alpha + this.beta;
    imageData.data[p + 1] = G * this.alpha + this.beta;
    imageData.data[p + 2] = B * this.alpha + this.beta;
    imageData.data[p + 3] = A * this.alpha + this.beta;
  }

  this.ctx.putImageData(imageData, 0, 0);
}