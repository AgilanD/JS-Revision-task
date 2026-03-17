const btn=document.getElementById("SubmitButton");

btn.addEventListener('click',()=>{
     
   const input=document.getElementById("input");
    const regex = /^[A-Za-z ]+$/;
    const arr=input.value.split(" ");
    let vowel=0;
    let consonants=0;
    if(regex.test(input.value)){
        document.getElementById("ErrorDiv").innerHTML=" ";
        for(let i=0;i<arr.length;i++){
            for(let j=0;j<arr[i].length;j++){
                if("aeiouAEIOU".includes(arr[i])){
                    vowel++;
                }
                else{
                    consonants++;
                }
            }
        
        }
        document.getElementById("Resuslt").innerHTML=`<p>vowels:${vowel}</p> <p>Consonants:${consonants}</p>`;                                         
        
    }
    else {
        document.getElementById("Resuslt").innerHTML=" ";
        document.getElementById("ErrorDiv").innerText="Invalid Input";
        document.getElementById("ErrorDiv").style.color='red';
    }

})