const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let cog = new Image();
let cog2 = new Image();
cog.src = "cog_12_1.png";
cog2.src = "cog_12_2.png";
cog.rotation = 0;
cog2.rotation = 0;


// let jaasssooonnnnnsss = new Image();
// jaasssooonnnnnsss.scr ="jaasssooonnnnnsss.PNG";


cog.addEventListener('load', ()=>{
  animate();
})

function animate(){
  context.clearRect(-300,-300,canvas.width, canvas.height);
  requestAnimationFrame(animate);

  context.save();
  context.translate(300,400);
  context.rotate(cog.rotation);
  // context.drawImage(jaasssooonnnnnsss,0,0);
  context.drawImage(cog,-0.5*cog.width,-0.5*cog.height);
  context.restore();
  cog.rotation += 0.01;

  context.save();
  context.translate(500,600);
  context.rotate(cog2.rotation);
  // context.drawImage(jaasssooonnnnnsss,0,0);
  context.drawImage(cog2,-0.5*cog2.width,-0.5*cog2.height);
  context.restore();
  cog2.rotation -= 0.01;


}
