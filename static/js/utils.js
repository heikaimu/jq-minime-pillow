/*
 * @Description: 工具类
 * @Version: 2.0
 * @Author: Yaowen Liu
 * @Date: 2021-05-07 16:48:42
 * @LastEditors: Yaowen Liu
 * @LastEditTime: 2021-06-09 13:15:50
 */

/**
 * 获取文件本地预览地址
 * @param {*} file - 源文件
 * @returns {String} - 本地预览地址
 */
function getObjectUrl(file) {
  var url = null;
  if (window.createObjectURL !== undefined) {
    url = window.createObjectURL(file);
  } else if (window.URL !== undefined) {
    url = window.URL.createObjectURL(file);
  } else if (window.webkitURL !== undefined) {
    url = window.webkitURL.createObjectURL(file);
  }
  return url;
}

/**
 * base64转blob
 * @param {String} dataurl
 * @returns
 */
function dataURLtoBlob(dataurl) {
  var arr = dataurl.split(','); var mime = arr[0].match(/:(.*?);/)[1];
  var bstr = atob(arr[1]); var n = bstr.length; var u8arr = new Uint8Array(n);
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }
  return new Blob([u8arr], { type: mime });
}

// bolb转base64
function blobToDataURL(blob) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(blob);
    reader.onload = function (e) {
      resolve(e.target.result);
    };
  })
}

// 获取一个随机ID
function getRandomID(length = 8) {
  return Number(Math.random().toString().substr(3, length) + Date.now()).toString(36);
}

// 通过URL下载
function download(url) {
  var a = document.createElement('a');
  a.download = 'AI';
  a.href = url;
  $('body').append(a);
  a.click();
  $(a).remove();
}

// 旋转图片
function rotateImage(file, optionVal, angle) {

  // 如果图片小于300kb, 则使用最大质量
  if (file.size < 307200) {
    optionVal = 1;
  }

  // 角度处理成360度以内
  angle = angle % 360;
  if (angle < 0) {
    angle = angle + 360;
  }

  // 获取当前方位
  let position = undefined;
  if (Math.abs(angle % 360) === 0) {
    position = 'bottom';
  } else if (Math.abs(angle % 270) === 0) {
    position = 'right';
  } else if (Math.abs(angle % 180) === 0) {
    position = 'top';
  } else if (Math.abs(angle % 90) === 0) {
    position = 'left';
  }

  return new Promise((resolve) => {
    // 读取图片
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      let url = reader.result;
      $("#old").attr('src', url);
      const ext = url.split(';')[0].replace('data:image/', '');
      if (ext === 'jpg' || ext === 'jpeg') {
        const img = new Image();
        img.onload = () => {
          const canvas = document.createElement('canvas');
          const ctx = canvas.getContext('2d');

          // 绘制图片，或旋转
          let width = img.width;
          let height = img.height;
          let left = 0;
          let top = 0;

          switch (position) {
            case 'bottom':
              width = img.width;
              height = img.height;
              left = 0;
              top = 0;
              break;

            case 'left':
              width = img.height;
              height = img.width;
              left = width;
              top = 0;
              break;

            case 'top':
              width = img.width;
              height = img.height;
              left = width;
              top = height;
              break;

            case 'right':
              width = img.height;
              height = img.width;
              left = 0;
              top = height;
              break;

            default:
              break;
          }

          canvas.width = width;
          canvas.height = height;
          ctx.translate(left, top);

          ctx.rotate(Math.PI / 180 * angle);
          ctx.drawImage(img, 0, 0, img.width, img.height);

          url = canvas.toDataURL('image/' + ext, optionVal);
          resolve(url);
        }
        img.src = url;
      } else {
        resolve(url);
      }
    }
  })
}

// 图像压缩
function compressImage(base64, targetWidth) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = function () {
      // 如果图片本身比目标尺寸小，则不作处理，返回原图
      if (image.width <= targetWidth) {
        resolve({
          url: base64,
          scale: 1
        });
      }
      // 开始处理
      else {
        const scale = targetWidth / image.width;
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        canvas.width = image.width * scale;
        canvas.height = image.height * scale;
        const targetHeight = canvas.height;
        ctx.drawImage(image, 0, 0, targetWidth, targetHeight);
        resolve({
          url: canvas.toDataURL(),
          scale: targetWidth / image.width
        });
      }
    }
    image.src = base64;
  })
}

// 防抖
function debounce(fn, delay) {
  var timer = null;
  return function () {
    const _this = this;
    const args = arguments;
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }

    timer = setTimeout(() => {
      fn.apply(_this, args);
    }, delay);
  }
}