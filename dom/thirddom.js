function language(langname){
  const li=document.createElement("li")
    li.innerHTML=langname
    console.log(li)
    const ul=document.querySelector(".language")
    ul.appendChild(li)
    console.log(ul)
    

}
language("java")

//here we are creating element and appending the list to its ul ele

function optlang(lang){
    const li=document.createElement("li")
    console.log(li)
    li.innerHTML=lang
    const add=document.createTextNode(lang)
    // console.log(add)
    li.appendChild(add)
    console.log(add)
    const ul=document.querySelector(".language")
    ul.appendChild(li)
    console.log(ul)
    }
optlang("python")

//edit 

//phle pe yahn pe select kiya li list ko and uski jagah pe change krne kke liye then creating  a new list then it just repalce with old one 

 const sec=document.querySelector("li:nth-child(2")
 const li=document.createElement("li")
 li.innerHTML="mern"
 sec.replaceWith(li)
 
//you can edit in this way 

const first =document.querySelector("li:first-child")
first.outerHTML="<li>hello</li>"


//remove

const last=document.querySelector("li:last-child")
last.remove()