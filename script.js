const dob = document.querySelector(".date-input");
const luckyNo = document.querySelector(".number-input");
const  submitBtn = document.querySelector(".submit-button");
submitBtn.addEventListener('click',logic());
function logic(){
    console.log(dob.value);
};