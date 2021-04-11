// selection.append(typel)


let div1 = d3.select("#title");
//div1.append("h1").text("Append");
             
let div1H1 = div1.append("h1");
console.log(div1H1);

div1H1.text("Append");

const rectsData = [
    {
        x:'10',
        y:'10',
        width:'50',
        height:'30'
    },
    {
        x:'10',
        y:'70',
        width:'50',
        height:'30'
    }
];


const svgRects = d3.select("#svg").append("svg");
console.log(svgRects);


svgRects.attr("width","300")
        .attr("height",300);
/*        
for(let i=0; i< rectsData.length; i++){
    svgRects.append("rect");
}   
   d3.selectAll("rect").select(function(d,i,n){
       //d3.select(this);
       console.log(i,d,n);
       d3.select(n[i])
         .attr('x',rectsData[i].x)
         .attr('y',rectsData[i].y)
         .attr('width',rectsData[i].width)
         .attr('height',rectsData[i].height)
         ;
   });
   
*/
for(let i=0; i< rectsData.length; i++){
    svgRects.append(function(d,i,n){
        return document.createElementNS("http://www.w3.org/2000/svg","rect");
    });
};




   d3.selectAll("rect").select(function(d,i,n){
       //d3.select(this);
       console.log(i,d,n);
       d3.select(n[i])
         .attr('x',rectsData[i].x)
         .attr('y',rectsData[i].y)
         .attr('width',rectsData[i].width)
         .attr('height',rectsData[i].height)
         ;
   });



