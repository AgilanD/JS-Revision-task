const btn=document.getElementById("SubmitButton");

btn.addEventListener('click',()=>{
     
   const input=document.getElementById("input");
    const regex = /^[A-Za-z ]+$/;
    if(regex.test(input.value)){
        document.getElementById("ErrorDiv").innerHTML=" ";
        const arr=input.value.split(" ");
        let Largest=arr[0];
        let Smallest=arr[0];
        for(let i=0;i<arr.length;i++){
             if(Largest.length<arr[i].length){
                 Largest=arr[i];
             }
             if(Smallest.length>arr[i].length){
                Smallest=arr[i];
             }
        }
        document.getElementById("Resuslt").innerHTML=`<p>The Largest Word is ${Largest}</p> <p>The Smallest Word is ${Smallest} </p>`;
                                                     
    }
    else{
        document.getElementById("Resuslt").innerHTML=" ";
        document.getElementById("ErrorDiv").innerText="Invalid Input";
        document.getElementById("ErrorDiv").style.color='red';
    }

})