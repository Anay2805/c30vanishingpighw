class redBox{
    constructor(x, y, w, h){
  
    var ground_options ={
        restitution : 0.4,
        friction : 1
      }

     this.body = Bodies.rectangle(x, y , w, h, ground_options)
     this.w = w;
     this.h = h;
     this.visibility = 255;
     World.add(world, this.body);
    }

 display(){

    var pos = this.body.position;

 push();
 rectMode(CENTER);
 fill(206, 10, 60, this.visibility);
 rect(pos.x, pos.y, this.w , this.h);
 pop();
 if(this.body.speed > 3){
    push();
   this.visibility = this.visibility-15;
   fill(206, 10, 60, this.visibility);
   pop();
   }
 }



}