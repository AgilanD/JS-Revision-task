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
     async function debounce(query){
        async function demo(){
        const res=await fetch(`https://api.github.com/search/users?q=${query}`);
        if(!res.ok){
           console.log("Error");
        }
        const data= await res.json();

        document.getElementById("Result").innerHTML= " ";
        data.items.forEach(element => {
            document.getElementById("Result").innerHTML+= `<p>UserNames=${element.login}</p>`;
        });
        if(data.length<1){
             document.getElementById("Result").innerHTML+= `There is no user Exists`;
        }
    }
    
    demo().catch(err => document.getElementById("Result").innerHTML=`There is no User Exists`);
    }

    let deal=demo(debounce,500);
    deal(inputs.value);

})