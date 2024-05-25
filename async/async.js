console.log("one")

setTimeout(function(){
    console.log("hello")
},5000)

console.log("third")

//callback

function sum(a,b){
    console.log(a+b);
}
function cal(a,b,sumcallback){//as parameter sum fun ko store kar diya
    sumcallback(a,b)
}
cal(1,2,sum);//cal function mein ekk aur function as argument bhejna call kran but wihtout(this) yehan pura ka pura  function bhej skte ho 

const hello=(function(){//in this way you can also create 
    console.log("hello")
})

setTimeout(hello,2000)

//callback hell 
//nestd callback below  one another forming a pyramid structure 

//agr individually data ko run krna hai to you can use call back
//

function getdata(data,getnextdata){

    setTimeout(function(){
        console.log("data",data)
        if(getnextdata){
            getnextdata()
        }
       /// getnextdata()
        },2000)
    }
    getdata(1,getdata)//there are two ways to call
    getdata(2,()=>{
        getdata(3)
    })
  getdata(1,()=>{ //this  callback immidiately run nhi krta hai aur fun ke ander fun
    console.log("getting data2.....")
    getdata(2,()=>{
        console.log("getting data 3.....")
        getdata(3,()=>{
            console.log("gettting data4....")
            getdata(4)
            //console.log("all done.. ")
        })
    });
  });
 
  