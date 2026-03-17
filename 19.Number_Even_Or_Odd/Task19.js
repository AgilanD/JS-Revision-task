const btn=document.getElementById("SubmitButton");

btn.addEventListener('click',()=>{
     
    const input=document.getElementById("input");
    const regex = /^[\d,]+$/;
    const arr=input.value;
    let char=0;
    if(regex.test(input.value)){
    
             if(parseInt((arr))%2==0){
                char="Even Number";
             }
             else{
                 char="Odd Number";
             }
          
        document.getElementById("ErrorDiv").innerHTML=" ";
        document.getElementById("Resuslt").innerHTML=` ${char}`;
    }                              
    else{
        document.getElementById("Resuslt").innerHTML=" ";
        document.getElementById("ErrorDiv").innerText="Invalid Input";
        document.getElementById("ErrorDiv").style.color='red';
    }

})