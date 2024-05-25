
//two ways to see your fetch request 


// fetch('https://api.thecatapi.com/v1/images/0XYvRd7oD')
// .then((response)=>{
//     return response.json()
// })
// .then((result)=>{
//     console.log(result.breeds)
// })



// const h1=document.querySelector("#breeds")
// const h=document.querySelector("#head")
// const h2=document.querySelector("#list")

// async function data(){
//     const response= await fetch('https://api.thecatapi.com/v1/images/0XYvRd7oD')
//     const data= await response.json()
//     console.log(data)
//     h1.innerHTML=data.width
//     h.innerHTML=data.height
//     h2.innerHTML=data.breeds

// }

// data()




//https://wallhaven.cc/api/v1/w/<ID here>
//https://w.wallhaven.cc/full/x6/wallhaven-x6y2xl.jpg //IMAGE LINK

fetch("https://w.wallhaven.cc/full/x6/wallhaven-x6y2xl.jpg")
.then((response)=> response.blob())
.then((image)=>{
    console.log(image)
})