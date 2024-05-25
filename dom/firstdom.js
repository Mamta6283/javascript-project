console.dir(window.document)
//you get element by id and class this is the id of h1
// console.log(document.getElementById("heading"))
// console.dir(document.getElementById("heading"))



//you can get by class this is h1 of class
// let head=(document.getElementsByClassName("head"))
// console.log(head)


//this is div of id

// let div=document.getElementById("div")
// console.log(div)
// console.log(div.style.backgroundColor="green")

//get attribute using set attribute you can changge attribute
// console.log(div.getAttribute("id"))
// console.log(div.setAttribute("id","new"))

//you can get a text throught this way 
// let ele=document.getElementById('heading')
// console.log(ele.innerText)
// console.log(ele.textContent)
// console.log(ele.innerHTML)


//query selector will selcect first element

// let elem=document.querySelector("#heading")
// console.log(elem)

// console.log(document.querySelector(".di"))

//ander ke element ko changes kar skte ho 

let myul=document.querySelector("ul")
let turn=myul.querySelector("li")
console.log(turn.style.backgroundColor="red")

//queryselector all sari elements select kar skte ho (ismein apko node list mein elements milte hai)(yahan ppe parents node mein jake then child node mein jake phir ap changes kar skte ho child node mein)
let all=document.querySelectorAll("ul")
all.forEach(function(all){
    all.style.backgroundColor="green"
})

//console.log(all[0].style.backgroundColor="green")

//convert html collection of child nodes into array then  you make any changes within child node

let ul=document.getElementsByClassName("item")
console.log(ul)
let hello=Array.from(ul)
console.log(hello)
hello.forEach(function(i){
    i.style.backgroundColor="blue"
})

