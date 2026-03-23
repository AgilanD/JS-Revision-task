const btn=document.getElementById("SubmitButton");

btn.addEventListener('click',()=>{
    //  console.log("Hii")
    const input=document.getElementById("input");
    console.log(input.value);
    const input1=document.getElementById("input1");
    console.log(input1.value);
    const regex = /^[\d,]+$/;
    if(regex.test(input.value)&&regex.test(input1.value)&&(parseInt(input.value))<parseInt(input1.value)){
    
          
        document.getElementById("ErrorDiv").innerHTML=" ";
        document.getElementById("Resuslt").innerHTML=`Random Number From Range is ${Math.floor(Math.random() * (parseInt(input.value) - parseInt(input1.value)+1)) +parseInt(input1.value)}`;
    }                              
    else{
        document.getElementById("Resuslt").innerHTML=" ";
        document.getElementById("ErrorDiv").innerText="Invalid Input";
        document.getElementById("ErrorDiv").style.color='red';
    }

})