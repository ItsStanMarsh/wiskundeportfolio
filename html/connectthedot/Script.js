const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let points = [];

function setUp(){
  Update();
}

function Update(){
  context.clearRect(0, 0, canvas.width, canvas.height);
  requestAnimationFrame(Update);
  let point = new Point(getRDN(canvas.width), getRDN(canvas.height), "#" + Math.floor(getRDN(255*255*255)).toString(16));
  points.push(point);

  context.beginPath();
  context.moveTo(points[0].x, points[0].y);
  for(var i = 0; i < points.length; i++){
    context.lineTo(points[i].x, points[i].y);
  }
  context.closePath();
  context.stroke();

  for(var i = 0; i < points.length; i++){
    points[i].draw(context);
    points[i].print(context, i);
  }
}

setUp();

function getRDN(max){
  return Math.random()*max;
}
