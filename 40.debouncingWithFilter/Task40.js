const inputs=document.getElementById("Box");
const arr=["Afghanistan", "Albania", "Algeria", "Andorra", "Angola","Argentina", "Armenia", "Australia", "Austria", "Azerbaijan","India","Indonasia","Italy"];

inputs.addEventListener('change',()=>{

    function demo(callback,delay){
       let timer=0;
       return function (...args){
         clearTimeout(timer);
         timer=setTimeout(()=>{
                callback.apply(this,args)
         },delay)
       }
    }
     function debounce(query){

        let newArr=arr.filter((element)=>{
             if(element.toUpperCase().startsWith((query.toUpperCase()))){   
                 return element
             }                   
        })
        console.log(newArr);
        document.getElementById("Result").innerHTML=" ";
        newArr.forEach((element)=>{
            document.getElementById("Result").innerHTML+=`<p> Suggestion => ${element}</p>`;
        })

        if(newArr.length<1){
            document.getElementById("Result").innerHTML+=`No Country Suggested`;
        }
     }

    let deal=demo(debounce,500);
    deal(inputs.value);

})