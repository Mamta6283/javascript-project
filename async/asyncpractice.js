//  const  fetchpokemen=()=>{
//       return new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve({data:"pickachi",power:20,danger:"danger!"})
//         reject({danger:"danger!"})
//     },2000)
//     // setTimeout(function(){
//     //   reject({danger:"danger!"})
//     // })
// })
// }
// const  fetchpokemen2=()=>{
//     return new Promise(function(resolve,reject){
//   setTimeout(function(){
//       reject({danger:"danger!"})
//   },2000)

// })
// }
// console.log("program starting.....")

// async function consume1(){
//    await fetchpokemen().then((res) =>{
//     console.log(res.data,res.power)
    
//     console.log("program is completed")
//    }).catch((err)=>{
//     console.log(err.danger)
//     console.log("program is completed")

//    })
// }
// consume1()


//2 
// const fetchuser=()=>{
//     return new Promise(function(resolve,reject){
//         setTimeout(function(){
//             resolve({data:{user:"monkey",admin:true}})

//         },2000)

        
//     })
// }

// function login(data){
//     console.log(data)
//     if(data.admin==true){
//         console.log("successfully logged in")
//     }
//     else{
//         console.log("failed to log in please try again")
//     }

//     login()
// }
// console.log("programing starting.....")

// async function consume2(){

//     const result=await fetchuser()
//     console.log(result)
//     console.log(result.data)

// }
// consume2()


//3

/*const fetchfast1=()=>{
    new Promise (function(resolve,reject){
        setTimeout(function(){
            resolve("fast done")
        },2000)
    })
}

const fetchslow=()=>{
    new Promise (function(resolve,reject){
        setTimeout(function(){
            resolve("slow done")
        },6000)
    })
}

 async  function consume1(){

    const fast1=fetchfast1()

        console.log(fast1)

    
    
       const res2= fetchslow()

       const result=await Promise.all(fast1,res2)
       console.log(result)
    
        console.log(res2)
 }
consume1()*/


//4

const gogetcandies=()=>{
   return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve({candy:"sour keys",num:10})
        },2000)
    })

}
const getcandies=(candy)=>{
    // console.log(candy)
    return new Promise(function(resolve,reject){
        setTimeout(() => {
            // console.log(data)
            resolve(25*candy.num)
            console.log(candy)
            
        }, 3000);
    })

}
getcandies()

async function candies(){
    const candy=await gogetcandies()
   const result= await getcandies(candy)
   console.log(result)
   const time2=new Date();
   console.log(`${time2-time1}ms passed`)

}
console.log("program starting")
const time1=new Date()
candies()