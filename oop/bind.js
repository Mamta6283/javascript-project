class React{
    constructor(){
        this.library="react"
        this.server="http://localhost:300"
        document.querySelector("#btn").addEventListener("click",this.handle.bind(this))
        
    }
    handle(){
        console.log(this)
        console.log("clicked")
        console.log(this.server)
       console.log( this.library)

       
    }
}

const app=new React()
console.log(app)

const de=Object.getOwnPropertyDescriptor(Math,"pI")
console.log(de)

console.log(Math.PI)