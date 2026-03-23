document.getElementById("Status").addEventListener('click',()=>{
    
    if(navigator.onLine){
       document.getElementById("Result").innerHTML=``
       document.getElementById("Result").innerHTML=`<p>Online</p>`
       document.getElementById("Result").style.textAlign="center";
       document.getElementById("Result").style.color="orange";

    }
    else{
       document.getElementById("Result").innerHTML=``
       document.getElementById("Result").innerHTML=`<p>Offline</p>`
       document.getElementById("Result").style.textAlign="center";
       document.getElementById("Result").style.color="orange";
    }

})