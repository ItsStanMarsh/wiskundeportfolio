class Point {
  constructor(x, y, r, color) {

    this.x = x;
    this.y = y;
    this.r = r;
    this.color = color;
  }

  draw(context){
  context.beginPath();
  context.fillstyle = this.color;
  context.strokeStyle = "black";
  context.arc(this.x, this.y, this.r, 0, 2*Math.PI);
  context.stroke();
  context.fill();
  context.closePath();
  }

  print(context,text){
    context.fillStyle = "black";
    context.font ="30px Arial";
    context.fillText(text, this.x + 25, this.y + 10);
  }

  addX(addon){
    this.x += addon;
  }
  addY(addon){
    this.y += addon;
  }

  set position(vector){
    this.x = vector.dx;
    this.y = vector.dy;

  }
  get position(){
    let ans = new Vector2D(this.x, this.y);
    return ans;
  }

  distanceToOtherPoint(x,y){
    let tempX =this.x - x;
    let tempY =this.y - y;
    let distance = Math.sqrt((tempX * tempX) + (tempY * tempY));
    return(distance);
  }

  drag(){
    let mousePosition = [];
    let dragStatus = false;
    document.addEventListener('mousedown',(evt)=>{
      mousePosition.X = evt.clientX;
      mousePosition.Y = evt.clientY;

      if(this.distanceToOtherPoint(mousePosition.X,mousePosition.Y) <= this.r){
        dragStatus = true;
      } else {
        dragStatus = false;
      }

  });

  document.addEventListener('mouseup',(evt)=>{
    dragStatus = false;
});

  document.addEventListener('mousemove', (evt) => {
    if(dragStatus){
    this.x = event.clientX;
    this.y = event.clientY;}
  });
}
}
