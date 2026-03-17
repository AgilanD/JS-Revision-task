const btn=document.getElementById("input");
const btns=document.getElementById("inputs");
const arr=["Man",1,"Hello","WElcome",512]

btns.addEventListener('click',()=>{

    let data=arr.filter((val,cur,arr)=>{
        if(arr[cur]==btn.value){
             return val
        }
    })
    console.log(data);
    if(data){
        document.getElementById("Result").innerHTML="SuccessFull"
    }

    setInterval(()=>{
         document.getElementById("Result").innerHTML=""
    },1000)
})

