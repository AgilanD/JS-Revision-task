const btn=document.getElementById("SubmitButton");

btn.addEventListener('click',()=>{
     
   const input=document.getElementById("input");
      const regex = /^[A-Za-z ]+$/;
    if(regex.test(input.value)){
        document.getElementById("ErrorDiv").innerHTML=" ";
        const char=input.value;
        document.getElementById("Resuslt").innerHTML=`The Reverse String is ${ char.split('').reverse().join('')}`;
    }                              
    else{
        document.getElementById("Resuslt").innerHTML=" ";
        document.getElementById("ErrorDiv").innerText="Invalid Input";
        document.getElementById("ErrorDiv").style.color='red';
    }

})