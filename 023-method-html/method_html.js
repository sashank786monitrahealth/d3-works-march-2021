// selection.html(typel)

/*
 html method is supported only on HTML elements. It is not supported on other non-html elements - like SVG elements. Because, they do not have the innerHTML property.
*/

let h1 = d3.select('h1')
           .html();
           
   console.log("h1=")
   console.log(h1);
   
 
 d3.select('h1')
           .html("HTML");
   console.log(h1);
   
