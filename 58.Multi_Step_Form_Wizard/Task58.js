const BasicDetails=document.getElementById("PersonalInfo");
const Address=document.getElementById("Address");
const Review=document.getElementById("Review");
const PersonalInfoNext=document.getElementById("PersonalInfoNext");
const Addressprevious=document.getElementById("AddressPrevious");
const AddressNext=document.getElementById("AddressNext");
const Reviewprevious=document.getElementById("ReviewPrevious");
BasicDetails.style.display="block";


PersonalInfoNext.addEventListener('click',()=>{
    const regex = /^[a-z ]+$/;
    const inputS=document.getElementById("Name").value;
     document.getElementById("ErrorDiv").innerText=" ";
    if(regex.test(inputS)){
        BasicDetails.style.display="none";
        Address.style.display="block";
    }
    else{
        document.getElementById("ErrorDiv").style.display="block";
        document.getElementById("ErrorDiv").innerText="Pls Enter the Valid Name";
        document.getElementById("ErrorDiv").style.color="Red";
    }
})

Addressprevious.addEventListener('click',(e)=>{
   e.preventDefault();
    BasicDetails.style.display="block";
    Address.style.display="none";
})

AddressNext.addEventListener('click',()=>{
    Address.style.display="none";
    Review.style.display="block";
})


Reviewprevious.addEventListener('click',(e)=>{
   e.preventDefault();
    Address.style.display="block";
    Review.style.display="none";
})
