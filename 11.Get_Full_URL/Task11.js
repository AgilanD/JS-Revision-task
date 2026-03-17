const btn=document.getElementById("btn");
 

btn.addEventListener('click',()=>{

    const att=document.getElementById("Att");
    att.href=window.location.href;
    att.target="_blank";
    document.getElementById("Result").innerHTML=`<p>${window.location.href}</p>`;

})