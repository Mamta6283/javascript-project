// let elem=document.getElementsByClassName("parent")
// console.log(elem)

//this is how you can get children of parent node and through index
// let parent=document.querySelector(".parent")
// console.log(parent)
// console.log(parent.children)
// console.log(parent.children[0])
// console.log(parent.children[0].innerHTML)


// for(let i=0; i<parent.children.length; i++){
//     console.log(parent.children[i])
//     console.log(parent.children[i].innerHTML)
// }
// parent.children[0].style.color="red"

// console.log(parent.firstElementChild)//by using this you can get first c
// console.log(parent.lastElementChild)


// let day=document.querySelector(".day")
// console.log(day)

// console.log(day.parentElement)//it will show the parent element app child se parent mein ja skte hai.....


// console.log("nodes",parent.childNodes)//nodes mein text hote hai 



//create element 
let div=document.createElement("div")
console.log(div)
div.innerHTML="hello"
div.id="new"
div.classList="he"
div.innerText="hello"//ye data leke ata hai fr changes krta hai 

div.setAttribute("title","newtitle")//ye directly changes krta hai 
div.style.backgroundColor="green"
const add=document.createTextNode("hello every one")
div.appendChild(add)
document.body.appendChild(div)//this how you can append