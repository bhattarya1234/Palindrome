const textInput = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const result = document.getElementById("result");
checkBtn.addEventListener("click", ()=>{
if(textInput.value === "") alert("Please input a value.");
else if(textInput.value.length === 1) result.textContent = `${textInput.value} is a palindrome`;
else simplify()
})
const simplify = () =>{
let value = textInput.value.toLowerCase();
let validValue = ""

for(let i of value){
  if(i >= "a" && i<="z"){
validValue += i
  }
}
pallindrome(validValue)
}

const pallindrome = (val) =>{
  let pallindrome = ""
for(let i = val.length -1; i>=0; i--){
pallindrome+=val[i]
}
if(pallindrome === val) result.textContent = `${textInput.value} is a palindrome`;
else {result.textContent = `${textInput.value} is not a palindrome`;}

}