class bob
{
	constructor(x,y,r)
	{
		var options={
			isStatic:false,
			restitution:0.3,
			friction:0,
			density:1.2

			
			}
		this.x=x;
		this.y=y;
		this.r=r
		
		this.body=Bodies.circle(this.x, this.y, (this.r-20)/2, options)
		World.add(world, this.body);

	}
    bobObject1=createSprite(400,400,40,40);
    bobObject2=createSprite(450,400,40,40);
    bobObject3=createSprite(350,400,40,40);
    bobObject4=createSprite(300,400,40,40);
    bobObject5=createSprite(250,400,40,40); 
	display()
	{
			
			var  bobObjects=this.body.position;		

			push()
			translate(bobObjects.x, bobObjects.y);
			
			//strokeWeight(4);
			fill(255,0,255)
			
			//ellipse(0,0,this.r, this.r);
			pop()
			
	}

}