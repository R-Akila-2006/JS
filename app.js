console.log(1+1); // varible declaration
let a = 10;
let b= 1;

console.log(a+b); 
a= 11; // assign
a=12 // Reassign

// const name = "potter";
// console.log(name);

// var Name = "harry";
// let msg = "I am potter";
// // Name = "potter"

// console.log(Name +  "   "+ msg)
// // Let accept the reassign value but const can not accept the reassign value so const is best //

// var  Name = "potter";
// console.log(Name);
// // var allow the reassign and redeclare so it is not use //

const   Name = "HARRY POTTER"
let msg ="I am potter";
console.log(Name[2]+" "+msg)

console.log(10 ==="10"); 
// ==(double equcal) can not check the inside the content so the  output True
// == check the inside the content so the output False

if(!false){
    console.log(true);
}else{
    console.log(false);
}
//0 is always  false and  other number is truthy value//

let person; 
if(null){
    
    console.log(true);
}else{
    console.log(false)
}
console.log(person);



console.log("10" +"10Ak")
console.log("10" -"10Ak")
// Nan Not a number//

if(NaN){
    console.log(true)
}
else{
    console.log(false)
}
if(""){
    console.log(true)
}else{
    console.log(false)
}
// empty list is falsey value 
if("0"){
    console.log(true)
}else{
    console.log(false)
}


// non primitive data type 
//Array 
const array = ["Harry","potter",105]
console.log(array[2])
//length of the array
console.log(array.length)
//push method
console.log(array.push(5))
console.log(array)
//pop() method
console.log(array.pop())
// slice() function
let array1 = ["potter","harry",10,20,30,40]
let array2 = array1.slice(-3,-2)
console.log(array2)
// splice() function
let array3 = array1.splice(1,3)
console.log(array3)
console.log(array1)