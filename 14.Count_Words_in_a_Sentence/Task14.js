const btn=document.getElementById("SubmitButton");

btn.addEventListener('click',()=>{
     
   const input=document.getElementById("input");
    const regex = /^[A-Za-z ]+$/;
    if(regex.test(input.value)){
        document.getElementById("ErrorDiv").innerHTML=" ";
        const arr=input.value.split(" ");
        document.getElementById("Resuslt").innerHTML=`<p>The Total Number of Word is ${arr.length}`;
                                                     
    }
    else{
        document.getElementById("Resuslt").innerHTML=" ";
        document.getElementById("ErrorDiv").innerText="Invalid Input";
        document.getElementById("ErrorDiv").style.color='red';
    }

})