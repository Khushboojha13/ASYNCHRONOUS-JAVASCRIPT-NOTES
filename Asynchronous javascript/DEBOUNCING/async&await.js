//async function stops the execution of a function and aync function always returns promies, actually async is a better version of promises 

async function ashu(){ //here if we remove async then it will not work we will not be able to see the alert message because normal function don't return promises but async function returns promises
    return 4
  }
  
  ashu().then((x)=>{
    alert(x)
  })





  //ham callback , promises me execution ko rok nahi pate but async me vo possible hai using await

async function khusho(){
    let delhiWeather= new Promise((resolve,reject)=>{
      setTimeout(()=>{
        resolve("27 degree")
      },2000)
    })
  
    let BangaloreWeather= new Promise((resolve,reject)=>{
      setTimeout(()=>{
        resolve("21 degree")
      },5000)
    })
     // delhiWeather.then(alert)
     // BangaloreWeather.then(alert) 
    
    //these two are normal way promise wla way .then use karke we have better to do this using await 
    console.log("Fetching delhi weather please wait..")
    let delhiW= await delhiWeather 
    console.log("Fetched delhi weather:"+delhiW)
    //yaha await function se phele 
  //  delhiWeather wali promise purii chalegi vo puri fulfill hogi and jo bhi result resolve aur reject hoga vo return hoga
    console.log("Fetching bangalore weather please wait..")
    let bangaloreW= await BangaloreWeather //same as above 
    console.log("Fetched bangalore weather:"+bangaloreW)
    
    return[delhiW,bangaloreW]
  }
  
  
  
  const ashu=async()=>{
    console.log("Hey I am ashu")
  }
  
  console.log("Welcome to weather control room")
    let a= khusho()
  
    let c= ashu()  //yaha ye pura khusho() chalne ke bad nahi chalegi ye khuso() ke sath parallely execute hoga differnet async functions parallely execute hote hai
  
  a.then((value)=>{
  console.log(value) //it will return a promise
  })
  
  
  
  
  
  /*const tulsi=async()=>{
        console.log("Hey I am tulsi")
  }
  
  const main1=async()=>{
    console.log("Welcome to weather control room")
    let a1= await khusho()
    a1.then((value)=>{
      console.log(value)
  
      let d= await tulsi()  //yaha par aab ye pura khusho() chalne ke bad hi chalega b/c aab ye awaitv use kar raha hai and khusho() bhi
    })
  }
  
  main1()
  
    */