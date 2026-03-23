const data= document.getElementById("inputs");

data.addEventListener('input',()=>{
    const count=data.value.length;
    if(count<200){
        document.getElementById("Result").innerText=count;
    }
    else{
        document.getElementById("Result").innerText="limit crossed";
        document.getElementById("Result").style.color='red';
    }
})
