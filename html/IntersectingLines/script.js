const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let myPoints = [];
let s = new Point(0, 0, 20, "#" + Math.floor(GetRNGsus(255*255*255)).toString(16));
let counter = 0;

let m = new LinearFunction(1,1);
let l = new LinearFunction(1,1);

function SetUp(){

  for(let i = 0; i < 4; i++){
      let point = new Point(GetRNGsus(canvas.width), GetRNGsus(canvas.height),
                              20, "#" + Math.floor(GetRNGsus(255*255*255)).toString(16));
          myPoints.push(point);
          myPoints[i].drag();
  }

    Update();
}

function Update(){
    context.clearRect(0,0,canvas.width,canvas.height);
    requestAnimationFrame(Update);

    l.letTwoPointDefineLine(myPoints[0],myPoints[1]);
    m.letTwoPointDefineLine(myPoints[2],myPoints[3]);

    s.x = l.intersection(m).x;
    s.y = l.intersection(m).y;

for(let i = 0; i < 4; i++){
    myPoints[i].draw(context);
    myPoints[i].print(context, i);
  }

  l.draw(context, canvas);
  m.draw(context, canvas);
  s.draw(context);
  s.print(context, "S");
}

SetUp();

function GetRNGsus(max){
    return Math.random()*max;
}
