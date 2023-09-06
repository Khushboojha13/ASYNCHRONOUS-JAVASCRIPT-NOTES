const cart2=["shoes","fan","clothes"];

createorder(cart,function(orderid){
    proceedTopay(orderid,function(payementinfo){
      showordersummary(payementinfo,function(){
        updatewalletmoney();
      })
    })
})
//this is callback hell

//using promises
const promises= createorder(cart2); 

promises.then(function(orderid){  //ham yaha without variable banae direct createorder() par hi promises laga sakte the
   return proceedTopay(orderid);
})
.then(function(paymentinfo){
   return showordersummary(paymentinfo);
})
.then(function(paymentinfo){
   return updatewalletmoney(paymentinfo);
})
//this is using promises

//there is one issue with this code that here information will not flow horizontally so we have to use return keyword 



//using arrow functions

createorder(cart2)
.then((orderid)=>proceedTopay(orderid))
.then((paymentinfo)=>showordersummary(paymentinfo))
.then((paymentinfo)=>updatewalletmoney(paymentinfo));