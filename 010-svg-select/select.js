const h1 = d3.select("h1")
console.log(h1);

let firstSVG = d3.select("svg");
console.log(firstSVG);

firstSVG = d3.select("svg#circles");
console.log(firstSVG);

firstSVG = d3.select("#circles");
console.log(firstSVG);
