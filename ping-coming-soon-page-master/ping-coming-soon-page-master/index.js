const btn1 = document.querySelector(".btn");
const error = document.querySelector(".errormsg");

btn1.addEventListener('click', (event)=>{
    event.preventDefault();
    console.log("clicked")
    const email1 = document.querySelector(".inputfield").value.trim();
    const emailvar =  /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(email1.trim() === ""){
        error.classList.remove("hidden")
        error.textContent= "Please enter a Email Id";
    }
    else if(!emailvar.test(email1)){   
        error.textContent = "Please enter a valid Email Id";     
        error.classList.remove("hidden")
    }else{
        error.classList.add("hidden")
    }

});