let firstCircle = d3.select("svg")
                    .selectChild();
                    
console.log(firstCircle);

let secondCircle = d3.select("svg")
                     .selectChild(":nth-child(2)");

console.log(secondCircle);

let firstRect = d3.select("svg:nth-of-type(2)").selectChild();
console.log(firstRect);


let secondRect = d3.select("svg:nth-of-type(2)").selectChild(":nth-of-type(2)");
console.log(secondRect);


let firstChild = d3.selectAll("svg").selectChild();
console.log(firstChild);

let secondChild = d3.selectAll("svg").selectChild(":nth-of-type(2)");
console.log(secondChild);


d3.select("svg").selectChild(function(c,i,cn){
   console.log(c);
   console.log(i);
   console.log(cn);
});


d3.selectAll("svg").selectChild(function(c,i,cn){
   console.log(c);
   console.log(i);
   console.log(cn);
})


