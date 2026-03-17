const btn=document.getElementById("SubmitButton");

btn.addEventListener('click',()=>{
     
   const input=document.getElementById("input");
    const regex = /^[A-Za-z ]+$/;
    const arr=input.value;
    let y=false;
    if(regex.test(input.value)){
        document.getElementById("ErrorDiv").innerHTML=" ";
        for(let i=0;i<arr.length;i++){
           if(arr.charAt(i)==arr.charAt(arr.length-1-i)){

           }
           else{
             y=true;
             break;
           }
        }
        if(y){
            document.getElementById("Resuslt").innerHTML=`The Given String is Not a Palindrome`;                                         
        }
        else{
            document.getElementById("Resuslt").innerHTML=`The Given String is Palindrome`;
        }
    }
    else {
        document.getElementById("Resuslt").innerHTML=" ";
        document.getElementById("ErrorDiv").innerText="Invalid Input";
        document.getElementById("ErrorDiv").style.color='red';
    }

})