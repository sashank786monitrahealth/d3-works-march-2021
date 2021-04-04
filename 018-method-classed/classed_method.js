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
          
          

lines = d3.selectAll("line")
          .classed("orange",true);
          
console.log(lines);

 d3.selectAll("line")
          .classed("orange",false);
          
//remove class attribute
d3.selectAll("line")
  .attr("class",null);
  
lines.classed('dasharray', function(d,i,n){
     console.log(d);
     console.log(i);
     console.log(n);
     return i%2==0?true:false;
})
