let changeHead = document.querySelector("#changeHead")
let sel= document.querySelector("select")

sel.addEventListener("change",function(myInfo){
    console.log(myInfo.target.value)
    changeHead.textContent= `${myInfo.target.value} suits your personality `
})