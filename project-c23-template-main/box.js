class box {
 constructor(){




 this = Bodies.rectangle(200,300,50,50)
 World.add(world, this.body);

  this.show = function() {
    var pos = this.body.position;
    var angle = this.body.angle
    push();
    translate(pos.x, pos.y)
    rect(0, 0, this.w, this.h)
    pop();










  }
  }

}









