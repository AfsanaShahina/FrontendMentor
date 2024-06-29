
const arrow = document.querySelectorAll(".arrowsection")
const answer1 = document.querySelectorAll(".answer")
let active = true;

arrow.forEach((arrow1, index) =>{
    arrow1.addEventListener('click', e =>{
        console.log("clicked");

        answer1.forEach((answer, i) =>{
            if(i !== index){
                answer.classList.add("hidden")
            }
        });
        answer1[index].classList.toggle("hidden");
        /*if(active){
        answer1[index].classList.remove("hidden")
        
        }else{
        answer1[index].classList.add("hidden")
        }
        active =!active;*/
    }) ;

    });