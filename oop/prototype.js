//prototype 


//:it will find your value in depth (layer ke layer upper jati hai )untill it null this is a behaviour of pro yahn pe this ,instance new keyword classes inherittence availabale hote  hai 

function mul(num){
    return num*4
}

mul.power=2
const u=  mul(8)
console.log(u)
console.log(mul.power)
console.log(mul.prototype)
//function is also object
//array and string bhi object hota  hai and object ka prototype null ho jata 

function create(username,score){
    this.username=username
    this.score=score
}
//you can create your own method in this way 
create.prototype.increment=function(){
    this.score++   //whoever call this function (jisne bhi call kiya )
}
create.prototype.printme=function(){
    console.log(`score is ${this.score} and username is ${this.username}`)
}

const chai=new create("chai",23)
const tea= new create("tea",34)


chai.printme()// this will not untill we are not adding a new key while calling a function so that it can know about that new methods are created



//prototypes

let myarr="mamta      "
let myar="rani    "
console.log(myarr.trueLength)
console.log(myar.trueLength)



let arr=["mamta","mami","papa"]
let hero={
    mamta:"me",
    mami:"mother",
    papa:"father",

    getevery:function(){
        console.log(`hello ${this.mamta}`)
    }

}

Object.prototype.hello=function(){
    console.log("it is availble")
}

Array.prototype.hey=function(){
    console.log("it is array object")
}

// hero.hello()
hero.hello()//object 
arr.hey()//array 


//inheritence 
const user={
    name:"chai",
    email:"mmata@gmail.com"
}




const teacher={
    makevedio:false
}
const teacher2={
    isavail:false
}
const teacher3={
    make:"js ",
    fulltime:false,
    __proto__:teacher
}
teacher.__proto__=user

//modern access syntax
Object.setPrototypeOf(teacher,teacher2)


let anothruser="chai aurcode      "
String.prototype.trueLength=function(){
    console.log(this.name)
    console.log(this)
    console.log(this.trim().length)
}
anothruser.trueLength()
"mamta".trueLength()
"heell".trueLength()



