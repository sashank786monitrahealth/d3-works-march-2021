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
