const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

for (var i =0; i < 100; i++){
  let point = new Point(getRDN(canvas.width), getRDN(canvas.height), 10, "red");
  point.draw(context);
}

function getRDN(max){
  return Math.random()*max;
}
