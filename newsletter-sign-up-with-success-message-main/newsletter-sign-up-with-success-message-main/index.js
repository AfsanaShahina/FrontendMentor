const email1 =document.querySelector(".inputcontainer");
const btn1 = document.querySelector(".btn")
const thankscontainer = document.querySelector(".success-container")
const maincontainer = document.querySelector(".main-container")
const thanksemail = document.querySelector(".emailvalue")


btn1.addEventListener("click", () =>{
        thanksemail.textContent = email1.value;
        console.log(email1)
        maincontainer.classList.add("hidden")
        thankscontainer.classList.remove("hidden")
})