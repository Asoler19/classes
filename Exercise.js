// function Automobile(wheels){
//     this.wheels = wheels
//     this.setColor = (color) =>{
//         this.color = color
//     }
//     this.getColor = () => {
//         return this.color
//     }
//     this.gasPedal = () =>{
//         return "Vroom"
//     }
// }




// function Sedan(make, model, year){
//     this.make = make
//     this.model = model
//     this.year = year
//     this.doors = 4

// }

// // var car = new Automobile(4)
// // console.log(car.gasPedal())

// Sedan.prototype = new Automobile(4)

// var genesis = new Sedan("Hyundai", "Genesis", year=null )

// // console.log(genesis.wheels)


// // function Camry(make, model, year){
// //     this.make = make
// //     this.model = model
// //     this.year = year
// //     this.door = 4
// // }

// // Camry.prototype = new Sedan("Toyota", "Camry")

// // var camry = new Camry("Toyota", "Camry", 2017)
// // camry.year=2010
// // console.log(camry)

class Automobile{
    constructor(wheels){
        this.wheels= wheels
    }
    setColor(color){
        this.color = color
    }
    getColot(){
        return this.color
    }
    gasPedal(){
        return "Vroom"
    }
}

class Motorcycle extends Automobile{
    constructor(make, model, year){
        super(2)
        this.make = make
        this.model = model
        this.year = year
    }
}

var moped = new Motorcycle("Vespa", "Hornet", 1988)
console.log(moped)

