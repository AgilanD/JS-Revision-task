const btn=document.getElementById("SubmitButton");

function isLetter(ch) {
    if (typeof ch !== 'string' || ch.length !== 1) {
        return false;
    }
    return /^[A-Za-z]$/.test(ch);
}

btn.addEventListener('click',()=>{
     
    const input=document.getElementById("input");
    const regex = /^[A-Za-z ]+$/;
    const arr=input.value;
    let char=0;
    if(regex.test(input.value)){
     
        for(let i=0;i<arr.length;i++){
           if(isLetter(arr.charAt(i))){
                 char++;
           }
        }
        document.getElementById("ErrorDiv").innerHTML=" ";
        document.getElementById("Resuslt").innerHTML=`The Total character is ${char}`;
    }                              
    else{
        document.getElementById("Resuslt").innerHTML=" ";
        document.getElementById("ErrorDiv").innerText="Invalid Input";
        document.getElementById("ErrorDiv").style.color='red';
    }

})