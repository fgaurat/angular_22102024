
//#region old syntax
//console.log("hello")
// 
// function getTodo(id){
//     if(true){

//         let toto="truc"
//     }

//     console.log(toto)


// }
//#endregion


const getTodo = (id) => {
    const p = new Promise((resolve, reject) => {
        setTimeout(() => {
            const todo = {
                id,
                title: `Todo id: ${id}`,
                completed: true
            }
            resolve(todo)

        }, 1000)
    })

    return p
}

// const pTodo = getTodo(1)
// pTodo.then(todo => {
//     console.log(todo)
//     return getTodo(todo.id + 1)
// }).then(todo => {
//     console.log(todo)
//     return getTodo(todo.id + 1)
// }).then(todo => {
//     console.log(todo)
//     return getTodo(todo.id + 1)
// })

const main = async ()=>{
    const todo = await getTodo(1)
    console.log(todo)
    const todo2 = await getTodo(2)
    console.log(todo2)    
}

// main()

const arr = [10,20,30,40,50]
// arr = []
// arr[0] = 1200
console.log(arr)

let [b,c,...d] = arr
console.log(b,c,d)

const o = {
    name:"GAURAT",
    firstName:"Fred",
    job:"dev",
    age:22
}

console.log("o",o)
// o.age=48
// console.log(o)
const o1 = {...o,age:48}
console.log("o1",o1)