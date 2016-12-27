var obj = [
  {name: "Dave", online: "true"},
  {name: "Brook", online: "false"},
  {name: "Andy", online: "true"},
  {name: "Law", online: "false"},
]
var nums=[1, 2, 5, -1, 20];

var nmap = nums.map(x => {
  return (x < 5 ? x : 'none');
});

var newObj = obj.filter(f => {
  return f.online === "true"
}).map(x => {
  return (x.name)
});

console.log(newObj)
console.log(nmap)