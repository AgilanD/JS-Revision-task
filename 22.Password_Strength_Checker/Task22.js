const data= document.getElementById("inputs");

function containsSpecialChar(str) {
    if (typeof str !== "string") {
        return false;
    }
    return /[^A-Za-z0-9]/.test(str);
}

function hasLowercase(str) {
    if (typeof str !== 'string') {
        return false;
    }
    return /[a-z]/.test(str);
}

function hasUppercase(str) {
    if (typeof str !== 'string') {
        return false;
    }
    return /[A-Z]/.test(str);
}

data.addEventListener('input',()=>{
    const count=data.value;
    let minchar=false;
    let Upper=false;
    let lower=false;
    let Num=false;
    let Special=false;

    if("1234567890".includes(count)){
        Num=true;
        if(count.length>=8){
          minchar=true;
    }
    }
    if(containsSpecialChar(count)){
        Special=true;
        if(count.length>=8){
         minchar=true;
    }
    }
    if(hasLowercase(count)){
        lower=true;
        if(count.length>=8){
         minchar=true;
    }
    }
    if(hasUppercase(count)){
        Upper=true;
        if(count.length>=8){
         minchar=true;
        }
    }
    const detail=minchar+Upper+lower+Num+Special;
    console.log(detail)
    if(detail==4){
        if(count.length>=8){
         minchar=true;
        }
        document.getElementById("Result").innerText="Strong";
        document.getElementById("Result").style.color="Blue";
    }
    else if(detail>2){
        document.getElementById("Result").innerText="Medium";
        document.getElementById("Result").style.color="Brown";
    }
    else{
         document.getElementById("Result").innerText="Weak";
         document.getElementById("Result").style.color="red";
    }
})
