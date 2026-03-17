const btn=document.getElementById("SubmitButton");

btn.addEventListener('click',()=>{
     
   const input=document.getElementById("input");
    const regex =/^[a-zA-Z]+$/;
    if(regex.test(input.value)){
        document.getElementById("ErrorDiv").innerHTML=" ";
        const char=input.value;
        if(char.charAt(0)==char.charAt(char.length-1)){
        document.getElementById("Resuslt").innerHTML=`The Given Word First and Last Letter is Same`;
        alert("First and Last Character or Same");
       }
       else{
        document.getElementById("ErrorDiv").innerHTML=" ";
        document.getElementById("Resuslt").innerHTML=`he Given Word First and Last Letter is not Same`;
       }
    }                               
    else{
        document.getElementById("Resuslt").innerHTML=" ";
        document.getElementById("ErrorDiv").innerText="Invalid Input";
        document.getElementById("ErrorDiv").style.color='red';
    }

})