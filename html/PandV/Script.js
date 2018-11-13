const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
canvas.width = window.innerWidth ;
canvas.height = window.innerHeight;

let kineticObject = [{}, {}, {}];

function setUp(){
  kineticObject[0].point = new Point(200,300,"red");
  kineticObject[0].pos = new Vector2D(800,300);
  kineticObject[0].vel = new Vector2D(8,5);
  kineticObject[0].acc = new Vector2D(0,0.3);

  kineticObject[1].point = new Point(200,300,"red");
  kineticObject[1].pos = new Vector2D(800,300);
  kineticObject[1].vel = new Vector2D(8,5);
  kineticObject[1].acc = new Vector2D(0,0.5);

  kineticObject[2].point = new Point(200,300,"red");
  kineticObject[2].pos = new Vector2D(800,300);
  kineticObject[2].vel = new Vector2D(8,5);
  kineticObject[2].acc = new Vector2D(0,0.7);

  //kineticObject.point.position(kineticObject.pos);
  //kineticObject.point.draw(context);
  update();
}

function update(){
  context.clearRect(0,0,canvas.width,canvas.height);
  requestAnimationFrame(update);

for(var i = 0; i < 3; i++){
  if(kineticObject[i].pos.dx<0 || kineticObject[i].pos.dx > canvas.width){
    kineticObject[i].vel.dx = -kineticObject[i].vel.dx;
  }
  if(kineticObject[i].pos.dy<0 || kineticObject[i].pos.dy > canvas.height){
    kineticObject[i].vel.dy = -kineticObject[i].vel.dy;
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
