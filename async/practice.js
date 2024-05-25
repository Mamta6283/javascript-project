

//1)

// const mypromise=new Promise (function(resolve,reject){
//     console.log("program started")
//     setTimeout(function(){
//         resolve("resoved")
       
//     },3000)
//    // reject("pending")
//     //console.log("program compeleted")
// })
// console.log(mypromise)//ypu can check here 

// console.log("program in progress")
// mypromise.then((res)=>{
//     console.log(res)
//     console.log("program completed")
// }).catch((err)=>{
//     console.log(err)

// })

//2)
// console.log("prgram started")
// const mypromise1=new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve("resolved")
//     },3000)
//     setTimeout(function(){
//         reject("reject")
//     },2000)
// })
// console.log(mypromise1)
// console.log("program in progress")
// mypromise1.then(function(){
//     console.log("prgram complted")
// })
// .catch(function(err){
//     console.log(err)
//     console.log("prgram failiure")
// })

//3)
// console.log("prgram started")




// console.log("prgram started")
// const mypromise2= new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve("step 1 compelted")
//     },3000)
// })

// console.log(mypromise2)

// console.log("program in prgress")
// mypromise2.then((res)=>{
//     console.log(res)

   
// return new Promise(function(resolve,reject){//this will return to promise and uske ander hi call krna hai
//     setTimeout(function(){
//         resolve("step 2 compelted")
//     },5000)
// })
// })
// .then(()=>{
//     console.log("step 2 completeed")
// })





//4)

/*console.log("prgram started")

const mypromise3=new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({data:"hello friend",error:null})
    },5000)
})
console.log(mypromise3)
console.log("program in progress")
mypromise3.then((res)=>{
    console.log(res.data)
    console.log(res.error)
    console.log("first completed")

return new Promise(function(receive,reject){
    setTimeout(function(){
        console.log("first promise chain complete")
    },2000)
})
}).then(()=>{
    console.log("first promise chain complete")
})




const mypromise4=new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({data:"hello friend",error:null})
    },5000)
})
console.log(mypromise4)
console.log("program in progress")
mypromise3.then((res)=>{
    console.log(res.data)
    console.log(res.error)
    console.log("second completed")

return new Promise(function(receive,reject){
    setTimeout(function(){
        console.log("second promise chain complete")
    },10000)
})
}).then(()=>{
    console.log("second promise chain complete")
})*/

//create 2 promise aur dono value ko ekk mein kaise kre 

const resolve1=new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve(10)
    })
})
const resolve2=new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve(20)
    })
})
Promise.all([resolve1,resolve2]).then((res)=>{
    const first=res[0]
    const sec=res[1] //index mein lelo values ko
    console.log(first+sec)
    console.log(res)
})





