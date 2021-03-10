const h1SA = d3.selectAll("h1");
console.log(h1SA);

const h1S = d3.select("h1");
console.log(h1S);


let allCircles = d3.selectAll("circle");
console.log(allCircles);

let allRects = d3.selectAll("rect");
console.log(allRects);


let allSvg = d3.selectAll("svg");
console.log(allSvg);

allSvg = d3.selectAll(".svgarea");
console.log(allSvg);

allCircles = allSvg.selectAll("circle");
console.log(allCircles);


allSvg.selectAll(function(d,i,n){

  console.log(d);
  console.log(i);
  console.log(n);
  console.log(n[i]);
  console.log(this);

});
