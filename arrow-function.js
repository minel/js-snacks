
//multiply is old method for object define object functions
//times is new way for declarations
//this.number is undefined in the product!
//Arrow functions do not define ("bind") their own this.
let obj = {
    number: 2,
    multiply: function(n) {
        return this.number * n;
    },
    times(n) {
        return this.number * n;
    },
    product: n => this.number * n,
    get: () => {
    console.log(this.number);
    return this.number; // represents global object 'Window', therefore 'this.a' returns 'undefined'
    }
};

console.log(obj.multiply(2)); //4
console.log(obj.times(3));    //6
console.log(obj.product(4));  //NaN
console.log(obj.get());