// console.log("asyn ")
// console.log("first")
//you can apply this settimeout function like this 

// setTimeout(function(){
//     console.log("second")
// },2000)
// console.log("third")


//working with add events
// const changing =function(){

// document.querySelector("h1").innerHTML="hello this async"
// }
// const change=setTimeout(changing,2000)//it will take refrence and parameter as well 

// //agr event ko rokna hai 2sec se phele roka hai 


// let button=document.querySelector("#stop")
// button.addEventListener("click",function(){
//     clearTimeout(change)
//     console.log("stopped")

// })


//2 button liya and jab start kiya tab shuru hoga fn aur stop krte stop ho jayega
//so you can do something like this 

// let button2=document.querySelector("#start")
// button2.addEventListener("click",function(){
  
//     const sayme=function(str){
//         console.log(str)
//     }
//     const inter=setInterval(sayme,1000,"h1")
    
// })

// const sayme=function(str){
//     console.log(str)
// }
// const inter=setInterval(sayme,6000,"h1")

// let button=document.querySelector("#stop")
// button.addEventListener("click",function(){
//     clearInterval(inter,2000)
//    console.log("stopped")
// })


const randomfn=function(){
    const hex='0123456789ABCDEF';
    let color='#';
    // color+="#"
    for(let i=0; i<6;i++){
        color+=hex[(Math.floor(Math.random()*16))];
    }
    return color
}

const startchanging=function(){
     

    if(interval){
     interval=setInterval(changcolor,2000)
    }
    function changcolor(){
    document.body.style.backgroundColor=randomfn();
    }
}
const stopchanging=function(){
    clearInterval(interval)
    interval=null
    
}


let start=document.querySelector("#start")
start.addEventListener("click",startchanging)

let button2=document.querySelector("#stop")
button2.addEventListener("click",stopchanging)



