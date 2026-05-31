console.log("ayushman")

// const user =  prompt("jus trying");
let personDetails ={

    name: "jonathan poddar",
    age : 69,
    moneySpent:["$29"," $87","$2" ]
}
console.log(personDetails)



const numbs=[1,2,3,4,5,6,7,8,9,];

// function printFunc(el){
//     console.log(el)
// }
// printFunc(numbs[0])
// printFunc(numbs[3])

// numbs.forEach(printFunc)

 const ans= numbs.map(function(n){
    return n *2
})
console.log(ans)

const add = function (x,y){
    return x+y;   // another way to write the same thing is given below 
}

const adding = (x,y) =>{ // ARROW FUNCTION
    return x+y
}
const empty = () =>{ // ARROW FUNCTION
    console.log('no argument arraow function')
}
setTimeout(()=>{
    console.log('Checking delay in time before excution of function')
} , 3000)

const tryFilterConcept= numbs.filter(x => (x %2===0)) // FILTER 
console.log(tryFilterConcept)
//SOME AND EVERY 
 const evv= numbs.every(xx => (xx >0)) // every
console.log(evv)

console.log( numbs.some(xx => (xx >99))) // some

