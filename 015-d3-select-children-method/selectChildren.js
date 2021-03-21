let firstSVG = d3.select("svg")
                 .selectChildren();

console.log(firstSVG);

// select the children from the second svg

let secondSVG = d3.select("svg:nth-of-type(2)")
                  .selectChildren();
console.log(secondSVG);

let allSvg = d3.selectAll("svg").selectChildren();
console.log(allSvg);

d3.select("svg").selectChildren(function(c,i,cn){
   console.log("c = ",c);
   console.log("i = ",i);
   console.log("cn = ",cn);
});



d3.select("svg:nth-of-type(2)").selectChildren(function(c,i,cn){
   console.log("c = ",c);
   console.log("i = ",i);
   console.log("cn = ",cn);
});

