const buttons = document.querySelectorAll('.button'); // (question and image )
const answer = document.querySelectorAll(".answer"); // answer content

// on clicking question and image my answer should expand. its hidden by default.
//iterate through
buttons.forEach((button, index) => {
    button.addEventListener('click', e => {
       console.log("clicked")
       e.preventDefault();
       console.log("Button parent element:", button.parentElement); //checking for button parent element
       console.log("Next sibling:", button.parentElement.nextElementSibling);
       console.log("outerhtml", button.parentElement.nextElementSibling.outerHTML);
       console.log("Answer", button.parentElement.nextElementSibling.querySelector(".answer"));
       console.log("Answer element:", answer);
       
       // Toggle the visibility of the answer
       if (answer) {
            if (answer.hidden) {
                answer.hidden = false;
                button.querySelector('.plus-size').src = './assets/images/icon-minus.svg';
            } else {
                answer.hidden = true;
                button.querySelector('.plus-size').src = './assets/images/icon-plus.svg';
            }
       } else {
           console.log("Answer element not found!");
       }
       
    });
});
       
 