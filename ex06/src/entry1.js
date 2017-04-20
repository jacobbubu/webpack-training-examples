import './main.css';
import localCSS from './localCSS.css';

console.log('localCSS', localCSS);
// console.log('localCSS', localCSS.toString());
// console.log('localCSS object', localCSS.locals);

var h1 = document.createElement('h1');
h1.innerHTML = 'Hello world!';
h1.className = localCSS.myh1;
document.getElementById('container').appendChild(h1);
