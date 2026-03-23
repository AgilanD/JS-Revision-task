const btn=document.getElementById("SubmitButton");


btn.addEventListener('click',()=>{
     
    const input=document.getElementById("input");
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const email = "example@domain.com";
    if (emailRegex.test(email)&&input.value.includes("@")) {
       const arr=input.value.split("@");
        document.getElementById("Resuslt").innerHTML=`Domain = ${arr[1]}`;
        document.getElementById("ErrorDiv").innerHTML=" ";
    } 
    else {
       document.getElementById("Resuslt").innerHTML=" ";
       document.getElementById("ErrorDiv").innerHTML="Invalid Email ";
    } 
})