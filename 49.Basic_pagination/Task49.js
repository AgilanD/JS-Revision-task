const First=document.getElementById("First");
First.style.display="block";
document.getElementById("Page11").style.color="White";
const Second=document.getElementById("Second");
const Third=document.getElementById("Third");

document.getElementById("Page11").addEventListener('click',()=>{
    First.style.display="block";
    Second.style.display="none";
    Third.style.display="none";
    document.getElementById("Page11").style.color="White";
    document.getElementById("Page12").style.color="black";
    document.getElementById("Page13").style.color="black";
});


document.getElementById("Page12").addEventListener('click',()=>{
    First.style.display="none";
    Second.style.display="block";
    Third.style.display="none";
    document.getElementById("Page11").style.color="black";
    document.getElementById("Page12").style.color="white";
    document.getElementById("Page13").style.color="black";
});

document.getElementById("Page13").addEventListener('click',()=>{
    First.style.display="none";
    Second.style.display="none";
    Third.style.display="block";
    document.getElementById("Page11").style.color="black";
    document.getElementById("Page12").style.color="black";
    document.getElementById("Page13").style.color="white";
});


document.getElementById("Page1Next").addEventListener('click',()=>{
    if(First.style.display=="block"){
            First.style.display="none";
            Second.style.display="block";
            document.getElementById("Page12").style.color="White";
            document.getElementById("Page11").style.color="black";
            document.getElementById("Page13").style.color="black";
            Third.style.display="none";
    }
    else if(Second.style.display=="block"){
            First.style.display="none";
            Second.style.display="none";
            Third.style.display="block";
            document.getElementById("Page11").style.color="black";
            document.getElementById("Page12").style.color="black";
            document.getElementById("Page13").style.color="White";
    }
    else{
            First.style.display="none";
            Second.style.display="none";
            Third.style.display="block";
            document.getElementById("Page11").style.color="black";
            document.getElementById("Page12").style.color="black";
            document.getElementById("Page13").style.color="White";
    }
});

document.getElementById("Page1Prev").addEventListener('click',()=>{
    if(First.style.display=="block"){
            First.style.display="block";
            Second.style.display="none";
            Third.style.display="none";
            document.getElementById("Page11").style.color="white";
            document.getElementById("Page12").style.color="black";
            document.getElementById("Page13").style.color="black";
    }
    else if(Second.style.display=="block"){
            First.style.display="block";
            Second.style.display="none";
            Third.style.display="none";
            document.getElementById("Page11").style.color="white";
            document.getElementById("Page12").style.color="black";
            document.getElementById("Page13").style.color="black";
    }
    else{
            First.style.display="none";
            Second.style.display="block";
            Third.style.display="none";
            document.getElementById("Page11").style.color="black";
            document.getElementById("Page12").style.color="white";
            document.getElementById("Page13").style.color="black";
    }
});
