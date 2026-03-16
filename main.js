let btn=document.querySelector("#myButton");
let input=document.getElementById("myInput");
let result=document.querySelector("#result");
btn.addEventListener("click", function(){
    result.textContent= input.value;
});

