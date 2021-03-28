const buttons = document.querySelector(".buttons");
console.log(buttons);
                        buttons.addEventListener('click',function(event){
                            const buttonPressed = event.target.value;
                            
                            if (buttonPressed === undefined){}
                            else {selectingElements(buttonPressed)}
                            
                            console.log(buttonPressed);
                            console.log(event);
                        });
                        
                        
                        function rgbCodes(){
                          return [Math.random()*255,Math.random()*255,Math.random()*255];
                        }
                        
                        function selectingElements(buttonPressed){
                            document.querySelector('div#output').firstElementChild.innerText= `Pressed Button: ${buttonPressed}`;
                        
                            const [red,green,blue] = rgbCodes(); // array destructuring;
                            let elements,circles,squares, rectangles;
                            
                            if (buttonPressed === 'select'){
                               circles = d3.select('.circle');
                               squares = d3.select('.square');
                               rectangles = d3.select('.rectangle');
                            } else {
                               circles = d3.selectAll('.circle');
                               squares = d3.selectAll('.square');
                               rectangles = d3.selectAll('.rectangle');
                               
                            }
                            
                            //console.log(circles);
                            //console.log(squares);
                            //console.log(rectangles);
                            
                            elements = [circles,squares,rectangles];
                            console.log(elements);
                            
                            elements.forEach(function(selection){
                                selection.filter(function(d,i,n){
                                    if(buttonPressed === 'filterodd'){
                                        if (i%2 == 0) {
                                           this.style.fill = `rgba(${red},${green},${blue},${(i + 1)*0.25})`
                                        }
                                    } else if(buttonPressed == 'filterEven'){
                                      if (i%2 !=0){
                                          this.style.fill = `rgba(${red},${green},${blue},${(i + 1)*0.25})`
                                      }
                                    }else {
                                          this.style.fill = `rgba(${red},${green},${blue},${(i + 1)*0.25})`;
                                    }
                                });
                                
                            });
                            
                        }
