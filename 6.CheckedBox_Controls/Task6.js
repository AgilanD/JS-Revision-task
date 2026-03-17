const op1=document.getElementById("option1");
const op2=document.getElementById("option2");
const op3=document.getElementById("option3");
const op4=document.getElementById("option4");
const op5=document.getElementById("option5");
const arr=[op1,op2,op3,op4,op5];

document.getElementById("checkall").addEventListener('click',()=>{
    
   for(let i=0;i<arr.length;i++){
        arr[i].checked=true;
    }

});

document.getElementById("Uncheckall").addEventListener('click',()=>{
    for(let i=0;i<arr.length;i++){
        arr[i].checked=false;
    }
});

document.getElementById("Toggle").addEventListener('click',()=>{

   for(let i=0;i<arr.length;i++){
       if(arr[i].checked){
        arr[i].checked=false;
       }
       else{
        arr[i].checked=true;
       }
   }
});