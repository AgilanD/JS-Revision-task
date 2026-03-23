const btn=document.getElementById("SubmitButton");

btn.addEventListener('click',()=>{
     
   const input=document.getElementById("input");
    const regex = /^.$/;
    if(regex.test(input.value)){
        document.getElementById("ErrorDiv").innerHTML=" ";
        const char=input.value;
        if("aeiouAEIOU".includes(char)){
        document.getElementById("Resuslt").innerHTML=`The Given Character is Vowel`;
       }
       else{
        document.getElementById("ErrorDiv").innerHTML=" ";
        document.getElementById("Resuslt").innerHTML=`The Given Character is Not a Vowel`;
        document.getElementById("Resuslt").style.color="Red";
       }
    }                               
    else{
        document.getElementById("Resuslt").innerHTML=" ";
        document.getElementById("ErrorDiv").innerText="Invalid Input";
        document.getElementById("ErrorDiv").style.color='red';
    }

})