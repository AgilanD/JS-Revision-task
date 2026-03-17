const btn=document.getElementById("Start");

btn.addEventListener('click',()=>{

    const input=document.getElementById("Input");
    for(let i=parseInt(input.value);i>=0;i--){
 console.log(i);
          let y=document.getElementById("Result").innerHTML+=`<p>${i}</p>`;
    }

})