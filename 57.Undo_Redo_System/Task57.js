const data=document.getElementById("Search");
const undo=document.getElementById("Undo");
const redo=document.getElementById("Redo");
const arr=[];
const popItems=[];
let undoo=0;
var redoo=0;


data.addEventListener('click',()=>{
   const inputdata=document.getElementById("Box").value;

   if(inputdata.trim()){
     arr.push(inputdata.trim());
     document.getElementById("Result").innerHTML=``
     document.getElementById("Result").innerHTML=`<p>The Original Array => ${arr}</p>`
   }

});

undo.addEventListener('click',()=>{
    undoo++;
    if(arr.length>1){
      popItems.push(arr.pop());
      document.getElementById("Result").innerHTML=` `;
      for(let i=0;i<arr.length;i++){
       document.getElementById("Result").innerHTML+=`<p>The undo Array => ${arr[i]} </p>`
      }   
    }
    else{
       document.getElementById("Result").innerHTML=" "
       document.getElementById("Result").innerHTML=`<p> Nothing to undo </p>`
    }
    // console.log(undoo);
});

redo.addEventListener('click',()=>{

    if(undoo>redoo){

      for(let i=popItems.length-1;i>=0;i--){
        arr.push(popItems[i]);
        popItems.pop();
        break;

      }
      document.getElementById("Result").innerHTML=" "
      document.getElementById("Result").innerHTML=`<p>the Redo Array => ${arr}</p>`
      redoo++;

    }
    else{
      document.getElementById("Result").innerHTML=" "
       document.getElementById("Result").innerHTML=`<p> Nothing to Redo </p>`
    }
    // console.log(redoo);
});