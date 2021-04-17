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
  
d3.select('#submit')
  .property('type','submit')
  .property('value','Submit');
  
const genderInputs = d3.selectAll('div input')
genderInputs.property("type",'checkbox');




const genderValues = ["male","female","nomention"];
genderInputs.property('value',function(d,i){
   return genderValues[i];
});

const nomention = d3.select('#nomention');
nomention.property('checked','true');


document.querySelector('#formsubmit')
.addEventListener('submit', e => {
                     e.preventDefault();
                     console.log(d3.select('#fname').property('value'));
                     console.log(d3.select('#lname').property('value'));
                     console.log(d3.select('#male').property('checked'));
                     console.log(d3.select('#female').property('checked'));
                     console.log(d3.select('#nomention').property('checked'));
                     
});
  
