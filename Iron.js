class Iron{
	constructor(x,y,r)
    {

    var iron ={
        'restitution':0.8,
        'friction':3,
        'density':30
    }
		

		this.x=x;
		this.y=y;
		this.r=r
		this.body=Bodies.rectangle(this.x, this.y, (this.r-20)/2, options)
		World.add(world, this.body);

	}
	display()
	{
			var stonepros=this.body.position;		
			push()
			translate(stonepros.x, stonepros.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("green");
			fill("brown");
			

			pop()
	}


}