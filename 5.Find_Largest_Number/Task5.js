const btn=document.getElementById("SubmitButton");

btn.addEventListener('click',()=>{
     
   const input=document.getElementById("input");
    const regex = /^[\d,]+$/;
    if(regex.test(input.value)){
        const arr=input.value.split(",");
        let Largest=parseInt(arr[0]);
        for(let i=0;i<arr.length;i++){
           if(Largest<parseInt(arr[i])){
              Largest=parseInt(arr[i]);
           }
        }
        document.getElementById("ErrorDiv").innerHTML=" ";
        
        document.getElementById("Resuslt").innerHTML=`The Largest Number is ${Largest}`;
    }                              
    else{
        document.getElementById("Resuslt").innerHTML=" ";
        document.getElementById("ErrorDiv").innerText="Invalid Input";
        document.getElementById("ErrorDiv").style.color='red';
    }

})