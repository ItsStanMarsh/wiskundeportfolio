class Vector2D {
  constructor(dx,dy) {
    this.dx = dx;
    this.dy = dy;
  }

  add(vector){
    this.dx += vector.dx;
    this.dy += vector.dy;
  }
}
