const dob = document.querySelector(".date-input");
const luckyNo = document.querySelector(".number-input");
const submitBtn = document.querySelector(".submit-button");
const result = document.querySelector(".output");
const result1 = document.querySelector(".output1");
// var val =  dob.value.replaceAll('-','');
// var dateInput = Number(val);
// var numberInput = Number(luckyNo.value);
submitBtn.addEventListener('click',function logic(){
   if (dob.value == ""){
      validation();
  }
  else{
    var numberInput = Number(luckyNo.value)
    console.log(numberInput, typeof numberInput)
    if(numberInput < 1){
      result.innerText = "Please enter a lucky number greater than 1"
    }else{
      var val =  dob.value.replaceAll('-','');
      var dateInput = Number(val);
  console.log(dateInput,val);
  var sum = 0;
  while(dateInput > 0){
  var rem = dateInput % 10;
  sum = sum + rem;
  dateInput = Math.trunc(dateInput/10)
  }
  console.log(sum,numberInput)
  luckChecker(sum,numberInput);
}
  }
});
function validation(){
  var numberInput = Number(luckyNo.value)
  if(luckyNo.value == ''){
    result.innerText = "please enter both the values"
    } 
    else{
      if(numberInput < 1){
        result.innerText = "Please enter date value & a lucky number greater than 1"
      }else{
      result.innerText = "Date cannot be empty";
    }
    }
}

function luckChecker(sum,numberInput){
  console.log(sum,numberInput)
    if (sum % numberInput == 0){
        result.innerText  = "Yay! Your Birthday is Lucky"
    }
    else{
        result.innerText = "Your Birthday isn't Lucky"
    }
}
