let allCircles = d3.selectAll("circle");
console.log(allCircles);

let allCirclesOdd = allCircles.filter(':nth-child(odd)');
console.log(allCirclesOdd);


let allCirclesEven = allCircles.filter(':nth-child(even)');
console.log(allCirclesEven);

console.log("odd class");
allCirclesOdd = allCircles.filter('.odd');
console.log(allCirclesOdd);


console.log("even class");
allCirclesEven = allCircles.filter('.even');
console.log(allCirclesEven);

allCircles.filter(function(d,i,n){
  console.log(d);
  console.log(i);
  console.log(n);
  console.log(n[i]);
  console.log(this);
})
