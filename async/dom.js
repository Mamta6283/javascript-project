//widnow object :the window object represendts an open window in a browser  ,it is browser object not js and is automatically by browser
//it is a global object with lots of properties and  methods

// console.log("hello")
// window.console.log("heloo2")//this is part of window object 
// window.alert("name") //this as well 

//dom when a page is loaded ,the browser creates dom of thee page
//html ko access kr skte hai js mein jisko object  mien convert ho jata hai.. usko name dete hai document 


//console.dir(window.document ) object ko show/ print  krta hai .....

// console.dir(window.document.body)//object print kr dega 
// console.log(window.document.body)//print kar dega


//html ko acces krne ka treeka hai in js that is dom

//when we want any changes at run time in js can do only 
// document.body.style.backgroundColor="green";//it will change the color

//document.body.childNodes[1].innerText="change"//to change the text of any child node or any node

//data manipulation 

//selecting id = document.getElementId("idname") when id not availble then it will return null
 // let head=document.getElementById('heading');
// console.log(head);

//  let headd=document.getElementById('heading2');
//  console.log(headd);

//selecting class hrer html collection hota hai//this will return blank html collection 
// let a=document.getElementsByClassName('c1')
// console.log(a)

// let b=document.getElementsByClassName('c2')
// console.log(b)

// let c=document.getElementsByTagName('p')
// console.log(c)


//query selector it will return node list krtA HAI
// let firstele=document.querySelector("p")
// //console.log(firstele)//first element return 
// console.dir(firstele)

// let all=document.querySelectorAll("p")
// //console.log(all)//all elements return 
// console.dir(all)


// let clas=document.querySelectorAll("h6")
// //console.log(clas)
// console.dir(clas)//this throw class it will node list you have to write tag name here


//query selector with class you have to use(.)

// let element=document.querySelector(".c1")
// console.dir(element)

//id selector

// let name=document.querySelector("#heading") 

// console.dir(name)

//properties ---get and set hum value get(check) kar skte hai and set kar skte hai  //1 tagname return krta hai change and update bhi kar sktee hai  
//console.dir(document.body.firstChild);
//nodes hamari firstchild and last child hote hai
//dom tree contain  text node ,comment ,element node  

// document.querySelector('div').children;   


// let div =document.querySelector("div")
// console.dir(div.innerText)
// console.dir(div.innerHTML)

//innerText will return only text and innderHTML return coding 

// let heading =document.querySelector("h1")
// console.dir(heading.innerText)
// console.dir(heading.innerHTML)

//textcontent will return only hidden content


//practice

// let h2=document.querySelector("h2")
// console.dir(h2.innerText);
// h2.innerText=h2.innerText+"new stirng"


// let divs=document.querySelectorAll(".box")
// //console.dir(div)
// let index=1;

// for(div of divs){
//   divs.innerText="new element"
//   index++;
// }

// console.log(divs[0])
// divs[0].innerText=`new ${index};`

// console.log(divs[1])
// console.log(divs[2])

//dom manipulation 

//html collection mein sara data ek sath hota hai it means ke ek array index hota hai ......

//get attribute(attr) to get the attribute 

// let div=document.querySelector("div")
// console.log(div)

// let val=div.getAttribute("id")
// console.log(val)

//let variable.getattribute (attr name)


// let name=div.getAttribute("name")
// console.log(name)

// let pa=document.getElementsByClassName("para")
// console.log(pa)
// let para=document.querySelector("p")
// console.log(para)

// console.log(para.getAttribute("class"));
// console.log(para)

//set attribute 
//console.log(para.setAttribute("class","123"));


//style attribute 
// div.style.backgroundColor="red"
// div.style.color="yellow"
//div.style.visibility="hidden" to hide the content 

// div.style.fontSize="40px"
// div.innerText="hello"//here you can change the conteent of elment




//insert elements

// let ele = document.createElement("button");
// ele.innerText="click here"
// console.dir(ele)
// console.log(ele)

//to add in html show
// let div=document.querySelector("div")
// div.append(ele)//it will append at the end of node(inside element)


// let heading=document.createElement("h1")
// console.log(heading)
// heading.innerText="hello"

// document.querySelector("body").prepend(heading)//-body ke upper add kar dega

// let para=document.querySelector("p")
// console.log(para)

// para.remove();


//practice
//1

// let btn=document.createElement("button")
// console.log(btn)
// btn.innerText="click here"
// btn.style.backgroundColor="red"

// btn.style.color="white"
//  document.querySelector("body").prepend(btn)

//2

let para=document.querySelector("p")

console.log(para)

console.log(para.getAttribute("class"))

console.log(para.setAttribute("class","new"))//it will overwrite the class name purani wali change ho jati hai 
//classlist ke use karke new class add kar skte hai 
//classlist.remove()
