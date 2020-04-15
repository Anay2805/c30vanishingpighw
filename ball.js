class Ball{
 constructor(x, y, r){


    var ball_options = {
        restitution: 0.9,
        fricition : 1.0,
        density : 1
    }

    this.body = Bodies.circle(x, y, r, ball_options);
    this.body.position.x = x;
    this.body.position.y = y;
    this.r = r;
    World.add(world, this.body);

 }
display(){

ellipseMode(RADIUS);
fill(255);
ellipse(this.body.position.x, this.body.position.y, this.r, this.r)

}
}