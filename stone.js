class stone{
	constructor(x,y,r)
	{
        var stone ={
            'restitution':0.8,
            'friction':0.9,
            'density':12
        
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
			stroke("red");
			fill("blue");
			

			pop()
	}


}