const btn=document.getElementById("SubmitButton1");
const Position=document.getElementById("Position");
const Elements=document.getElementById("Element");

btn.addEventListener('click',()=>{
     
   const input=document.getElementById("input");
    const regex = /^[\d,]+$/;
    if(regex.test(input.value)){
        const arr=input.value.split(",");
        for(let i=0;i<arr.length;i++){
              if(i+1==parseInt(Position.value)){
                arr[i]=(Elements.value);
              }
        }
        document.getElementById("ErrorDiv").innerHTML=" ";
        
        document.getElementById("Resuslt").innerHTML=`The Array is ${arr}`;
    }                              
    else{
        document.getElementById("Resuslt").innerHTML=" ";
        document.getElementById("ErrorDiv").innerText="Invalid Input";
        document.getElementById("ErrorDiv").style.color='red';
    }

})
