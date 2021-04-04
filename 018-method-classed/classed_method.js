/*
   checking if class available on element
*/
console.log(d3.select("line")
          .classed("line1"));

line1 = d3.select("line")
          .classed("line1",true);

/*
   checking if class available on element
*/          
console.log(d3.select("line")
          .classed("line1"));
