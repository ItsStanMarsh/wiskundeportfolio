const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let background = new Image();
background.src = "background.jpg";

let car = new Image();
car.src = "car.fw.png";

let frontwheel = new Image();
frontwheel.rot = 0;
frontwheel.src = "wheel.png";
frontwheel.pos = 213;
frontwheel.vel = 10;

let backwheel = new Image();
backwheel.rot = 0;
backwheel.src = "wheel.png";
backwheel.pos = 7;
backwheel.vel = 10;

background.addEventListener('load', ()=>{
  animate();
})

addEventListener('keycode', (evt) =>{
  switch (evt.key){
    case "arrowRight":
    frontwheel.vel += 1;
    break;

    case "ArrowLeft":
    frontwheel.vel -= 1;
    break;

    case "arrowRight":
    backwheel.vel += 1;
    break;

    case "ArrowLeft":
    backwheel.vel -= 1;
    break;
  }
})

function animate(){
  context.clearRect(-300,-300,canvas.width, canvas.height);
  requestAnimationFrame(animate);

  context.drawImage(background,0,0,canvas.width, canvas.height);
  context.drawImage(car,500,400);

  context.save();
  context.translate(frontwheel.pos, 600);
  context.rotate(frontwheel.rot);
  context.drawImage(frontwheel, -frontwheel.width/2, -frontwheel.height/2);

  context.translate(backwheel.pos, 600);
  context.rotate(backwheel.rot);
  context.drawImage(backwheel, -backwheel.width/2, -backwheel.height/2);

  context.restore();

  frontwheel.rot += frontwheel.vel/80;
  frontwheel.pos += frontwheel.vel;

  backwheel.rot += frontwheel.vel/80;
  backwheel.pos += frontwheel.vel;

  backwheel.rot += frontwheel.vel/80;
  backwheel.pos += frontwheel.vel;

  if(frontwheel.pos > canvas.width){
    frontwheel.pos = 0;
  }

  if(frontwheel.pos <0){
    frontwheel.pos = canvas.width;
  }

  if(backwheel.pos > canvas.width){
    backwheel.pos = 0;
  }

  if(backwheel.pos <0){
    backwheel.pos = canvas.width;
  }

}
