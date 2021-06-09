// =============================================================================
// ==================================TEXT MAP===================================
// =============================================================================
const titleFileTab = 'Choose Photos Source';
const titleCropper = 'Choose Photos Source';
const titleCardListTab = '';
const titleDIYTab = '';
const menuFileChose = 'Choose from your album';
const menuTakePhoto = 'Take A Photo';
const menuDirectUse = 'CONFIRM';
const menuCancel = 'Replace';
const savedAvatar = 'Avatar Records（Click To Use）';
const savedClear = 'Clear';
const cropperCancel = 'Cancel';
const cropperSave = 'CONFIRM';
const AIRemindText = 'AI image cropping is mainly for preview.NOT FINAL DESIGN! Our designer will finalize the perfect fit!';
const AIRemindSubText = '';
const skinChose = 'Skin Color:';
const DIYReplace = 'Replace';
const DIYConfirm = 'CONFIRM';
const addToCart = 'Add To Cart';
const addToCartWidthIt = 'Sure & Add To Cart';
const addTocartWidthoutId = 'No Thanks & Add To cart';
const slideContentTitle = 'Printing Customization';
const manyFace = 'Please crop one face to preview or upload another photo.';
const AISuccess = 'Success';
const AIPending = 'AI Cropping your photo';



// =============================================================================
// ==================================TEMPLATE===================================
// =============================================================================

// 头部节点Jquery对象
function commonHeaderEle(title, icon = "close", productPrice, productTitle) {
  const eleStr = `
  <div class="avatar-combine__header">
    <span class="close-btn">
    ${myIcon(icon)}
    </span>
    <p class="title">${title || ''}</p>
    <div class="product-info">
      <p class="product-price">${productPrice ? productPrice : ''}</p>
      <p class="product-title">${productTitle || ''}</p>
    </div>
  </div>
  `
  return eleStr;
}

// 我的图标
function myIcon(name) {
  const mode = {
    cropper: `<svg t="1622195411723" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2419" width="48" height="48"><path d="M199.308838 860.282026l-36.099305-36.099305 72.19861-71.690169 36.099305 36.099305zM305.064548 752.492552l-36.099305-36.099305 71.690169-71.690169 36.099305 36.099305z m107.789474-107.789474L379.296922 610.129096l71.690168-71.690168 36.099305 36.099304z m107.789474-107.789473l-36.099305-36.099305L559.285005 429.124131l36.099305 36.099305z m107.789473-107.789474l-36.099305-36.099305 71.690169-71.690169 36.099305 36.099305z m107.789474-107.789474l-36.099305-36.099304 74.740814-71.690169 36.099305 36.099305z m110.331678-107.789473l-36.099305-36.099305 13.727905-13.727905 36.099305 36.099305z" p-id="2420"></path><path d="M867.90864 156.09136v762.661371a50.844091 50.844091 0 1 1-101.688183 0v-660.973188h-660.973188a50.844091 50.844091 0 0 1 0-101.688183z" p-id="2421"></path><path d="M918.752731 867.90864h-762.661371v-762.661371a50.844091 50.844091 0 0 1 101.688183 0v660.973188h660.973188a50.844091 50.844091 0 0 1 0 101.688183z" p-id="2422"></path></svg>`,
    scanFace: `<svg t="1622180134007" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="10457" width="48" height="48"><path d="M800 448a32 32 0 1 1 0 64h-65.728c-8.448 77.312-47.04 144.32-102.4 184.448 83.456 33.92 156.16 101.12 198.72 183.68l3.072 6.272c34.112-15.616 58.624-48.768 61.952-87.872l0.384-9.216v-138.624a32 32 0 0 1 63.488-5.76l0.512 5.76v138.624a170.688 170.688 0 0 1-159.872 170.368l-10.816 0.32h-138.624a32 32 0 0 1-5.76-63.488l5.76-0.512h115.648c-53.76-93.376-154.368-160-254.336-160-102.72 0-206.272 66.944-259.2 160h120.512a32 32 0 0 1 5.76 63.488l-5.76 0.512H234.688a170.688 170.688 0 0 1-170.368-159.872L64 789.312v-138.624a32 32 0 0 1 63.488-5.76l0.512 5.76v138.624c0 41.6 23.808 77.696 58.624 95.296l-4.48 9.408c40.32-89.472 118.592-162.56 209.152-198.336-54.912-40-93.12-106.752-101.568-183.68H224a32 32 0 0 1 0-64h576z m-130.24 64h-315.52c12.8 91.52 79.488 160 157.76 160 78.272 0 144.96-68.48 157.76-160z m119.552-448a170.688 170.688 0 0 1 170.368 159.872l0.32 10.816v138.624a32 32 0 0 1-63.488 5.76L896 373.312V234.688c0-55.808-42.88-101.632-97.472-106.24L789.312 128h-138.624a32 32 0 0 1-5.76-63.488l5.76-0.512h138.624z m-416 0a32 32 0 0 1 5.76 63.488L373.312 128H234.688c-55.808 0-101.632 42.88-106.24 97.472L128 234.688v138.624a32 32 0 0 1-63.488 5.76L64 373.312V234.688a170.688 170.688 0 0 1 159.872-170.368L234.688 64h138.624zM512 224c94.72 0 174.72 66.56 207.744 160h-69.12C622.72 326.4 570.56 288 512 288c-58.56 0-110.72 38.4-138.56 96h-69.12C337.28 290.56 417.152 224 512 224z" p-id="10458"></path></svg>`,
    arrowLeft: `<svg t="1622513161181" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3670" width="32" height="32"><path d="M778.965749 128.759549l-383.064442 383.063419 388.097062 388.096039-0.070608 0.033769c12.709463 13.137205 20.529569 31.024597 20.529569 50.731428 0 40.376593-32.736589 73.112158-73.115228 73.112158-19.705807 0-37.591153-7.819083-50.730405-20.528546l-0.034792 0.035816L241.890654 564.622498l0.035816-0.035816c-13.779841-13.281491-22.3838-31.915897-22.3838-52.585659 0-0.071631 0-0.106424 0-0.178055 0-0.072655 0-0.10847 0-0.144286 0-20.669762 8.603959-39.341007 22.3838-52.622498l-0.035816-0.034792L680.573835 20.337187l0.180102 0.179079c13.139252-12.5662 30.950919-20.313651 50.587142-20.313651 40.378639 0 73.115228 32.736589 73.115228 73.114205C804.455283 95.485725 794.567076 115.334795 778.965749 128.759549z" p-id="3671"></path></svg>`,
    check: `<svg class="icon" viewBox="2 2 20 20" fill="#ff533a" style="width: 18px; height: 18px"><path d="M12,3.2 C16.8601058,3.2 20.8,7.1398942 20.8,12 C20.8,16.8601058 16.8601058,20.8 12,20.8 C7.1398942,20.8 3.2,16.8601058 3.2,12 C3.2,7.1398942 7.1398942,3.2 12,3.2 Z M17.3656854,8.63431458 C17.053266,8.32189514 16.546734,8.32189514 16.2343146,8.63431458 L16.2343146,8.63431458 L10.8,14.068 L7.76568542,11.0343146 L7.69031955,10.9677637 C7.37648659,10.7237438 6.92270174,10.7459274 6.63431458,11.0343146 C6.32189514,11.346734 6.32189514,11.853266 6.63431458,12.1656854 L6.63431458,12.1656854 L10.2343146,15.7656854 L10.3096804,15.8322363 C10.6235134,16.0762562 11.0772983,16.0540726 11.3656854,15.7656854 L11.3656854,15.7656854 L17.3656854,9.76568542 L17.4322363,9.69031955 C17.6762562,9.37648659 17.6540726,8.92270174 17.3656854,8.63431458 Z"/></svg>`,
    radioCheck: `<svg viewBox="0 0 30 30" fill="#fbe4a4" style="width: 18px; height: 18px;"><path d="M12.9548855,18.8335652 L23.3961035,7.4844152 C23.9569955,6.87474999 24.9059196,6.83521149 25.5155848,7.39610348 C26.12525,7.95699548 26.1647885,8.90591958 25.6038965,9.5155848 L14.1038965,22.0155848 C13.5264165,22.6432805 12.5424505,22.6637709 11.9393398,22.0606602 L4.43933983,14.5606602 C3.85355339,13.9748737 3.85355339,13.0251263 4.43933983,12.4393398 C5.02512627,11.8535534 5.97487373,11.8535534 6.56066017,12.4393398 L12.9548855,18.8335652 Z" /></svg>`,
    close: `<svg t="1618472736532" class="icon" viewBox="0 0 1051 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2007" width="16" height="16"><path d="M656.412 507.821l300.087-292.172a92.077 92.077 0 0 0 0-132.76 98.221 98.221 0 0 0-136.358 0L520.026 375.005 219.994 82.89a98.221 98.221 0 0 0-136.386 0 92.077 92.077 0 0 0 0 132.76l300.088 292.17L83.58 799.993a92.077 92.077 0 0 0 0 132.76c18.072 17.602 42.62 27.538 68.192 27.455 25.573 0 50.093-9.853 68.193-27.455l300.06-292.172 300.087 292.172c18.045 17.602 42.593 27.538 68.165 27.455 25.573 0 50.121-9.853 68.193-27.455a92.077 92.077 0 0 0 0-132.76L656.41 507.821z" p-id="2008" /></svg>`,
    loading: `<svg t="1620456378582" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1742" width="32" height="32"><path d="M538.5344 266.4448a133.12 133.12 0 1 1 133.12-133.12 133.4272 133.4272 0 0 1-133.12 133.12zM255.0144 372.1984a121.6768 121.6768 0 1 1 121.6768-121.6768 121.856 121.856 0 0 1-121.6768 121.6768zM134.72 647.424a107.3664 107.3664 0 1 1 107.3664-107.264A107.52 107.52 0 0 1 134.72 647.424z m120.32 272.4608a90.9824 90.9824 0 1 1 90.9824-90.9824A91.1616 91.1616 0 0 1 255.04 919.8848zM538.5344 1024a79.36 79.36 0 1 1 79.36-79.36 79.36 79.36 0 0 1-79.36 79.36z m287.6928-134.144a64.1792 64.1792 0 1 1 64.1792-64.1792 64.3584 64.3584 0 0 1-64.1792 64.1792z m117.76-296.704a52.6336 52.6336 0 1 1 52.6592-52.6336 52.608 52.608 0 0 1-52.6336 52.6336z m-158.72-338.7136a40.96 40.96 0 1 1 12.0064 28.8512 40.5248 40.5248 0 0 1-12.0064-28.8512z" p-id="1743"/></svg>`,
    reset: `<svg t="1620970416834" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="9286" width="48" height="48"><path d="M936.571429 603.428571q0 2.857143-0.571429 4-36.571429 153.142857-153.142857 248.285715T509.714286 950.857143q-83.428571 0-161.428572-31.428572T209.142857 829.714286l-73.714286 73.714285q-10.857143 10.857143-25.714285 10.857143t-25.714286-10.857143-10.857143-25.714285v-256q0-14.857143 10.857143-25.714286t25.714286-10.857143h256q14.857143 0 25.714285 10.857143t10.857143 25.714286-10.857143 25.714285l-78.285714 78.285715q40.571429 37.714286 92 58.285714t106.857143 20.571429q76.571429 0 142.857143-37.142858t106.285714-102.285714q6.285714-9.714286 30.285714-66.857143 4.571429-13.142857 17.142858-13.142857h109.714285q7.428571 0 12.857143 5.428572t5.428572 12.857142z m14.285714-457.142857v256q0 14.857143-10.857143 25.714286t-25.714286 10.857143h-256q-14.857143 0-25.714285-10.857143t-10.857143-25.714286 10.857143-25.714285l78.857142-78.857143Q626.857143 219.428571 512 219.428571q-76.571429 0-142.857143 37.142858T262.857143 358.857143q-6.285714 9.714286-30.285714 66.857143-4.571429 13.142857-17.142858 13.142857H101.714286q-7.428571 0-12.857143-5.428572T83.428571 420.571429v-4q37.142857-153.142857 154.285715-248.285715T512 73.142857q83.428571 0 162.285714 31.714286T814.285714 194.285714l74.285715-73.714285q10.857143-10.857143 25.714285-10.857143t25.714286 10.857143 10.857143 25.714285z" p-id="9287"/></svg>`,
    rotateLeft: `<svg t="1620969221411" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="9286" width="48" height="48"><path d="M950.857143 512q0 89.142857-34.857143 170.285714t-93.714286 140-140 93.714286-170.285714 34.857143q-98.285714 0-186.857143-41.428572T174.285714 792.571429q-4-5.714286-3.714285-12.857143t4.857142-11.714286l78.285715-78.857143q5.714286-5.142857 14.285714-5.142857 9.142857 1.142857 13.142857 6.857143 41.714286 54.285714 102.285714 84t128.571429 29.714286q59.428571 0 113.428571-23.142858T718.857143 718.857143t62.571428-93.428572T804.571429 512t-23.142858-113.428571T718.857143 305.142857 625.428571 242.571429 512 219.428571q-56 0-107.428571 20.285715T313.142857 297.714286l78.285714 78.857143q17.714286 17.142857 8 39.428571-9.714286 22.857143-33.714285 22.857143H109.714286q-14.857143 0-25.714286-10.857143T73.142857 402.285714V146.285714q0-24 22.857143-33.714285 22.285714-9.714286 39.428571 8l74.285715 73.714285q61.142857-57.714286 139.714285-89.428571T512 73.142857q89.142857 0 170.285714 34.857143t140 93.714286 93.714286 140 34.857143 170.285714z" p-id="9287"/></svg>`,
    rotateRight: `<svg t="1620969262008" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="9433" width="48" height="48"><path d="M950.857143 146.285714v256q0 14.857143-10.857143 25.714286t-25.714286 10.857143h-256q-24 0-33.714285-22.857143-9.714286-22.285714 8-39.428571l78.857142-78.857143Q626.857143 219.428571 512 219.428571q-59.428571 0-113.428571 23.142858T305.142857 305.142857 242.571429 398.571429 219.428571 512t23.142858 113.428571T305.142857 718.857143t93.428572 62.571428T512 804.571429q68 0 128.571429-29.714286t102.285714-84q4-5.714286 13.142857-6.857143 8.571429 0 14.285714 5.142857l78.285715 78.857143q5.142857 4.571429 5.428571 11.714286t-4.285714 12.857143q-62.285714 75.428571-150.857143 116.857142T512 950.857143q-89.142857 0-170.285714-34.857143t-140-93.714286-93.714286-140T73.142857 512t34.857143-170.285714 93.714286-140 140-93.714286 170.285714-34.857143q84 0 162.571429 31.714286T814.285714 194.285714l74.285715-73.714285q16.571429-17.714286 40-8 22.285714 9.714286 22.285714 33.714285z" p-id="9434"/></svg>`,
    zoomDown: `<svg t="1620969312680" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="9727" width="48" height="48"><path d="M619.266114 457.142857v36.571429q0 7.428571-5.428571 12.857143T600.9804 512H271.837543q-7.428571 0-12.857143-5.428571T253.551829 493.714286v-36.571429q0-7.428571 5.428571-12.857143T271.837543 438.857143h329.142857q7.428571 0 12.857143 5.428571t5.428571 12.857143z m73.142857 18.285714q0-105.714286-75.142857-180.857142T436.408971 219.428571 255.551829 294.571429 180.408971 475.428571t75.142858 180.857143T436.408971 731.428571t180.857143-75.142857T692.408971 475.428571z m292.571429 475.428572q0 30.285714-21.428571 51.714286T911.837543 1024q-30.857143 0-51.428572-21.714286l-196-195.428571q-102.285714 70.857143-228 70.857143-81.714286 0-156.285714-31.714286t-128.571428-85.714286-85.714286-128.571428T34.123257 475.428571t31.714286-156.285714 85.714286-128.571428 128.571428-85.714286T436.408971 73.142857t156.285715 31.714286 128.571428 85.714286 85.714286 128.571428T838.694686 475.428571q0 125.714286-70.857143 228l196 196q21.142857 21.142857 21.142857 51.428572z" p-id="9728"/></svg>`,
    zoomUp: `<svg t="1620969300556" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="9580" width="48" height="48"><path d="M619.266114 457.142857v36.571429q0 7.428571-5.428571 12.857143T600.9804 512H472.9804v128q0 7.428571-5.428571 12.857143T454.694686 658.285714h-36.571429q-7.428571 0-12.857143-5.428571T399.837543 640V512H271.837543q-7.428571 0-12.857143-5.428571T253.551829 493.714286v-36.571429q0-7.428571 5.428571-12.857143T271.837543 438.857143h128V310.857143q0-7.428571 5.428571-12.857143T418.123257 292.571429h36.571429q7.428571 0 12.857143 5.428571T472.9804 310.857143v128h128q7.428571 0 12.857143 5.428571t5.428571 12.857143z m73.142857 18.285714q0-105.714286-75.142857-180.857142T436.408971 219.428571 255.551829 294.571429 180.408971 475.428571t75.142858 180.857143T436.408971 731.428571t180.857143-75.142857T692.408971 475.428571z m292.571429 475.428572q0 30.285714-21.428571 51.714286T911.837543 1024q-30.857143 0-51.428572-21.714286l-196-195.428571q-102.285714 70.857143-228 70.857143-81.714286 0-156.285714-31.714286t-128.571428-85.714286-85.714286-128.571428T34.123257 475.428571t31.714286-156.285714 85.714286-128.571428 128.571428-85.714286T436.408971 73.142857t156.285715 31.714286 128.571428 85.714286 85.714286 128.571428T838.694686 475.428571q0 125.714286-70.857143 228l196 196q21.142857 21.142857 21.142857 51.428572z" p-id="9581"/></svg>`,
    crown: `data:image/png;base64,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`
  }

  return mode[name];
}

// 文件选择dom
const templateFileSelect = function () {
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent);
  const eleStr = `
  <div class="file-select-wrapper">
    <div class="top">
    ${commonHeaderEle(`${titleFileTab}`)}
    </div>
    <div class="medium">
    <ul class="card-list">
    <li class="item">
      <label class="card">
        <input type="file" class="file-input" accept="image/*">
        <span class="text">${menuFileChose}</span>
        <svg viewBox="0 0 30 30" style="width: 30px; height: 30px;"><path d="M12.2908253,14.0142199 L17.66,18.2328549 L16,21 L20.5857864,16.4142136 C21.366835,15.633165 22.633165,15.633165 23.4142136,16.4142136 L26,18.9998549 L26,21 C26,22.6568542 24.6568542,24 23,24 L7,24 C5.34314575,24 4,22.6568542 4,21 L4,19 L9.75359944,14.0683433 C10.478128,13.4473189 11.5404728,13.4246572 12.2908253,14.0142199 Z" /><path d="M23,6 C24.6568542,6 26,7.34314575 26,9 L26,17 L23.4142136,14.4142136 C22.6742728,13.6742728 21.4987886,13.6353285 20.7130012,14.2973808 L20.5857864,14.4142136 L18.2894897,16.7105103 L17.66,16.2328549 L12.2908253,12.0142199 C11.5873698,11.4615049 10.6097024,11.4468777 9.89324868,11.9589167 L9.75359944,12.0683433 L4,17 L4,9 C4,7.34314575 5.34314575,6 7,6 L23,6 Z M19.3235343,8.67688204 L19.3693019,8.78734891 C19.4537484,9.00872559 19.5,9.24896148 19.5,9.5 C19.5,10.6045695 18.6045695,11.5 17.5,11.5 C17.206478,11.5 16.9277244,11.4367694 16.676882,11.3235343 C16.990763,12.0173023 17.6890114,12.5 18.5,12.5 C19.6045695,12.5 20.5,11.6045695 20.5,10.5 C20.5,9.68901143 20.0173023,8.99076295 19.3235343,8.67688204 L19.3235343,8.67688204 Z" fill-opacity="0.3" /></svg>
      </label>
    </li>
    ${isMobile
      ? `<li class="item">
        <label class="card">
          <input type="file" class="file-input" accept="image/*" capture="camera">
          <span class="text">${menuTakePhoto}</span>
          <svg viewBox="0 0 30 30" style="width: 30px; height: 30px;"><path d="M26,14.4996803 L26,21 C26,22.1045695 25.1045695,23 24,23 L6,23 C4.8954305,23 4,22.1045695 4,21 L4,14.4996803 L10.1002017,14.4990961 C10.0344945,14.8224862 10,15.1572148 10,15.5 C10,18.2614237 12.2385763,20.5 15,20.5 C17.7614237,20.5 20,18.2614237 20,15.5 C20,15.1572148 19.9655055,14.8224862 19.8997983,14.4990961 L26,14.4996803 Z" /><path d="M17.1715729,6 C17.7020059,6 18.2107137,6.21071368 18.5857864,6.58578644 L20,8 L24,8 C25.1045695,8 26,8.8954305 26,10 L26,13 L19.3309172,12.9997031 C18.4663514,11.5053634 16.8505833,10.5 15,10.5 C13.1494167,10.5 11.5336486,11.5053634 10.6690828,12.9997031 L4,13 L4,10 C4,8.8954305 4.8954305,8 6,8 L10,8 L11.4142136,6.58578644 C11.7892863,6.21071368 12.2979941,6 12.8284271,6 L17.1715729,6 Z M21.5,10 L20.5,10 C20.2238576,10 20,10.2238576 20,10.5 C20,10.7454599 20.1768752,10.9496084 20.4101244,10.9919443 L20.5,11 L21.5,11 C21.7761424,11 22,10.7761424 22,10.5 C22,10.2545401 21.8231248,10.0503916 21.5898756,10.0080557 L21.5,10 Z" fill-opacity="0.3" /><circle cx="15" cy="15.5" r="3.5" /></svg>
        </label>
      </li>`
      : ''
    }
    </ul>
    <div class="fast-file"></div>
    </div>
    <div class="bottom">
      <p class="button plain gray cancel">Cancel</p>
    </div>
  </div>
  `
  return eleStr;
}

// 裁剪dom
const templateCropper = `
<div class="cropper-box">
  <div class="top">
    ${commonHeaderEle(`${titleCropper}`, 'arrowLeft')}
  </div>
  <div class="remind-info">
    <p class="remind-info__text"><span class="note-text">Note:&nbsp;</span>${AIRemindText}</p>
  </div>
  <div class="full-screen-loading gray">
    <span class="loading-close-button">${myIcon('close')}</span>
    <div class="cropper-loading-content">
      <div class="loading-pending"><img src="https://cdn.shopify.com/s/files/1/0510/1423/8379/files/loading.gif?v=1622543525"></div>
      <div class="loading-success"><img src="https://cdn.shopify.com/s/files/1/0510/1423/8379/files/success.gif?v=1622543501"></div>
      <div class="loading-error"><img src="https://cdn.shopify.com/s/files/1/0510/1423/8379/files/fail.gif?v=1622543513"></div>
    </div>
    <div class="loading-text-pending"></div>
  </div>
</div>
`

const templateCropperPreview = `
<div class="preview-content">
<div class="preview-content__box">
  <div class="preview-content__img-box">
    <img class="preview-content__img" src="" />
    <div class="preview-content__menus">
      <p class="menu crop">${myIcon('cropper')}</p>
      <p class="menu rotate" _val="-90">${myIcon('rotateLeft')}</p>
      <p class="menu rotate" _val="90">${myIcon('rotateRight')}</p>
    </div>
  </div>
</div>
</div>
`

// 裁剪操作按钮
const templateCropperMenus = `
<footer class="cropper-footer white">
<div class="actions">
  <div class="button-group">
    <p class="zoom" _val="0.1">${myIcon('zoomUp')}</p>
  </div>
  <div class="button-group">
    <p class="zoom" _val="-0.1">${myIcon('zoomDown')}</p>
  </div>
  <div class="button-group">
    <p class="reset">${myIcon('reset')}</p>
  </div>
</div>
<p class="menu save">${cropperSave}</p>
</footer>
`
/* <p class="menu plain cancel">${cropperCancel}</p> */
/* <div class="button-group">
<p class="rotate" _val="-45">${myIcon('rotateLeft')}</p>
<p class="rotate" _val="45">${myIcon('rotateRight')}</p>
</div> */

// 原图预览按钮
const templateCropperRawPreviewMenus = `
<footer class="cropper-footer">
    <p class="menu fx1 cancel plain">${menuCancel}</p>   
    <p class="menu fx2 save">${menuDirectUse}</p>
  </footer>
`

// 卡片选择容器dom
const templateCardContainer = `
<div class="list-wrapper">
  <div class="top">
    ${commonHeaderEle(titleCardListTab, 'arrowLeft')}
  </div>
  <div class="card-content-wrapper">
    <div class="anchor-list-wrapper"></div>
    <div class="card-list-wrapper"></div>
  </div>
</div>
`

// DIYdom
const templateDIYContainer = function (productPrice, productTitle) {
  return `
  <div class="combine-wrapper">
    <div class="combine-top">${commonHeaderEle('', 'arrowLeft', productPrice, productTitle)}</div>
    <div class="combine-medium">
      <div class="canvas-content"><canvas id="minimeCanvas" /></div>
      <div class="layer-wrapper"></div>
    </div>
    <footer class="combine-footer">
      <ul class="avatar-combine-menus">
        <li class="item fx1">
          <p class="button plain replace gray">${DIYReplace}</p>
        </li>
        <li class="item fx2">
          <p class="button confirm blod">${DIYConfirm}</p>
        </li>
      </ul>
    </footer>
    <div class="diy-loading-wrapper"><div class="loading-icon">${myIcon('loading')}</div></div>
  </div>
  `
}

// DIY预览模版
const templateDIYPreview = `
<div class="drawer-box">
  <div class="drawer-box__blank" />
  <div class="drawer-box__content">
    <div class="slide-select__content">
      <span class="close">${myIcon('close')}</span>
      <div class="combine-preview"><img class="preview-img" src="" alt=""></div>
      <div class="slide-content">
        <h2 class="slide-content__title">${slideContentTitle}</h2>
        <div class="slide-content__buttons">
          <div class="button-item" _val="double">
            <span class="text">Double-sided print</span>
            <span class="money">+$5.99</span>
            ${myIcon('check')}
          </div>
          <div class="button-item" _val="single">
            <span class="text">One side only print</span>
            ${myIcon('check')}
          </div>
        </div>
        <div class="button lg slides-add-cart">${addToCart}</div>
      </div>
    </div>
  </div>
</div>
`

// 关联产品模版
const templateRelatedProduct = `
<div class="drawer-box">
  <div class="drawer-box__blank" />
  <div class="drawer-box__content">
    <div class="related-product__content">
      <span class="close">${myIcon('arrowLeft')}</span>
      <div class="main-content">
        <div class="cover">
          <img src="" alt="">
        </div>
        <div class="basic-info">
          <p class="basic-info__title"></p>
          <p class="basic-info__price"></p>
        </div>
        <div class="button-group">
          <div class="button lg related-add-cart" _val="1">${addToCartWidthIt}</div>
          <p class="divider">or</p>
          <div class="button lg plain related-add-cart" _val="2">${addTocartWidthoutId}</div>
        </div>
      </div>
    </div>
  </div>
</div>
`

// VIP模板
const templateVIP = `
<div class="drawer-box">
  <div class="drawer-box__blank" />
  <div class="drawer-box__content">
    <div class="vip-service__content">
      <span class="close">${myIcon('close')}</span>
      <div class="main-content">
        <div class="button-layout">
          <div class="vip-button">
            <div>
              <div class="checkbox-inner">${myIcon('radioCheck')}</div>
            </div>
            <div class="button-content"></div>
            <div class="icon"><img src="${myIcon('crown')}"></div>
            <i class="light" />
          </div>
        </div>
        <div class="vip-info">
          <p class="vip-desc">The best choice to process orders with priority producing & shipping</p>
        </div>
        <div class="button md vip-add-cart">${addToCart}</div>
      </div>
    </div>
  </div>
</div>
`

// 加载进度条
const templateProgress = `
<div class="full-screen-loading progress">
  <div class="upload-progress-wrapper">
    <div class="progress">
      <span class="line green">
        <span class="percent"></span>
      </span>
    </div>
  </div>
</div>`

// =============================================================================
// ================================IMAGE FETCH==================================
// =============================================================================

function getPicSerectKeys() {
  return new Promise((resolve, reject) => {
    const getURL = 'https://tsback.witemedia.com/api/v1/getSign';
    $.ajax({
      type: 'POST',
      url: getURL,
      success: (res) => {
        if (res.status === '0') {
          resolve(res.data);
        } else {
          reject(res.msg);
        }
      }
    });
  })
}

// 获取扣头后的base64
function getAI(blob) {

  return new Promise((resolve, reject) => {
    getPicSerectKeys().then(res => {

      // 测试用，不调用接口
      // setTimeout(() => {
      //   const AI_BASE64 =
      //     'data:image/png;base64,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';
      //   resolve(AI_BASE64);
      // }, 1000);
      // return;

      // 调用真实AI扣头接口
      const data = new FormData();
      data.append('file', blob);
      let { uid, signExpireTime, sign } = res;
      const postURL = `https://www.cutout.pro/api/v1/matting2?mattingType=3&crop=true&uid=${uid}&signExpireTime=${signExpireTime}&sign=${sign}&faceAnalysis=true`;
      $.ajax({
        type: 'POST',
        url: postURL,
        data: data,
        processData: false,
        contentType: false,
        headers: {
          ContentType: 'multipart/form-data',
        },
        success: (res) => {
          if (res.code === 0) {
            const base64 = `data:image/png;base64,${res.data.imageBase64}`;
            const faceAnalysis = res.data.faceAnalysis;
            const chin = faceAnalysis && faceAnalysis.points ? faceAnalysis.points[0][8] : null;
            const faceNum = faceAnalysis && faceAnalysis.face_num ? faceAnalysis.face_num : null;
            if (faceNum && faceNum > 1) {
              reject(manyFace);
            } else {
              resolve({
                avatar: base64,
                chin
              });
            }
          } else {
            reject(res.msg);
          }
        }
      });

    });
  });
}

// 保存文件到S3服务器
function uploadFileToS3(file, fileName) {
  const temporaryBucket = `faceonboxer/temporary`;

  return new Promise((resolve, reject) => {
    const spacesEndpoint = new AWS.Endpoint('s3-accelerate.amazonaws.com');
    const s3 = new AWS.S3({
      endpoint: spacesEndpoint,
      accessKeyId: 'AKIAW6ATM4SRHZTQDIGM',
      secretAccessKey: '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',
      region: 'us-west-1'
    });
    var params = {
      Bucket: temporaryBucket,
      Key: fileName,
      Body: file,
      ContentType: 'image',
      ACL: 'public-read'
    };
    var request = s3.putObject(params, (err) => {
      if (err) {
        reject(err);
      }
    });
    // request.on('httpUploadProgress', (progress) => {
    //   if (!progressItem.total) {
    //     this.$set(progressItem, 'total', progress.total);
    //   }
    //   this.$set(progressItem, 'loaded', progress.loaded);
    // });
    request.on('success', (response) => {
      const temporary = temporaryBucket.split('/')[1];
      const url = `https://face.globaladput.com/${temporary}/${fileName}`;
      resolve(url);
    });
    request.on('error', () => {
      console.log('Ajax request failed...');
      request.send();
    });
  });
}

// =============================================================================
// =============================MINIME PILLOW CLASS=============================
// =============================================================================

function MinimePillow(option, callbackFn) {
  this.instance = null;
  this.option = option; // 总配置列表
  this.rawFile = null; // 原始文件
  this.AIBase64 = ''; // AI文件
  this.compressAIBase64 = ''; // 缩放后的头图
  this.compressWidth = 80; // 缩放到的宽度
  this.chin = null; // 下巴
  this.previewBase64 = ''; // 预览
  this.skin = option.skin || ''; // 肤色
  this.currentOption = {}; // 当前操作的卡片配置
  this.hasRelatedProduct = false; // 选择了关联产品
  this.hasVIP = false; // 选择了VIP
  this.slide = 1; // 当前选中面数
  this.maxLimit = 5; // 渲染图片的并发数
  this.processTimer = null;

  if (typeof callbackFn === 'function') {
    this.successCallback = callbackFn;
  }

  // 状态列表
  this.fileSelectState = new FileSelectState(this);
  this.cropperState = new CropperState(this);
  this.listState = new ListState(this);
  this.DIYState = new DIYState(this);
}

// 初始化
MinimePillow.prototype.init = function () {
  this.$containerEle = $('<div class="minime-wrapper"></div>');
  this.$containerEle.append('<div class="blank" />');
  this.$contentEle = $('<div class="content"/>');
  this.$containerEle.append(this.$contentEle);
  $("body").append(this.$containerEle);
  $("body").css('overflow', 'hidden');

  this.currentState = this.fileSelectState;
  this.currentState.render();
}

// 修改状态
MinimePillow.prototype.setState = function (newState) {
  this.currentState = newState;
  this.currentState.render();
}

// 加入购物车
MinimePillow.prototype.addToCart = function () {
  const _this = this;

  const blobAI = dataURLtoBlob(this.AIBase64);
  const blobPreview = dataURLtoBlob(this.previewBase64);
  const BlobList = [
    {
      name: 'raw',
      file: this.rawFile
    },
    {
      name: 'AI',
      file: blobAI
    },
    {
      name: 'preview',
      file: blobPreview
    }
  ];

  // 请求发送
  const $progressBar = $(templateProgress);
  this.$containerEle.find('.content').append($progressBar);

  // 开启定时器
  const count = BlobList.length;
  let successCount = 0;
  let num = 10;
  let pauseNum = 40;
  this.processTimer = setInterval(() => {
    num += 0.2;
    if (num >= pauseNum) {
      num = pauseNum;
    }
    $progressBar.find('.line').css('width', parseInt(num) + '%');
    $progressBar.find('.percent').text(parseInt(num) + '%');
  }, 60);

  // 当前日期
  const time = (function () {
    const time = new Date();
    const year = time.getFullYear();
    let month = time.getMonth() + 1;
    let day = time.getDate();
    month = month < 10 ? `0${month}` : month;
    day = day < 10 ? `0${day}` : day;
    return `${year}${month}${day}`;
  })();

  BlobList.forEach(item => {
    const name = `${time}_${item.name}_${this.option.name}_${item.name}_${getRandomID()}`;
    uploadFileToS3(item.file, name).then(res => {
      item.url = res;

      successCount += 1;

      if (successCount === 1) {
        pauseNum = 70;
        num = 40;
      } else if (successCount === 2) {
        pauseNum = 100;
        num = 70;
      } else if (successCount === 3) {
        $progressBar.find('.line').css('width', parseInt(100) + '%');
        $progressBar.find('.percent').text(parseInt(100) + '%');

        clearInterval(this.processTimer);
        this.processTimer = null;

        const data = {
          rawFile: BlobList.find(item => item.name === 'raw').url,
          AI: BlobList.find(item => item.name === 'AI').url,
          preview: BlobList.find(item => item.name === 'preview').url,
          skin: _this.skin,
          slide: _this.slide,
          type: _this.option.type,
          hasRelatedProduct: _this.hasRelatedProduct,
          hasVIP: _this.hasVIP
        }

        if (_this.successCallback) {
          _this.successCallback(data)
        }

        setTimeout(() => {
          // 关闭
          _this.closeDialog();
        }, 500);
      }
    });
  });
}

// 保存当前的头像信息到storage，以便于下次直接选取使用
MinimePillow.prototype.saveAvatarList = function () {
  localforage.getItem('avatarList').then(res => {
    let avatarList = [];
    if (res) {
      avatarList = res;
    }

    blobToDataURL(this.rawFile).then(base64 => {
      const item = {
        rawBase64: base64,
        AIBase64: this.AIBase64,
        chin: this.chin
      }
      avatarList.unshift(item);
      localforage.setItem('avatarList', avatarList);
    })

  })
}

MinimePillow.prototype.closeDialog = function () {
  this.$containerEle.remove();
  $("body").css('overflow', 'auto');
}

// 单列模式
MinimePillow.getInstance = function (option, callbackFn) {
  if (!this.instance) {
    this.instance = new MinimePillow(option, callbackFn);
  }
  return this.instance
}

// STATE-文件选择状态-STATE
function FileSelectState(minime) {
  this.minime = minime;
}

FileSelectState.prototype.render = function () {
  const _this = this;

  const JQEle = $(templateFileSelect());
  this.minime.$contentEle.html(JQEle);

  JQEle.find('.close-btn').click(function () {
    _this.minime.closeDialog();
  })

  JQEle.find('.cancel').click(function () {
    _this.minime.closeDialog();
  })

  // 文件选择
  JQEle.find('input[type=file]').on('change', function (e) {
    const $file = $(e.currentTarget);
    const file = $file[0].files[0];
    _this.minime.rawFile = file;
    _this.minime.rawCompressFile = file;
    _this.minime.setState(_this.minime.cropperState);
    // blobToDataURL(file).then(url => {
    //   compressImage(url, 800).then(data => {
    //     _this.minime.rawCompressFile = dataURLtoBlob(data.url);
    //     _this.minime.setState(_this.minime.cropperState);
    //   })
    // })
  })

  // 添加快捷文件选择
  localforage.getItem('avatarList').then(fastFile => {
    if (!fastFile) {
      return;
    }

    const fastFileList = fastFile.map(item => {
      return `<li class="fast-file__item"><div class="fast-file__card"><span class="close">${myIcon('close')}</span><img src="${item.AIBase64}"/><div></li>`
    })
    const $fastFile = $(`<div class="fast-file-wrapper"><p class="fast-file__title">${savedAvatar}<span class="clear">${savedClear}</span></p><ul class="fast-file__list">${fastFileList.join('')}</ul></div>`);
    JQEle.find('.fast-file').append($fastFile);

    // 点击快捷头像
    $fastFile.find('.fast-file__item').each(function (e) {
      const $card = $(this);
      const index = $(this).index();
      // 卡片点击
      $(this).click(function (event) {
        event.stopPropagation();
        const { rawBase64, AIBase64, chin } = fastFile[index];
        _this.minime.rawFile = dataURLtoBlob(rawBase64);
        _this.minime.chin = chin;
        _this.minime.AIBase64 = AIBase64;
        compressImage(_this.minime.AIBase64, _this.minime.compressWidth).then(data => {
          const { url, scale } = data;
          _this.minime.compressAIBase64 = url;
          _this.minime.compressChin = [_this.minime.chin[0] * scale, _this.minime.chin[1] * scale];
          // 渲染卡片图片
          _this.minime.setState(_this.minime.listState);
        })
      })

      // 卡片删除点击
      $(this).find('.close').click(function (event) {
        event.stopPropagation();

        fastFile.splice(index, 1);
        localforage.setItem('avatarList', fastFile);
        $card.remove();
      })
    })

    // 清空全部快捷头像
    $fastFile.find('.clear').click(function () {
      localforage.removeItem('avatarList');
      $fastFile.remove();
    })
  })
}

// STATE-裁剪状态-STATE
function CropperState(minime) {
  this.minime = minime;
  this.angle = 0;
  this.currentPicture = '';
  this.step = 'one';
}

CropperState.prototype.render = function () {
  const _this = this;

  const JQEle = $(templateCropper);
  this.$loading = JQEle.find('.full-screen-loading');
  this.$loading.hide();
  this.$loading.find('.loading-close-button').off().on('click', function () {
    _this.$loading.hide();
  })
  this.minime.$contentEle.html(JQEle);

  JQEle.find('.close-btn').click(function () {
    if (_this.step === 'one') {
      _this.minime.setState(_this.minime.fileSelectState);
    } else if (_this.step === 'two') {
      JQEle.find('.cropper-content').remove();
      JQEle.find('.cropper-footer').remove();
      _this.createPreview(JQEle);
    }
  })

  // 预览图片
  // 首先将源文件转成base64并且赋值
  rotateImage(_this.minime.rawCompressFile, 0.7, 0).then(src => {
    _this.currentPicture = src;
    this.createPreview(JQEle);
  })

}

// 渲染预览
CropperState.prototype.createPreview = function (JQEle) {
  const _this = this;
  this.step = 'one';
  // 添加预览图片
  const $previewContent = $(templateCropperPreview);
  const $image = $previewContent.find('.preview-content__img');
  $image.attr('src', this.currentPicture);
  const $previewMenus = $(templateCropperRawPreviewMenus);
  JQEle.append($previewMenus);
  JQEle.append($previewContent);

  // 裁剪
  $previewContent.find('.crop').click(function () {
    $previewContent.remove();
    $previewMenus.remove();

    _this.createCropper(JQEle);
  })

  // 翻转
  $previewContent.find('.rotate').on('click', function (e) {
    const menu = $(e.currentTarget);
    const val = menu.attr('_val');
    _this.angle += Number(val);
    rotateImage(_this.minime.rawCompressFile, 0.7, _this.angle).then(src => {
      _this.currentPicture = src;
      $image.attr('src', src);
    })
  })

  // 取消
  $previewMenus.find('.cancel').click(function () {
    _this.minime.setState(_this.minime.fileSelectState);
  })

  // 使用
  $previewMenus.find(".save").click(function () {
    _this.getAIFromBlob(dataURLtoBlob(_this.currentPicture));
  })
}

// 渲染裁剪
CropperState.prototype.createCropper = function (JQEle) {
  const _this = this;
  this.step = 'two';
  const $cropperContent = $('<div class="cropper-content"></div>');
  $cropperContent.append(`<img id="cropperImage" src="${this.currentPicture}"/>`);
  const $cropperMenus = $(templateCropperMenus);
  JQEle.append($cropperContent);
  JQEle.append($cropperMenus);

  // 实例化裁剪插件
  const image = document.getElementById('cropperImage');
  let cropper = new Cropper(image, {
    // aspectRatio: 1,
    viewMode: 2,
    dragMode: 'move' // 图片可移动
  });

  // 裁剪操作
  $cropperMenus.find(".zoom").click(function (e) {
    const val = $(this).attr('_val');
    cropper.zoom(val);
  })
  $cropperMenus.find(".rotate").click(function (e) {
    const val = $(this).attr('_val');
    cropper.rotate(val);
  })
  $cropperMenus.find(".reset").click(function (e) {
    cropper.reset();
  })

  // 返回预览
  $cropperMenus.find(".cancel").click(function () {
    $cropperContent.remove();
    $cropperMenus.remove();
    cropper = null;
    _this.createPreview(JQEle, image);
  })

  // 保存
  $cropperMenus.find(".save").click(function (e) {
    cropper.getCroppedCanvas().toBlob((blob) => {
      _this.getAIFromBlob(blob);
    }/*, 'image/png' */);
  })
}

// 获取照片的AI头像，扫描状态切换
CropperState.prototype.getAIFromBlob = function (blob) {
  const _this = this;
  _this.$loading.fadeIn().find('.loading-pending').fadeIn();
  _this.$loading.find('.loading-close-button').hide();
  _this.$loading.find('.loading-text-pending').text(AIPending).removeClass('success error');
  getAI(blob).then(avatarData => {
    _this.$loading.find('.loading-pending').fadeOut().siblings('.loading-success').fadeIn();
    _this.$loading.find('.loading-text-pending').text(AISuccess).addClass('success');
    setTimeout(() => {
      _this.$loading.fadeOut();
      _this.minime.AIBase64 = avatarData.avatar;
      _this.minime.chin = avatarData.chin;
      _this.minime.saveAvatarList();
      compressImage(_this.minime.AIBase64, _this.minime.compressWidth).then(data => {
        const { url, scale } = data;
        _this.minime.compressAIBase64 = url;
        _this.minime.compressChin = [_this.minime.chin[0] * scale, _this.minime.chin[1] * scale];
        // 渲染卡片图片
        _this.minime.setState(_this.minime.listState);
      })
    }, 1000);
  }).catch(msg => {
    _this.$loading.find('.loading-pending').fadeOut().siblings('.loading-error').fadeIn();
    _this.$loading.find('.loading-close-button').show();
    _this.$loading.find('.loading-text-pending').text(msg).addClass('error');
  })
}

// STATE-列表选择状态-STATE
function ListState(minime) {
  this.minime = minime;
  this.renderMachines = [];
}

ListState.prototype.clear = function () {
  this.renderMachines = [];
  this.requestInstance.clear();
  this.queue = [];
}

ListState.prototype.render = function () {
  const _this = this;

  this.list = JSON.parse(JSON.stringify(this.minime.option.miniMeData));
  for (let i = 0; i < this.list.length; i++) {
    const group = this.list[i];
    for (let c = 0; c < group.images.length; c++) {
      const id = getRandomID();
      group.images[c].eleID = id;
    }
  }

  this.requestInstance = new RequestDecorator({
    maxLimit: this.minime.maxLimit,
    requestApi: this.getCardAI.bind(this)
  });
  this.createRenderMachines();

  const JQEle = $(templateCardContainer);
  this.minime.$contentEle.html(JQEle);

  // 关闭
  JQEle.find('.close-btn').click(function () {
    _this.clear();
    _this.minime.setState(_this.minime.fileSelectState);
  })

  // 皮肤选择
  const $skinSelector = $(this.skinSelector());
  JQEle.append($skinSelector);

  const colorItems = $skinSelector.find('.color-item');
  if (!_this.minime.skin) {
    _this.minime.skin = colorItems.eq(0).addClass('active').attr('_val');
  } else {
    colorItems.each(function () {
      if ($(this).attr('_val') === _this.minime.skin) {
        $(this).addClass('active');
      }
    })
  }

  colorItems.off().on('click', function (e) {
    const item = $(e.currentTarget);
    item.addClass('active').siblings('.color-item').removeClass('active');
    const skin = item.attr('_val');
    _this.minime.skin = skin;

    renderCardList();
  })

  // 锚点
  const $achorList = $(this.achorList());
  JQEle.find('.anchor-list-wrapper').html($achorList);
  this.activeGroupName = $achorList.find('.item').eq(0).addClass('active').attr('_val');

  $achorList.find('.item').on('click', function (e) {
    const item = $(e.currentTarget);
    item.addClass('active').siblings('.item').removeClass('active');
    _this.activeGroupName = item.attr('_val');
    renderCardList();
    JQEle.find('.card-list-wrapper').scrollTop(0);
  })

  // 卡片
  function renderCardList() {
    const currentGroup = _this.list.find(item => item.name === _this.activeGroupName);
    // 渲染卡片
    const $cardList = $(_this.cardList(currentGroup.images));
    JQEle.find('.card-list-wrapper').html($cardList);

    _this.renderAICardPreview(currentGroup.images);
  }

  renderCardList();

  // 给卡片绑定事件委托
  JQEle.on('click', '.preview-card', function () {
    const card = $(this);
    _this.minime.currentOption = _this.getOptionByID(card.attr('id'));
    _this.minime.setState(_this.minime.DIYState);
  })

}

// 皮肤选择
ListState.prototype.skinSelector = function () {
  const colors = this.minime.option.colors;
  let eleStr = '';
  eleStr += '<div class="color-selector-wrapper">';
  eleStr += `<p class="color-title">${skinChose}</p>`;
  eleStr += '<nav class="color-selector">';
  for (let i = 0; i < colors.length; i++) {
    const item = colors[i];
    eleStr += `<p class="color-item" _val="${item.name}" style="background-color:${item.color}">${myIcon('check')}</p>`;
  }
  eleStr += '</nav>';
  eleStr += '</div>';
  return eleStr;
}

// 锚点列表
ListState.prototype.achorList = function () {
  const liList = this.list.map(item => {
    return `<li class="item" _val="${item.name}"><p class="text">${item.name} <span class="num">${item.images.length}</span></p></li>`
  })
  return `<ul class="anchor-list">${liList.join('')}</ul>`;
}

/*
  卡片列表
*/
ListState.prototype.cardList = function (list) {
  let listStr = '';
  listStr += `<ul class="card-list">`;
  for (let i = 0; i < list.length; i++) {
    const option = list[i];
    listStr += `<li class="card-item">`;
    listStr += `<div class="preview-card" id="${option.eleID}" _productId="${option.id}">`;
    listStr += '<p class="card-edit-button">Tap & Edit</p>';
    listStr += '<div class="card-content">'
    listStr += `<img src="" alt="">`;
    listStr += `</div>`;
    listStr += `</div>`;
    listStr += `</li>`;
  }
  listStr += `</ul>`;

  return listStr;
}

// 渲染卡片预览列表图片
ListState.prototype.renderAICardPreview = function (list) {
  // 首先全部加上loading
  $(".preview-card").append(`<div class="full-screen-loading card-loading"><div class="loading-icon">${myIcon('loading')}</div></div>`);
  $(".preview-card").find('.card-edit-button').hide();

  this.requestInstance.clear();

  this.queue = list.map(option => {
    return this.requestInstance.request(option);
  })

  Promise.all(this.queue);
}

// 通过使用空闲的渲染器渲染出预览卡片图
ListState.prototype.getCardAI = function (option) {
  const _this = this;

  const $card = $("#" + option.eleID);
  const $content = $card.find('.card-content');
  const $editButton = $card.find('.card-edit-button');

  // 如果卡片有缓存
  const base64 = option[_this.minime.skin];
  if (base64) {
    $card.find('img').attr('src', base64);
    $card.find('.card-loading').remove();
    $editButton.show();
    return Promise.resolve();
  }

  // 重新渲染
  const renderMachine = this.renderMachines.find(item => item.ready);
  if (!renderMachine) {
    return Promise.resolve();
  }
  return new Promise((resolve, reject) => {
    if (option.type === 'hood') {
      renderMachine.ready = false;
      renderMachine.render.setOption({
        avatar: _this.minime.AIBase64,
        chin: _this.minime.chin,
        option: option,
        skin: _this.minime.skin,
        success: () => {
          setTimeout(() => {
            const base64 = renderMachine.render.toDataURL();
            option[_this.minime.skin] = base64;
            $card.find('img').attr('src', base64);
            renderMachine.ready = true;
            $card.find('.card-loading').remove();
            $editButton.show();
            resolve();
          }, 300);
        }
      });
    } else {
      const url = option.images.find(item => item.color === _this.minime.skin).url;

      const bodyImage = new Image();
      bodyImage.onload = function () {
        $card.find('img').attr('src', bodyImage.src);
        // 头部
        const avatarImage = new Image();
        avatarImage.onload = function () {
          // 关闭加载
          $card.find('.card-loading').remove();
          $editButton.show();

          const cardWidth = $content.width();
          const faceSize = option.face;
          const allScale = cardWidth / option.width;
          const oWidth = avatarImage.width;
          const oHeight = avatarImage.height;
          const currentWidth = faceSize.width * allScale;
          const avatarScale = currentWidth / oWidth;
          const currentHeight = oHeight * avatarScale;

          const $avatar = $(`<img class="avatar" src="${avatarImage.src}"/>`);
          $content.append($avatar);

          const top = faceSize.top * allScale;
          const left = faceSize.left * allScale;
          if (_this.minime.chin) {
            const chinLeft = _this.minime.compressChin[0] * avatarScale;
            const chinTop = _this.minime.compressChin[1] * avatarScale;
            const centerX = currentWidth / 2;
            const bottomY = currentHeight;
            offsetX = centerX - chinLeft;
            offsetY = bottomY - chinTop;
          }

          $avatar.css({ width: currentWidth, height: currentHeight, top: top - currentHeight + offsetY, left: left - currentWidth / 2 + offsetX });
        }
        // this.AIBlob
        avatarImage.src = _this.minime.compressAIBase64;


        // 帽子
        const annex = option.annex;
        if (annex && annex.length > 0) {
          const hat = annex[0];
          const annexImage = new Image();
          annexImage.onload = function () {
            const cardWidth = $card.width();
            const allScale = cardWidth / option.width;
            const oWidth = annexImage.width;
            const oHeight = annexImage.height;
            const currentWidth = hat.width * allScale;
            const avatarScale = currentWidth / oWidth;
            const currentHeight = oHeight * avatarScale;

            const $avatar = $(`<img class="annex" src="${annexImage.src}"/>`);
            $content.append($avatar);

            const top = hat.top * allScale;
            const left = hat.left * allScale;

            $avatar.css({ width: currentWidth, height: currentHeight, top, left });
          }
          annexImage.src = hat.images.find(item => item.color === _this.minime.skin).url;
        }


      }
      bodyImage.src = url;

      resolve();
    }

  });
}

// 构造渲染器列表
ListState.prototype.createRenderMachines = function () {
  this.renderMachines = [];
  for (let i = 0; i < this.minime.maxLimit; i++) {
    const id = `canvas_${getRandomID()}`;
    const render = new Minime(id, {
      width: 500,
      height: 660
    });
    this.renderMachines.push({
      ready: true,
      render
    });
  }
}

// 通过ID获取配置
ListState.prototype.getOptionByID = function (id) {
  for (let i = 0; i < this.list.length; i++) {
    const group = this.list[i];
    for (let c = 0; c < group.images.length; c++) {
      const card = group.images[c];
      if (card.eleID === id) {
        return card;
      }
    }
  }
  return;
}


// STATE-定制状态-STATE
function DIYState(minime) {
  this.minime = minime;
}

// 渲染DIY
DIYState.prototype.render = function () {
  const _this = this;

  const JQEle = $(templateDIYContainer(this.minime.option.productPrice, this.minime.option.productTitle));
  this.minime.$contentEle.append(JQEle);
  JQEle.find('.diy-loading-wrapper').hide();

  // 关闭
  JQEle.find('.close-btn').click(function () {
    JQEle.remove();
  })

  // 替换图片，返回文件选择
  JQEle.find('.replace').click(function () {
    _this.minime.setState(_this.minime.fileSelectState);
  })

  // 实例化
  this.canvas = new Minime('minimeCanvas', {
    width: JQEle.width() * 0.9,
    height: JQEle.width() * 0.9 * 660 / 500
  });

  // 设置参数
  JQEle.find('.diy-loading-wrapper').show();
  this.setOption().then((canvas) => {
    JQEle.find('.diy-loading-wrapper').hide();
    const imageMode = {
      avatar: _this.minime.AIBase64
    };
    const annex = _this.minime.currentOption.annex;
    if (annex && annex.length > 0) {
      for (let i = 0; i < annex.length; i++) {
        imageMode[`annex${i}`] = annex[i].images[0].url;
      }
    }

    // 添加图层选择
    let $layer = null;
    const items = canvas.getObjects();
    // 可以用的层
    const availableItems = items.filter(item => {
      const name = item.name || '';
      return name.indexOf('annex') > -1 || name === 'avatar';
    })

    if (availableItems.length > 1) {
      // 添加dom
      const layerList = availableItems.map(item => {
        return `<li _val="${item.name}"><img src="${imageMode[item.name]}"/></li>`;
      });
      $layer = $(`<ul>${layerList.join('')}</ul>`);
      JQEle.find('.layer-wrapper').append($layer);
    }

    // 激活样式设置
    const setActiveLayer = (name) => {
      if (availableItems.length > 1) {
        $layer.find(`li[_val=${name}]`).addClass('active').siblings('li').removeClass('active');
      }
      const avatarLayer = availableItems.find(item => item.name === name);
      canvas.setActiveObject(avatarLayer);
      canvas.renderAll();
    }

    setTimeout(() => {
      // 初始化激活图层
      setActiveLayer('avatar');
    }, 100);

    if (availableItems.length > 1) {
      // 点击层级按钮
      $layer.find('li').off().on('click', function (e) {
        const name = $(e.currentTarget).attr('_val');
        setActiveLayer(name);
      })

      // 切换激活图层
      canvas.on('mouse:down', function () {
        const activeLayer = canvas.getActiveObject();
        if (activeLayer && activeLayer.name) {
          setActiveLayer(activeLayer.name);
        }
      })
    }

  });

  // 预览和选择面
  JQEle.find('.confirm').click(function () {
    const $DIYPreview = $(templateDIYPreview);
    JQEle.append($DIYPreview);

    // 生成预览的base64,获取当前位置参数，新键一个身体背景大小的minime类，用该类来渲染生成预览图
    // const previewBase64 = _this.canvas.toDataURL();
    // JQEle.find('.preview-img').attr('src', previewBase64);
    // _this.minime.previewBase64 = previewBase64;
    const previewMinime = new Minime('previewMinimeCanvas', {
      width: 500,
      height: 660
    });
    const previewOption = _this.canvas.getOption();
    console.log(previewOption.face)
    previewMinime.setOption({
      avatar: _this.minime.AIBase64,
      // chin: _this.minime.chin,
      option: previewOption,
      skin: _this.minime.skin,
      success: function (canvas) {
        setTimeout(() => {
          const previewBase64 = canvas.toDataURL();
          JQEle.find('.preview-img').attr('src', previewBase64);
          _this.minime.previewBase64 = previewBase64;
        }, 300);
      }
    })

    // 关闭预览面选择弹窗
    $DIYPreview.find('.close').click(function () {
      $DIYPreview.remove();
    })

    // 面选择器
    const slideButtons = $DIYPreview.find(".button-item");
    slideButtons.eq(0).addClass('selected');
    _this.minime.slide = slideButtons.eq(0).attr('_val');

    slideButtons.each(function () {
      $(this).click(function () {
        $(this).addClass('selected').siblings('.button-item').removeClass('selected');
        _this.minime.slide = $(this).attr('_val');
      })
    })

    // 面选择：加入购物车，根据是否有关联产品和VIP来做不同的逻辑处理
    $DIYPreview.find('.slides-add-cart').click(function () {
      const increment = _this.minime.option.increment;
      // 有关联产品
      const relatedProduct = increment.relatedProduct;
      if (relatedProduct && relatedProduct.length === 1) {
        _this.renderRelatedProduct(JQEle, $DIYPreview, increment);
        return;
      }

      // 有VIP
      const vip = increment.vip;
      if (vip && vip.virtualId) {
        _this.renderVIP(JQEle, $DIYPreview, increment);
        return;
      }

      // 都没有直接加入购物车
      _this.minime.addToCart();
    })
  })

}


// 设置DIY参数
DIYState.prototype.setOption = function () {
  const _this = this;

  return new Promise((resolve, reject) => {
    this.canvas.setOption({
      avatar: this.minime.AIBase64,
      chin: this.minime.chin,
      option: this.minime.currentOption,
      skin: this.minime.skin,
      success: function (canvas) {
        resolve(canvas);
      },
      replacePhoto: function () {
        _this.minime.setState(_this.minime.fileSelectState);
      }
    });
  })
}

// 渲染相关产品
DIYState.prototype.renderRelatedProduct = function (container, prevFloatBox, increment) {
  const _this = this;

  const data = increment.relatedProduct[0];

  // 添加dom
  const $relatedProduct = $(templateRelatedProduct);
  prevFloatBox.remove();
  container.append($relatedProduct);

  // 关闭
  $relatedProduct.find('.close').click(function () {
    $relatedProduct.remove();
  })

  // 赋值
  const { thumbnail, price, title } = data;
  $relatedProduct.find('img').attr('src', thumbnail);
  $relatedProduct.find('.basic-info__title').text(title);
  $relatedProduct.find('.basic-info__price').text(`+ $${price}`);

  // 绑定添加购物车
  $relatedProduct.find('.related-add-cart').on('click', function (e) {
    // 设置是否添加关联产品
    const button = $(e.currentTarget);
    const val = button.attr('_val');
    if (val === '1') {
      _this.minime.hasRelatedProduct = true;
    } else {
      _this.minime.hasRelatedProduct = false;
    }

    // 有VIP
    const vip = increment.vip;
    if (vip && vip.virtualId) {
      _this.renderVIP(container, $relatedProduct, increment);
      return;
    }

    // 都没有直接加入购物车
    _this.minime.addToCart();
  })
}

// 渲染相关产品
DIYState.prototype.renderVIP = function (container, prevFloatBox, increment) {
  const _this = this;

  const data = increment.vip;

  // 添加dom
  const $templateVIP = $(templateVIP);
  prevFloatBox.remove();
  container.append($templateVIP);

  // 关闭
  $templateVIP.find('.close').click(function () {
    $templateVIP.remove();
  })

  // 赋值
  $templateVIP.find('.button-content').text(`VIP SERVICE + $${data.price}`);

  // 勾选VIP
  $templateVIP.find('.vip-button').click(function () {
    $(this).toggleClass('active');
  })

  // 加如购物车
  $templateVIP.find('.vip-add-cart').click(function () {
    const isActive = $templateVIP.find('.vip-button').hasClass('active');
    _this.minime.hasVIP = isActive;
    $templateVIP.remove();

    _this.minime.addToCart();
  })
}
