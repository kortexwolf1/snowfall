class Snow{
constructor(x,y,width,height){
var  options={
    restitution:1
}
this.x=x;
this.y=y;
this.width=width;
this.height=height;
this.body=Bodies.rectangle(this.x,this.y,this.width,this.height,this.options)
this.image=loadImage("snow4.webp")
World.add(world,this.body)
}
display(){
var pos=this.body.position
var angle=this.body.angle
push()
translate(pos.x,pos.y)
rotate(angle)
imageMode(CENTER)
image(this.image,this.x,this.y,this.width,this.height)
pop()

}


}