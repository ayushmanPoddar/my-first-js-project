let btn=document.querySelector("#btn")
let inp=document.querySelector("#myInp")
btn.addEventListener("click",function(){
inp.click();

})
inp.addEventListener("change", function(myInfo){
    console.log(myInfo.target.files[0].name);
    btn.textContent= myInfo.target.files[0].name;
})