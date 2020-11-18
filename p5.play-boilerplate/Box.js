class Box {
  constructor(x, y, width, height, color) {
    var options = {
      'restitution': 0.7,
      'friction': 0.6,
      'isStatic': false
    }
    this.visibility = 255;
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    this.color = color;
    this.speed = this.body.speed;
    World.add(world, this.body);
  }
  display() {
    var pos = this.body.position;
    var angle = this.angle;
    console.log(this.body.speed);

    if (this.speed < 3) {
      push();
      translate(this.body.position.x, this.body.position.y);
      fill(this.color);
      rotate(angle);
      rectMode(CENTER);
      rect(0, 0, this.width, this.height);
      pop();
    }
    else {
      World.remove(world, this.body);
      push();
      this.visibility = this.visibility - 5;
      // tint(255, this.visibility);
      pop();
    }

  }
}
