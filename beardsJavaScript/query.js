let form = document.querySelector("form")
let inps=document.querySelectorAll("input")

let main = document.querySelector("#main")
let imageFile=document.querySelector("file")


form.addEventListener("submit", function(myInfo){
    myInfo.preventDefault();
    //  console.log(inps[0].value , inps[1].value, inps[2].value, inps[3].value);
    let card = document.createElement("div") // make a div named card and make it as a class
    card.classList.add("card")
    let profile=  document.createElement("div")
    profile.classList.add("profile")

     let img= document.createElement("img")
    let imageFile=inps[0].files[0]

    let imgUrl= URL.createObjectURL(imageFile)
    img.setAttribute("src",imgUrl)

    let h3=document.createElement("h3")
    let h5=document.createElement("h5")
    let p=document.createElement("p")

    h3.textContent= inps[1].value
    h5.textContent=inps[2].value
    p.textContent=inps[3].value
    profile.appendChild(img)
    card.appendChild(profile)
    card.appendChild(h3)
    card.appendChild(h5)
    card.appendChild(p)

   main.appendChild(card)
   let removeBtn = document.createElement("button");
    removeBtn.textContent = "Delete";
    
    // Listen for a click on this specific button
    removeBtn.addEventListener("click", function() {
        card.remove(); // This instantly deletes the card from the DOM
    });

inps.forEach(function (dets){
    if (dets.type!== "submit"){
         dets.value="";
    }
   
})
    
})