//oop literals 


// const user={
//     username:"mamta",
//     logincount:8,
//     singdin:true,
//     getuser:function(){
//         console.log("got user deatils")
//         console.log(`username:${this.username}`)//here this is used to get current value
//         console.log(this)//if write only this then it will show whole thing context which avaiabel in object   
//      }

// }
// const user2={
//     username:"mamta",
//     logincount:8,
//     singdin:true,
//     getuser:function(){
//         console.log("got user deatils")
//         console.log(`username:${this.username}`)//here this is used to get current value
//         console.log(this)//if write only this then it will show whole thing context which avaiabel in object   
//      }

// }
// console.log(user2.username)
// console.log(user.getuser())
//humko yahan pe bar bar new value leni padegi objects mein 


//consturtor funtion : it will give new  instance everytime

//here new is construtor fn  ek instance se multiple instance bna skte hai but promise hmesha new hi cahaiye hota hai  and used to create a new context e:g: are 
// const promiseone=new Promise()
// const date =new date()

// /yahn pe same hi rakhte hai to clear you will use this key this.usernme is variable and username is parameter which send by function


function  User (username,logincount,islogdin){
    this.username=username  ;
    // console.log(username)  
               
    this.logincount=logincount;
    // console.log(logincount)
    this.islogdin=islogdin;
    // console.log(islogdin)

    //methods also can be used
    this .greeting =function(){
        console.log("welcome",this.username)
    }

    return this
}

const helo=new User("mamta",12,true)
console.log(helo instanceof User)
const usertwo= new User("helo",123,true) //yahna pe calling new key ko use karke hi hoga 
console.log(usertwo)


//instance of 