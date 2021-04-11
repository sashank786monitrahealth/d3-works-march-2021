//selection.insert(type,before)

let svg1 = d3.select("#svg1");

let text1 = svg1.insert("text")
                .text("inserted with text method")
                .attr("x","5")
                .attr("y","20");
                
console.log(text1);
