//selection.insert(type,before)

let svg1 = d3.select("#svg1");

let text1 = svg1.insert("text")
                .text("inserted with text method")
                .attr("x","5")
                .attr("y","40");
                
console.log(text1);




let text2 = svg1.insert("text")
                .text("inserted with text method - using before selector")
                .attr("x","5")
                .attr("y","20");
                
console.log(text2);




let text3 = svg1.insert("text")
                .text("inserted with text method - as the last child")
                .attr("x","5")
                .attr("y","60");
                
console.log(text3);

// now we are going to find - how to pass in functions instead of selectors

let svg2 = d3.select("#svg2");

for (i=0;i<2;i++){
   svg2.insert(function(){
      return document.createElementNS("http://www.w3.org/2000/svg","text")
      // call other function to specify the before selector
   }, function(){
        console.log(this.firstElementChild);
      return this.firstElementChild;
   })
     .text(`${i}`)
     .attr('x','5')
     .attr('y',`${i*20+20}`)
};


