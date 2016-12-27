var obj = [
  {cost: 500},
  {cost: 100},
  {cost: 150},
  {cost: 175},
  {cost: 225},
]

//reduce method pass the 'sum' variable to the next iteration's 'sum'.
//The second argument 0 is starting value of sum.

var newObj = obj.reduce((sum, item) => {
  return sum + item.cost;
}, 0);

console.log(newObj);