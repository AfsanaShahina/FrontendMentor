const arrow=document.querySelector(".arrowmark")
const error1=document.querySelector(".errormsg")
const error2 = document.querySelector(".erroricon")

arrow.addEventListener("click", ()=>{
    const email1 = document.querySelector(".email").value;
    const emailvar = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailvar.test(email1)){
        console.log("clicked")
        error1.classList.remove("hidden");
        error2.classList.remove("hidden")
    }
})
