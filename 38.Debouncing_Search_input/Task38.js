const inputs=document.getElementById("Box");

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
        console.log(query);
        document.getElementById("Result").innerHTML=query;
    }

    let deal=demo(debounce,500);

    deal(inputs.value);

})