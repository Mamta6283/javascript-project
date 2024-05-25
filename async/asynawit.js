console.log("hello")

//async-await async funtion (){}it will always return
//await pauses the excution of its surrounding async function untill the promise is setted//you can only with async


//  async function hello(){
//     console.log("how its going on ")
// }
// hello()



function api(){
         return new Promise((resolve,reject)=>{
         console.log("weather checking")
         setTimeout(()=>{
            console.log("api call")
            resolve()//this is async 
        },2000)

         }) 
        }

(async function (){
    await api();
    await api();//async call it can only use in async function and agr jab bhi chate ho ki ye chez wait kran hai to 
   })() //this is iife
   getweather()


   //iife is a function that is called immediately as sonn as it is defined