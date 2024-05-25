//network error hmaesha response n=bhrjga naki reject


//api will work on request and response cycle(application programing interface)
//fetch is use to fetch a resource data 
//https://spoonacular.com/food-api/docs#Authentication"

//const response= ('https://cat-fact.herokuapp.com')//ye ek promise return karta hai isko get request karte hai kyunki yahan pe data receive kar rhe hai 
// let promise=fetch(response)
// console.log(promise)
// const data= response.json()
// console.log(data)

//getting data by async function 

let btn=document.querySelector("#btn")
let h1=document.querySelector("#category")

async function consume(){
    console.log("getting data......")
    let res= await fetch('https://dummyjson.com/products/')
    //console.log(res)
    let data= await res.json();
    console.log(data)
    // h1.innerHTML=data[0].title  im doing in this wy which is wrong it is in the form objects and ismein array ki trrah data hai so we have to index by index 
    h1.innerHTML=data.products[0].title 

   // title.innerHTML=data[0].brand
    


}
consume()

btn.addEventListener("click",consume)
//hamra request json method mein ata hai usko js object mein convert krna hota hai

//AJAX is asynchronous js & xml 
//json is java script notation 
// it is retruns a second promise that resovles with the result of parsing the response body text as json input is json output os js object


