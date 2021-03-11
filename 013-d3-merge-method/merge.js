//selection1.merge(selection2);

let allCSvg1 = d3.selectAll("#svg1 circle");
console.log(allCSvg1);

let allCSvg2 = d3.selectAll("#svg2 circle");
console.log(allCSvg2);

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


let allCSvg = allCSvg1.merge(allCSvg2);
console.log(allCSvg);



