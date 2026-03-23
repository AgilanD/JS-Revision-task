const btn=document.getElementById("Start");

btn.addEventListener('click',()=>{

    const input=document.getElementById("Input");
    if(input.value>0){
    document.getElementById("Result").innerHTML="Output:-";
    for(let i=parseInt(input.value);i>=0;i--){
          document.getElementById("Result").innerHTML+=`<p>${i}</p>`;
    }
    }
    else{
          document.getElementById("Result").innerHTML="Please Enter the Positive Number Greater than 0";
    }

})