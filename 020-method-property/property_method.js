//selection.style(name,value)

const labelsFor = ['fname','lname','gender','male','female','nomention'];
const labels = d3.selectAll('label');

console.log(labels);

labels.filter(function(d,i){
    const d3label = d3.select(this);
    d3label.attr('for',labelsFor[i]);
    
});

d3.select('#fname')
  .property('type','text')
  .property('placeholder','Praneeth');
  
console.log(d3.select('#fname').property('placeholder'));

d3.select('#lname')
  .property('type','text')
  .property('placeholder','Gone');
  
console.log(d3.select('#fname').property('type'));
  
