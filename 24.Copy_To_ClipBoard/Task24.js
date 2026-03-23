const btn=document.getElementById("SubmitButton");


btn.addEventListener('click',()=>{
     
    const input=document.getElementById("input");
    navigator.clipboard.writeText(input.value);
    document.getElementById("ErrorDiv").innerHTML="Added SucessFully";
    
    setInterval(()=>{
        document.getElementById("ErrorDiv").innerHTML="";
    },1000)
    
})

