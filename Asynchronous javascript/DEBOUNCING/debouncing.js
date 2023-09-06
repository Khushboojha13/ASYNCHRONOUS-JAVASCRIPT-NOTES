

//without debouncing
let count=0;
const getData=()=>{
     //GetData calls an api and get the data 
     console.log("fetching an api");
     count++;
}
//here the problem with this approach is that it calling an api call for every key press but we want api call to be made and function GetData to be executed only when user gives a pause while typing


const debouncing= function(func,delay){
    let timer; //this timer here will call getData method when 300ms delay get expired but if a user enters key stroke b/w in that time then we have to clear the setTimeout so we store setTimeout into this timer

    //this timer here is making closure for below function
    return function(){
        let context = this; //this is used to check lexical scope of getData that is it the same getData method
        //here this is a window object
        
        let args= arguments; //this agrs is for getData if it has any arguments it will store into it
        clearTimeout(timer); //this is used b/c when 300ms is working and we again press keystroke then we have to stop calling getData method so we have to clear setTimeout
        timer= setTimeout(()=>{
              getData.apply(context,args); //here we are doing apply b/c we want the aguments of function expenive so this apply will borrow the expensive function arguments and this keyword will refer to expensive function and here args is like array which will store our arguments
        },delay)
    }
}

const optimized_func= debouncing(getData,300); //here this debouncing function will call the getData function only when the difference between two key press events is 300 milliseconds
//or >300ms

