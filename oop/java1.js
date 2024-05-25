//const parent=document.querySelector(".parent");
// console.log(parent);
// console.log(div.children);// you can here get all three childs in this div
// console.log(div.children[1]);

//here we move from parent to child node
/*for(let i=0; i< parent.children.length; i++){
    console.log(parent.children[i].innerHTML);
}
parent.children[1].style.color='orange'

console.log(parent.firstElementChild);*/

/*const dayone=document.querySelector(".day")
    console.log(dayone)
console.log(dayone.parentElement);

console.log("NODES",parent.childNodes)//here we can show all the nodes*/



//create elelment
 /*let div=document.createElement("div")
 console.log(div)

 div.className="main"
 div.id="newid"
 div.id=Math.round(Math.random()*10+1)// you can create id like this as well 

 div.setAttribute("title","generated title")//in this way attruibute can be set

 div.style.backgroundColor="green"
 div.style.padding="10px"

 //div.innerText="chai is good" //value se ko leke ate hai 
const addtext=document.createTextNode("CHAI IS GOOD")
div.appendChild(addtext)

//html paage ke sath attach or document attach

document.body.appendChild(div)*/ //this is used to append any thing


function addlanguage(language){
   let li= document.createElement("li")
   li.innerHTML=`${language}`
   document.querySelector(".language").
   appendChild(li)
}
addlanguage("python")
addlanguage("typescript")

//two ways of creating and adding the list 
function addoptilanguage(language){
    let li =document.createElement("li")
    li.appendChild(document.createTextNode(language));
    document.querySelector(".language").appendChild(li)
}
addoptilanguage("golang")

//edit
let seclang=document.querySelector("li:nth-child(2)");
// console.log(seclang.innerHTML="mojo")
seclang.innerHTML="mojo"//this also the way to replace 
 const newli=document.createElement("li")//this is also
 newli.textContent="mojo"
 seclang.replaceWith(newli)


 //edit

 const firstlang=document.querySelector("li:first-child")
 firstlang.outerHTML="<li>typescript</li>"

 //remove it will remove the child
 const lastlang=document.querySelector("li:last-child")
 lastlang.remove()