let h1= document.querySelector("h1")
window.addEventListener("keydown" , function(myInfo){
console.log(myInfo.key)
if (myInfo.key=== " "){
    h1.textContent="Space mat daba na bro"
}else{
h1.textContent=myInfo.key
}

})