
//Base Class
class Shoe {
    constructor(brand, model, size) {
        this.brand = brand;
        this.model = model;
        this.size = size;
        Shoe.count += 1;
    }
    static createdAny() {
        return Shoe.count > 0;
    }
    equals(obj) {
        return obj instanceof Shoe &&
            this.brand === obj.brand &&
            this.model === obj.model &&
            this.size === obj.size;
    }
    toString() {
        return this.brand + ' ' + this.model + ' in size ' + this.size;
    }
}
Shoe.count = 0;

let s1 = new Shoe('Nike', 'Sport', 42);
let s2 = new Shoe(2, 3, 5);
let s3 = new Shoe('Adidas', 'Training', 40);

console.log(typeof Shoe);        //function
console.log(typeof s1);          //object
console.log(s1.toString());      //Nike Sport in size 42
console.log(s2.equals(s3));      //false
console.log(s3.equals(s3));      //true
console.log(Shoe.createdAny());  //true


//Inheritence example
class RunningShoe extends Shoe {
    constructor(brand, model, size, type) {
      super(brand, model, size);
      this.type = type;
      this.mile = 0;
    }
    addMiles(miles) {
        this.miles += miles;
    }
    shouldReplace() {
        return this.miles >= 500;
    }
}

let rs = new RunningShoe('Puma', 'R500', 43, 'lw trainer');

rs.addMiles(200);

console.log(rs instanceof RunningShoe); //true
console.log(rs instanceof Shoe);        //true