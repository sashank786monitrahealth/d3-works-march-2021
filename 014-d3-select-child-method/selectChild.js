let firstCircle = d3.select("svg")
                    .selectChild();
                    
console.log(firstCircle);

let secondCircle = d3.select("svg")
                     .selectChild(":nth-child(2)");

console.log(secondCircle);

let firstRect = d3.select("svg:nth-of-type(2)").selectChild();
console.log(firstRect);
