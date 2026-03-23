const btn=document.getElementById("inputs");


btn.addEventListener('click',()=>{
      const input=document.getElementById("input");
      if(input.type==="password")
           input.type="text";
      else
           input.type="password";
})

