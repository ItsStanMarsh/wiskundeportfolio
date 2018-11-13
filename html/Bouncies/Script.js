const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
canvas.width = window.innerWidth ;
canvas.height = window.innerHeight;

let kineticObject =
[{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},
{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},
{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}];

function setUp(){
  for(var i = 0; i < 100; i++){
  kineticObject[i].point = new Point(200,300, 10,"red");
  kineticObject[i].pos = new Vector2D(getRandomNumber(1700) + kineticObject[i].point.r, getRandomNumber(500) + kineticObject[i].point.r);
  kineticObject[i].vel = new Vector2D(8,5);
  kineticObject[i].acc = new Vector2D(0,0.3);
  }

  //kineticObject.point.position(kineticObject.pos);
  //kineticObject.point.draw(context);
  update();
}

function update(){
  //context.clearRect(0,0,canvas.width,canvas.height);
  context.fillStyle = 'rgba(60, 255, 80, 0.2)';
  context.fillRect(0,0,canvas.width,canvas.height);
  requestAnimationFrame(update);

for(var i = 0; i < 100; i++){
  if(kineticObject[i].pos.dx<0 || kineticObject[i].pos.dx > canvas.width){
    kineticObject[i].vel.dx = -kineticObject[i].vel.dx;
    kineticObject[i].pos.add(kineticObject[i].vel);
  }
  if(kineticObject[i].pos.dy<0 || kineticObject[i].pos.dy > canvas.height){
    kineticObject[i].vel.dy = -kineticObject[i].vel.dy;
    kineticObject[i].pos.add(kineticObject[i].vel);
  }

  kineticObject[i].vel.add(kineticObject[i].acc);
  kineticObject[i].pos.add(kineticObject[i].vel);
  kineticObject[i].point.position = kineticObject[i].pos;
  kineticObject[i].point.draw(context);
}
}

setUp();

function getRandomNumber(max){
  return Math.random()*max;
}
