//selection.style(name,value)

let svg = d3.select("svg");
console.log(svg.style("background-color"));


svg.attr('height','300');
svg.attr('width','600');

svg.style('background-color','lightgray');
