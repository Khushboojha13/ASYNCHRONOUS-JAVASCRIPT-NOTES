//Cookies in javascript are samll strings of data stored directly in the browser
// alert(document.cookie) helps us to access cookies 
//alert(document.cookie) contains key-nvalue pairs
//cookies are set by a web server using Set-cookie HTTP header
//cookie data store karne ka ek tarika hai

console.log(document.cookie);
document.cookie="khusho-123456";
document.cookie="tilo-123908"; //here this will not overwrite khusho cookie instead dono cookies show honge document.cookie console me karne se hame existing cookies in rowser milta hai and ham isme apni banai cookies add bhi kar sakte hai

document.cookie="khusho-khao" //yaha first wali cookie update ho jayega khuso wali uski jagah aab ye add ho jayega


console.log(document.cookie);

//we can see cookie of twitter,facebook unke console me jake document.cookie karke
