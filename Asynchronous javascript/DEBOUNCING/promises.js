//promises are used to perform asyn operations in javascript
 
const cart1=["shoes","fan","pan"];

//this createOrder(an api) here will make an order and will give a orderId
createOrder(cart1)  //orderId  

proceedtoPayment(orderId) //this api will take orderId and proceed to payment
//both bove api are asynchronous and dependenet on each other that first will happen and then next will happen

//using callbacks
createOrder(cart1,function(orderId){
    proceedtoPayment(orderId);
});
//here inversion of control can happen
//let's do it with promises
//in promises- createOrder(cart) will no longer take callback function but it will return us a promise


const promise= createOrder(cart1);
//promise is an empty object -{data:value}- this promise will hold whatever value this createOrder(cart) will return



//{data:undefined}- initially the value is undefined b/c here createOrder(cart) is asynchronous in nature and it will take some time to execute but javacscript waits for none so in promise object initially value store will be undefined and when createOrder(cart) will complete it's work actaual value get stored in place of undefined- empty object(promise) will get filled with data automatically

//now after getting orderdetails value by createOrder we will attach a callback function not passing callback function inside creteorder here we are attaching callback function with the promise object returned by createOrder(cart)

promise.then(function(orderId){
    proceedtoPayment(orderId);
}); //this is the code using promises
//here inversion of control problems of callback solves b/c here we are not passing a callback function inside a callback function but we are attaching a callback function with promise object- so here we are having the control of our program with us

//whenever promise object filled with data callback function attached with it will be called and promise will surely filled with data and here are callback fu ction is called one time only whn data gets filled





const Github= "https://anime-facts-rest-api.herokuapp.com/api/v1"; //this is an api on github;

//fetch() function is an api provided by browser rto make external network calls 
//fetch() returns a promise

const user= fetch(Github);
//here we will get a promise object inside user returned by fetch() 

console.log(user); //here we will get the state of promise initially pending when async opn performed it will show fulfilled

user.then(function(data){
     console.log(data); //here this data is the data inside user promise object 
});


//NOTE: promise object are immutable in nature, ann't be change - and it provides security