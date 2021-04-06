//selection.style(name,value)

let svg = d3.select("svg");
console.log(svg.style("background-color"));


svg.attr('height','300');
svg.attr('width','600');

let svgColor = svg.style('background-color','lightgray');
console.log(svg.style('background-color'));
console.log(svgColor);

svg.style('background-color',null);

let ellipses = svg.selectChildren('ellipse');
console.log(ellipses);

ellipses.select(function(d,i){
     //d3.select(this);
     console.log("this",this);
     const ellipse = d3.select(this);
     console.log(ellipse);
     ellipse.attr('cx',`${i*100+110}`)
            .attr('cy',`${i*80+80}`)
            .attr('rx',`${i*20+50}`)
            .attr('ry',`${i*20+70}`);
            
     //ellipse.style("fill",`rgb(${Math.random()*255},${Math.random()*255},${Math.random()*255})`);
});

ellipses.style("fill",function(d,i){
   return `rgb(${Math.random()*120},${Math.random()*120},${Math.random()*120})`;
}
);
