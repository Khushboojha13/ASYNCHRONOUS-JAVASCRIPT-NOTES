//Callback function provides asynchronous nature to javascript
//these functions are passed as an arguments
function x(){

}
x(function y(){

}); //here this y function is called callback function, now this totally depends on x when it wants to call y but javascript is single threded it doesn't wait for anyone so here asyncronous feature comes in picture

//callbacks see in the notes

console.log("Normal code");

setTimeout(()=>{ //()- this is anonymus function and this is callback function here
    console.log("callback code"); 
},4000); 

console.log("Normal code");


//PROBLEM 1

//callback hell- calbacks inside callbacks inside callbacks and so on- this forms pyramid of doom- here our codes grow horizontally not vertically

const cart=["shoes","fan","clothes"];

api.createOrder(cart, function(){

    api.proceedToPayment(function(){
        api.orderSummary(function(){
            api.paymentWallet(function(){
                 
            })
        })
    })
}); //these all aoi are performing async opersations and all are depeendent on each other

//this is called callback hell (nested callbacks)- it is not maintainable, not properly readable


//PROBLEM 2
//INVERSION OF CONTROL- it means you loose control of your code when yo use callbacks
api.createOrder(cart,function(){
    api.proceedToPayment();
});

//here the problem with above code is theat we have given the control of inside function that is proceedToPayment to completely to createOrder function 

//it can happen that createOrder() can contain bugs , it doesn't call at all all in our code so proceedToPayment will also not called and if createOrder() called two times proceedToPayment will also called two times etc.-- these types of problems can happen with callbacks 

//promises solves these problems

