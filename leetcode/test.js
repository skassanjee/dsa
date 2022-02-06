class car {
	constructor(make, model){
		this.make = make;
		this.model = model;
	}

	story(){
		console.log(`The car in this object is a ${this.model} made by ${this.make}`)
	}
}

const chevyCobalt = new car('chevy', 'cobalt')

console.log(chevyCobalt)
console.log(chevyCobalt.story())