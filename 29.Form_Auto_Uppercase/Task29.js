document.getElementById("hii").addEventListener("submit",(e)=>{
   e.preventDefault();
   const value=document.getElementById("name").value;
   const value1=document.getElementById("email").value;
   document.getElementById("name").value=value.toUpperCase();
   document.getElementById("email").value=value1.toUpperCase();
});