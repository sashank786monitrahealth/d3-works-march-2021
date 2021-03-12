//selection1.merge(selection2);

let allCSvg1 = d3.selectAll("#svg1 circle");
console.log(allCSvg1);

//let allCSvg2 = d3.selectAll("#svg2 circle");
//console.log(allCSvg2);

let allCSvg1Odd = allCSvg1.select(function(d,i,n){
    console.log(d);
    console.log(i);
    console.log(n[i]);
    
    if (i%2==0){
    
       //console.log(this);
       this.style.fill = 'indianred';
       return this;
    
    } else {
    
       return null;
    
    }
    
    
    
});


console.log(allCSvg1Odd);



let allCSvg1Even = allCSvg1.select(function(d,i,n){
    console.log(d);
    console.log(i);
    console.log(n[i]);
    
    if (i%2==0){
    
             return null;
    
    } else {
    
           //console.log(this);
       this.style.fill = 'lightgreen';
       return this;
    

    
    }
    
    
    
});


console.log(allCSvg1Even);

let allCirclesOddEven = allCSvg1Odd.merge(allCSvg1Even);
console.log(allCirclesOddEven);





/*##############################################
### BEGIN: SVG2
##############################################*/

let allCSvg2 = d3.selectAll("#svg2 circle");
console.log(allCSvg2);



let allCSvg = allCSvg1.merge(allCSvg2);
console.log(allCSvg);

let allCSvg2Odd = allCSvg2.select(function(d,i,n){
    console.log(d);
    console.log(i);
    console.log(n[i]);
    
    if (i%2==0){
    
       //console.log(this);
       this.style.fill = 'dodgerblue';
       return this;
    
    } else {
    
       return null;
    
    }
    
    
    
});


console.log(allCSvg2Odd);



let allCSvg2Even = allCSvg2.select(function(d,i,n){
    console.log(d);
    console.log(i);
    console.log(n[i]);
    
    if (i%2==0){
    
             return null;
    
    } else {
    
           //console.log(this);
       this.style.fill = '#046307'; // emerald green
       return this;
    

    
    }
    
    
    
});


console.log(allCSvg2Even);

//let allCirclesOddEven = allCSvg2Odd.merge(allCSvg2Even);
//console.log(allCirclesOddEven);


//let allCSvg = allCSvg2.merge(allCSvg2);
//console.log(allCSvg);




/*##############################################
### END: SVG2
##############################################*/


let Svg1MSvg2 = allCSvg1Even.merge(allCSvg2Odd);
console.log(Svg1MSvg2);

let Svg2MSvg1 = allCSvg2Even.merge(allCSvg1Odd);
console.log(Svg2MSvg1);
