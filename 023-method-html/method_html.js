// selection.html(typel)

/*
 html method is supported only on HTML elements. It is not supported on other non-html elements - like SVG elements. Because, they do not have the innerHTML property.
*/

let h1 = d3.select('h1')
           .html();
           
   console.log("h1=")
   console.log(h1);
   
 
 h1 = d3.select('h1')
           .html("HTML");
   console.log(h1);
   
div = d3.select("div")
        .html("<h3>This is from D3</h3>")

//removes html        
div.html(null);

d3.select("div")
  .html(function(){
         let content = "";
         
         for(let i=0; i<5;i++){
            content += `<p>Para with Index: ${i}</p>`;
            
         };
         
         return content;
  })
