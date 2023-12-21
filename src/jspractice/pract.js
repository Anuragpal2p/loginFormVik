async function delay(time){
    await new Promise((resolve)=>{
        setTimeout(() => {
            console.log("promise resolved")
            resolve()
        }, 3000);
    })
}


async function main(name,...rest){
    console.log("main",name,rest)

    // await delay(300)

    await new Promise((resolve)=>{
        setTimeout(() => {
            console.log("promise resolved")
            resolve()
        }, 3000);
    })
    console.log("print after promise resoleved")
}

// main("deepanshu",234,"sdfa")



let user = {
    name:"deepanshu",
    profile:"SDE",
    getUser:function(){
        this.name="anurag"
        console.log(this)
    }
}

let data = new user.getUser()
let data1 = new user.getUser()

console.log(data)
console.log(data1)