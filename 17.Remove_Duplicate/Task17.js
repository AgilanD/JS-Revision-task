const btn=document.getElementById("SubmitButton");

btn.addEventListener('click',()=>{
     
   const input=document.getElementById("input");
    const regex = /^[\d,]+$/;
    const arr=input.value.split(",");
    let n=[];
    if(regex.test(input.value)){
     
        arr.filter((cur,val,arr)=>{

            if(!n.includes(cur)){  
                n.push(cur)
            }  
            else{
                console.log(val);
                return cur;
            }

        })
        document.getElementById("ErrorDiv").innerHTML=" ";
        document.getElementById("Resuslt").innerHTML=`The Unique Array is ${n}`;
    }                              
    else{
        document.getElementById("Resuslt").innerHTML=" ";
        document.getElementById("ErrorDiv").innerText="Invalid Input";
        document.getElementById("ErrorDiv").style.color='red';
    }

})