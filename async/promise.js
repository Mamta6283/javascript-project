//promis is for eventual completion task it is an object in js it is solution to callhell.....

//let promise=new promise(funtion(resolve,reject){})

//using arrow function 
//let promise=new promise((resolve,reject)=>{}) function with handlers
//we will see three states in promise which is pending ,fullfilled ,rejected

let mypromise =new Promise((resolve,reject)=>{
    console.log("starting")
    setTimeout(function(){
        resolve()   
    },5000)
    // resolve()
})
mypromise.then(function(){
    console.log("sucess")
}).catch(function(){
    console.log("error")
})

// //yahn pe getdata fun ekk data le rahai ex only and ye directly data ko nhi bhejega to jab tak wo promise bhej dega jaise hi data bhej dega resolve kar dega 

function getdata(data,getnextdata){
   return new Promise((resolve,reject)=>{
    setTimeout(function(){
        console.log("data",data)
        resolve("sucess2")
        if(getnextdata){
            getnextdata()
        }
       /// getnextdata()
        },2000)
   })
  } 
    
  getdata(1,()=>{ //this is callback immidiately run nhi krta hai 
    console.log("getting data2.....")
    getdata(2,()=>{
        console.log("getting data 3.....")
        getdata(3,()=>{
            console.log("gettting data4....")
            getdata(4)
            //console.log("all done.. ")
        })
    });
  });

  //caling by usingn promise chaining and here we donot need any callback

  function getdata(data){
    return new Promise((resolve,reject)=>{
     setTimeout(function(){
         console.log("data",data)
         resolve("sucess2")
         
        /// getnextdata()
         },2000)
    })
   } 

  // let p1=getdata(1)
  // p1.then((res)=>{
  //   console.log(res)
  //   getdata(2).then((res)=>{
  //     console.log(res)
  //   })
  // })
   //ese call kar skte hai but you have to return 
  getdata(2).then((res)=>{
    return getdata(2)
  }).then((res)=>{
    console.log(res)
  })
   









  //promise object can be4 
  //pending: the result is undefined 
  //resolve :this is value fullfilled 
  //rejected: the result is an error object

  //using then and catch then will take resolve and reject 
 
  
  const getpromise=()=>{
   return new Promise((resolve,reject)=>{
        console.log("im promise")
       // resolve("sucess")
       reject("error")
    })
  }
  let promise=getpromise();
  promise.then((res)=>{
    console.log("done",res)
  }).catch((err)=>{
    console.log("rejected",err)//yahan pe jo reject mein pass kiya tha 
  })

  //promise chaining 

  function asyncfun(){
    return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      console.log("promising chaining")
      resolve("sucess")
    },2000)
    setTimeout(()=>{
      console.log("error")
      reject("error")
    },5000)
    
    
  })
}

//here we can see there are many type and way to call promise in easy way out find  out yours
console.log("fetching data1.......")
asyncfun()
.then((res)=>{
    console.log(res) 
    console.log("fetching data2.......")
  })
  .then(()=>{
    console.log("new call")
  })


  //you can call promise using this way 
  asyncfun()
  .then((res)=>{
    console.log(res)

  }).catch((err)=>{
    console.log(err)
  });

// //this another way to call

  // let promise1 =asyncfun();
  // promise1.then((res)=>{
  //   console.log(res)

  // }).catch((err)=>{
  //   console.log(err)
  // });
  

  // you can call promsie in this way 
 

  // let promise2 =asyncfun();
  // promise2.then((res)=>{
  //   console.log(res) 
  //   console.log("fetching data2.......")

  // }).catch((err)=>{
  //   console.log(err)
  // });

 
  // let promise3 =asyncfun();
  // promise3.then((res)=>{
  //   console.log(res)
  // }).catch((err)=>{
  //   console.log(err)
  // })