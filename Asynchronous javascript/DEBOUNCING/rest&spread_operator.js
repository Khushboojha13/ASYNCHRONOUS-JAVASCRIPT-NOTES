//Rest operator

function add(a,b,c,...others){  //yaha ye .others a,b,c ke alawa baki ki values ko ek array me dal dega
    console.log(others);  //yaha hame ek array milega- [5,6,7,8,9]- this is es6 feature
    console.log(arguments); //this is es5 concepts - yaha sare elements ka ek array form hoga including a,b,c 
  return(a+b+c);
}
let res= add(2,3,4,5,6,7,8,9);  //rest operartor me values combined hoke ek array treturn karta hai 
console.log(res);

//spread operator
let names=["ashu","tulsi","holo","kolo"];
console.log(...names);  
//spread operatort ek case me iterables like an array and string expand ho jate hai'

//diff- rest operator me values combined ho jati hai spread operator me values spread ho jati hai
//the main diff- rest operator puts the rest of the values into an array whereas spread operator expands iterables into individual elements

//rest in objects

let obj1={
  name1:"khsuhs",
  age:21,
  color:"brown",
  books:"laxmikant"
}

//normal way
console.log(obj1.name1);

//array destructuring
const {name3,age,books}= obj1;   
console.log(name3);  //ham ase likh pa rahe hai not obj1.name1 b/c hamne yaha par object ko destructre kar diya hai and ham elements ko access kar sakte hai
console.log(age);
 

//using rest 
const {name1,...rest}=obj1;  //yaha baki combine hoke array form kar lengi
console.log(rest);



//using spread- overwriting value using spread

const newage={
  ...obj1,
  age:"26 ias"
}
console.log(newage); //here we will get copy of obj1 with diff age 

