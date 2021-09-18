const dob = document.querySelector(".date-input");
const luckyNo = document.querySelector(".number-input");
const submitBtn = document.querySelector(".submit-button");
const result = document.querySelector(".output")
submitBtn.addEventListener('click',function logic(){
//   console.log(dob.value);
  var val =  dob.value.replaceAll('-','')
//   console.log(val,typeof(val))
  var dateInput = Number(val);
  var numberInput = Number(luckyNo.value);
  //console.log('hi',dateInput,numberInput)
  var sum = 0;
  while(dateInput > 0){
  var rem = dateInput % 10;
  sum = sum + rem;
  dateInput = Math.trunc(dateInput/10)
//   console.log(dateInput)
  }
//   console.log(sum);
  luckChecker(sum,numberInput);
});

function luckChecker(sum,numberInput){
    // console.log(sum,typeof(sum))
    // console.log(numberInput,typeof(numberInput))
    if (sum % numberInput == 0){
        result.innerText  = "Yay! Your Birthday is Lucky"
    }
    else{
        result.innerText = "Your Birthday isn't Lucky"
    }
}
