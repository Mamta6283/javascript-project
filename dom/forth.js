// document.getElementById("btn").onclick=function(){
//      alert("hello")
//     }
//two ways of using onclick function
// let button=document.getElementById("btn")

// function hello(button){
//     alert("hello")
// }


let button=document.getElementById("btn")
button.addEventListener("click",function(events){
    console.log("preesed")
    console.log(events)
})
//events :type ,timestamp ,defaulttprevented 
//target ,toelement ,srcelement currenttarget 
//clientx 

//event bubbling and propagation and capturing 
 //this bubling
const ul=document.getElementById("image")
ul.addEventListener("click",function(){
    console.log("hello")
})

const li=document.getElementById("new")
li.addEventListener("click",function(e){
    console.log("new")
  //  e.stopPropagation() it will the bubling

})


//this capturning 
// const ul=document.getElementById("image")
// ul.addEventListener("click",function(){
//     console.log("hello")
// },true)

// const li=document.getElementById("new")
// li.addEventListener("click",function(){
//     console.log("new")
// },true)

// let btn1=document.getElementById("google")
// btn.addEventListener("click",function(e){
//     e.preventDefault()
//     console.log("google")

// })
//here we delte list item 

let ull=document.querySelector("#image")
console.log(ull)
// ill=document.getElementById("google")
ull.addEventListener("click",function(e){
    console.log(e.target.tagName);
    if(e.target.tagName==="button")
    
    // removeIt.remove()

    // removeIt.parentNodes.removeChild(removeIt)
    {
        console.log(e.target.id)
    removeIt.parentNodes.removeChild(removeIt)

    }
})