const btn=document.getElementById("btn");
let count=0;

btn.addEventListener('click',()=>{

   while(count<3){
        count++;

    async function demo(){
         let res= await fetch("https://jsonplaceholder.typicode.com/users");
         if(!res.ok){
            console.log("Error");
         }
         else{
                document.getElementById("Result").innerHTML=`Success in the ${count}`; 
                return false;
         }
    }
    if(count==3){
         document.getElementById("Result").innerHTML=`Error in the ${count}`;
         break;
    }
    let u=demo();
    if(!u){
      break;
    }
    }


})