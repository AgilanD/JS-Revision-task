var modal = document.getElementById("hii");
var btn = document.getElementById("Btn");
var span = document.getElementById("close");
var input=document.getElementById("EMAIL");
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

btn.onclick = function() {
  modal.style.display = "block";
}
span.onclick = function() {
  modal.style.display = "none";
}


input.addEventListener('change',()=>{
if (emailRegex.test(input.value)&&input.value.includes("@")) {
    document.getElementById("Result").innerHTML=" ";
    document.getElementById("Result").innerHTML=`Login Successfull`;
} 
else {
    document.getElementById("Result").innerHTML=" ";
    document.getElementById("Result").innerHTML="Invalid Email ";
}
});
