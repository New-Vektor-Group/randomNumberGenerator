
var s = window.screen;  //window size
var width = bg.width = s.width;
var height = bg.height = s.height;

var letters = Array(256).join(1).split('');

var draw = function () {
  bg.getContext('2d').fillStyle='rgba(0,0,0,.05)'; //bg color
  bg.getContext('2d').fillRect(0,0,width,height);
  bg.getContext('2d').fillStyle='#0F0'; //font color

  letters.map(function(y, i){
  text = String.fromCharCode(65+Math.random()*33);

  x = i * 10;

  bg.getContext('2d').fillText(text, x, y);

  letters[i] = (y > 758 + Math.random() * 1e4) ? 0 : y + 10;
  });
};

setInterval(draw, 50);