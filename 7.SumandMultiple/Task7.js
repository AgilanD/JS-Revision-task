const btn=document.getElementById("SubmitButton1");
const btn1=document.getElementById("SubmitButton2");

btn.addEventListener('click',()=>{
     
   const input=document.getElementById("input");
    const regex = /^[\d,]+$/;
    if(regex.test(input.value)){
        const arr=input.value.split(",");
        let Largest=0;
        for(let i=0;i<arr.length;i++){
              Largest+=parseInt(arr[i]);
        }
        document.getElementById("ErrorDiv").innerHTML=" ";
        
        document.getElementById("Resuslt").innerHTML=`The Sum is ${Largest}`;
    }                              
    else{
        document.getElementById("Resuslt").innerHTML=" ";
        document.getElementById("ErrorDiv").innerText="Invalid Input";
        document.getElementById("ErrorDiv").style.color='red';
    }

})

btn1.addEventListener('click',()=>{
     
   const input=document.getElementById("input");
    const regex = /^[\d,]+$/;
    if(regex.test(input.value)){
        const arr=input.value.split(",");
        let Largest=1;
        for(let i=0;i<arr.length;i++){
              Largest*=parseInt(arr[i]);
        }
        document.getElementById("ErrorDiv").innerHTML=" ";
        
        document.getElementById("Resuslt").innerHTML=`The Product is ${Largest}`;
    }                              
    else{
        document.getElementById("Resuslt").innerHTML=" ";
        document.getElementById("ErrorDiv").innerText="Invalid Input";
        document.getElementById("ErrorDiv").style.color='red';
    }

})