const cart3=["shoes","man","fan"];

const promise= createorders(cart3); //here this createorders() api will return a promise which we are making below
console.log(promise);

promise.then(function(orderid){
    console.log(orderid);
})
.catch(function(err){  //this catch is used to handle the error
    console.log(err.message);
})
//here we are making our promise 
function createorders(cart3){
    const pr= new Promise(function(resolve,reject){  //resolve and reject are two functions provided by javascript to handle promises - here Promise is a constructor 
        //createorders 
        //validatecart
        //orderid
        if(!validatecart(cart3)){
            const err= new Error("Cart is not valid"); //here promise is getting rejected
            reject(err);  //here Error is a constructor 
        }
         //logic for createorders here promise get resolved
         const orderid=6575768;
         if(orderid){
            setTimeout(()=>{
               resolve(orderid); //here promise get resolved after 5 seconds
            },5000)
         }
    })
}




//case 1- when our promise get resolved

/*function validatecart(){
    return true;
} */


//case2 - when promise get rejected

function validatecart(){
    return false;

}
//in case of promise get rejected we get the err message - we should always handle this err meassage b/c it is not good for code production to show red color err in browser - in user's sytem webpage will show up if we don't handle the errror properly

