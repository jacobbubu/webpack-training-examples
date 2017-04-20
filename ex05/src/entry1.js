const content = require("./content");
const smallImage = require('./images/small.png');
const bigImage = require('./images/big.png');

console.log('smallImage', smallImage);
console.log('bigImage', bigImage);

var smallImgEle = new Image();
smallImgEle.src = smallImage;
smallImgEle.alt = 'alt';
document.body.appendChild(smallImgEle);

var bigImageEle = new Image();
bigImageEle.src = bigImage;
bigImageEle.alt = 'alt';
document.body.appendChild(bigImageEle);
