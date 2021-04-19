//selection.sort(compare)
/*This returns a selection that returns each group in the selection - sorted according to the compare function. After sorting, it will insert elements as per the resulting order. Now the compare function which defaults to ascending is passed to elements data

Sort only repositions the elements in the dom. The elements need to be repositioned on the screen on their new order in the dom and the attr method will be called after sort. 
*/


d3.selectAll('p')
  .datum(function(){
     return this.innerText
  });
  
console.log(d3.selectAll("p"));


d3.selectAll('p')
  .datum(function(){
     return this.innerText
  })
  .sort((a,b) => b-a)  // descending
  .sort((a,b) => a-b); // ascending
