let allCircles = d3.selectAll("circle");
console.log(allCircles);

allCircles = allCircles.filter(':nth-child(odd)');

console.log(allCircles);


