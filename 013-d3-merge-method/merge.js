//selection1.merge(selection2);

let allCSvg1 = d3.selectAll("#svg1 circle");
console.log(allCSvg1);

let allCSvg2 = d3.selectAll("#svg2 circle");
console.log(allCSvg2);

allCSvg1.select(function(d,i,n){
    console.log(d);
    console.log(i);
    console.log(n[i]);
    console.log(this);
    this.style.fill = 'indianred';
});
