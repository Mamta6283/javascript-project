//task queue mein lg jata hai lekin usi time execute nhi hoti promise milti hai....


const p1=new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("hello promise")
        resolve("resolved task")
    },2000)
    
})
p1.then((res)=>{ //using arrow function 
    console.log(res)
})

// //promise two
const p2=new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("hello promise")
        resolve("resolved task")
    },2000)
    
})
p2.then((res)=>{ //using arrow function 
    console.log(res)
})


//promise three
const p3=new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("hello promise")
        resolve({username:"chai",email:"mamta@example.com"})//yahan se value return hota hai into jo bhi param meter send krtee hai then ko
    },2000)
    
})
p3.then((user)=>{ //using arrow function 
    console.log(user)
})


const p4=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=false
    if(!error){
        resolve({username:"chai",email:"mamta@example.com",pass:"123"})
        }

    else{
      reject("error is something ")
    }
},2000)
})
p4.then((user)=>{
  console.log(user)
  return user.username
}).then((username)=>{
    console.log(username)
    return user.pass
}).then((pass)=>{
    console.log(pass)
}).catch((error)=>{
    console.log(error)
}).finally(()=>{
    console.log("finalyy done")
})

    //promise five

const p5=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=false  //agr yahn pe truee hai then reject excute hoga beause ye cheez trrue hai and ! true ko false mein converrt kar deta hai and same concept with false
        if(!error){
            resolve({username:"mamta",emai:"hello@gmailcom"})
        }
            else{
                reject("this is rejected")
            }
        
    },2000)
})
async function consume(){
    const response=await p5  //p5()you can not consume somthing like this
    console.log(response)
    //promise();
}
consume().then((user)=>{
   console.log(user)
})
.catch((error)=>{
    console.log(error)
})

//fetching the data 

async function getalluser(){
   const res= await fetch('https://dummyjson.com/products/')//isko bhi await krna hai kyunki ye bhi time leta hai 
   const data=await res.json() // api is in form array so we converte into data aur consvert hone mein time leta hai to isko await krwana padega
   console.log(data)
}
getalluser().catch((error)=>{
    console.log(error)
})  

fetch('https://dummyjson.com/products/').then((response)=>{
              return response.json()
}).then((data)=>{
    console.log(data)
 }).catch((error)=>{
    console.log(error)
})







