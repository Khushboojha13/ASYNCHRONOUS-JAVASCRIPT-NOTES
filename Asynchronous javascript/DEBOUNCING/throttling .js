const expensive=()=>{
    console.log("Expensive");
}

window.onresize= window.addEventListener("resize",betterperform);

const betterperform= throttling(expensive,delay1);

/*const throttling= function(func1,delay1){
    let flag=true;  //this flag is accessible to below function b/c this is a closure
    return function(){
         func1();
         flag=false;
         setTimeout(()=>{
             flag=true;
         },delay1)
    }
} */
//this above approach is good and will work but it is not handling the case when we will pass arguments to expensive function so in this case will use optimized code using apply method 

const throttling= function(func1,delay1){
    let flag=true;  //here we are declaring this flag here b/c we don't want to redeclare it again and again whenever expensive function is called , this flag here forms a closure 
    return function(){
        let context=this;  
        let args=arguments;
         func1.apply(context,args);
         flag=false;
         setTimeout(()=>{
             flag=true;
         },delay1)
    }
}