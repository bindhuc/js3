var x=5;
var y=10;
var z=x*y; // -,+,/,%
console.log(z);

// post inc
var a=5;
// post increment first there will be no change later  there will be increment
console.log(a++);
console.log(a);

// pre inc : there will be change at first consoleonly
var b=8;
console.log(++b);
console.log(b)

// comparision

var c=5;
var d="5" ;
// here o/p is true bcz it == checks only values not datatype
console.log(c==d);

// o/p is false bcz it=== checks datatype also
console.log(c===d);

console.log(c!=d);
console.log(c>d);
console.log(c<d);
console.log(c>=d);
console.log(c<=d);

// logical 

var e=5;
var f=10;
console.log(!(e<f));
console.log((e<f)&&(e!=f));
console.log((e<f)||(e!=f));

// assignment
var g=5;
var h=10;
g=h;
//h values assigned to g
console.log(g);
console.log(h+=1);

// ternary
var i=10;
var j=5;
// var k=i? :

// bitwise
var k=3; //0011
var l=2;//0010
console.log(k&l); //0010
console.log(k|l);//0011
console.log(k^l);
console.log(~l);
// in not if -3=3-1=+2
// if +3=3+1=-4

var a=-3;  //0000 0000 0000   0011  
var b=2;//0000 0000 0000 0010 

console.log(~a)

// In Not operatror -->If  the value is positive its incremented by 1 and the value of  is positive so it will be changed to negative 
// In Not operatror -->If  the value is negative  its decremented  by 1 and the value of  is negative  so it will be changed to positive  

// a=+3 =>3+1==>-4
// a=-3==>3-1==>+2

//left shift
console.log(1<<4)
// here 1 is shifted to fter 4 positions of left
//1->0001
// 0000 0000 0000 0001
// 0000 0000 0001 0000 here 0001 value shifted after 4 digits so we get value 16

// shortcut
console.log(8<<16)
// 8*2^16 // we need to give 2 power second value

// right shift
console.log(1>>4)

// shortcut
// 1/2^4

