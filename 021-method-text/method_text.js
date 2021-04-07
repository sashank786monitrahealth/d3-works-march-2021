//selection.text(value)

let text1 = d3.select("text").text();
console.log(text1);

text1 = d3.select("text").text('Text 1');
console.log(text1);
console.log(d3.select('text').text());

text1.text(null);

let texts = d3.selectAll('text').text('D3 is awesome');
console.log(texts);

texts.text(function(d,i,n){

   console.log(d);
   console.log(i);
   console.log(n);
   
   return `This is a text on line ${i+1} with index of ${i}`;
});

