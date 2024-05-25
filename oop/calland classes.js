//call and this 
function setusername(username){
    //complex db calls
    this.username=username
    console.log("callled")

}
function createuser(username,email,password){

setusername.call(this,username)//it will hold the reference oof function then we will give  excution context 
// this.username=username
    this.email=email
    this.password=password
}

const chai=new createuser("chai","mmamta@gmail.com",123)
console.log(chai)



//classes 

class user{
    constructor(username,email,password){
        this.username=username
        this.email=email
        this.password=password
    }
    encryp(){
        return this.password
    }
    change(){
        return `${this.username.toUpperCase()}`
    }
}

const tea=new user("chai","mamta@gamil.com",123)
console.log(tea.encryp())
console.log(tea.change())



//behind the secen
function user1(username,email,password){
    this.username=username
        this.email=email
        this.password=password
}
user.prototype.encryp=function(){
    return this.password
}


user.prototype.change=function(){
    return `${this.username.toUpperCase()}`
   
}


const tea1=new user("chai","mamta@gamil.com",123)
console.log(tea1.encryp())
console.log(tea1.change())


class user2{
    constructor(username){
        this.username=username

    }
    login(){
        return `${this.username}`
    }
}

class teacher extends user2{ //extend will overwrite all the function of user functionn 
    constructor(username,email,password){
        super(username)
        this.email=email
        this.password=password

    }
    add(){
        console.log("a new course wass added by",this.username)
    }
}

const hello=new teacher("mamata","mamta@gmail.com",122)
console.log(hello.login())
hello.add()
const a=new user2("mamtarani")
console.log(a)
a.login()
console.log(hello instanceof user2)
console.log(a instanceof teacher)
console.log(hello instanceof teacher)



class user3{
    constructor(username){
        this.username=username

    }
    login(){
        return `${this.username}`
    }
      creatid(){  //ye access rok dega 
        return `123`
    }
}
const b=new user3("mamta")
console.log(b)
// console.log(b.creatid())

class teacher4 extends user3{
    constructor(username,email){
        super(username)
        this.email=email

    }

}
const iphn=new teacher4("iphpoe","ohohjff@gimal.vom")
console.log(iphn.creatid())

const myname="mamta"
const another=myname

console.log(myname)
console.log(another)