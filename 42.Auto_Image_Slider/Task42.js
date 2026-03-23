let IMGs1=document.getElementById("img1");
let IMGs2=document.getElementById("img2");
let IMGs3=document.getElementById("img3");
const arr=["https://images.pexels.com/photos/1070534/pexels-photo-1070534.jpeg?cs=srgb&dl=pexels-steve-1070534.jpg&fm=jpg","https://images.pexels.com/photos/210186/pexels-photo-210186.jpeg?cs=srgb&dl=cascade-clouds-cool-wallpaper-210186.jpg&fm=jpg","https://wallpapercave.com/wp/wp2858551.jpg"];
IMGs1.src=arr[0];
IMGs2.src=arr[1];
IMGs3.src=arr[2];
IMGs1.style.display="block";
IMGs1.style.width="500px";
IMGs2.style.width="500px";
IMGs3.style.width="500px";


setInterval(()=>{
     console.log("hii",IMGs2.style.display);
   if(IMGs1.style.display=="block"){
      IMGs1.style.display="none";
      IMGs2.style.display="block";
      IMGs3.style.display="none";
      console.log(2);
   }
   else if(IMGs2.style.display=="block"){
      IMGs1.style.display="none";
      IMGs2.style.display="none";
      IMGs3.style.display="block";
      console.log(3);
   }
   else{
      IMGs1.style.display="block";
      IMGs2.style.display="none";
      IMGs3.style.display="none";
      console.log(1);
   }

},3000);



// document.getElementById("prev").addEventListener('click',()=>{
//    if(IMGs1.style.display=="block"){
   //  IMGs1.style.display="block";
//     IMGs2.style.display="none";
//     IMGs3.style.display="none";
//    }
//     else if(IMGs2.style.display=="block"){
//     IMGs1.style.display="block";
//     IMGs2.style.display="none";
//     IMGs3.style.display="none";
//    }
//     else{
//     IMGs1.style.display="none";
   //  IMGs2.style.display="block";
//     IMGs3.style.display="none";
//    }
// })

// document.getElementById("next").addEventListener('click',()=>{
//    if(IMGs1.style.display=="block"){
//     IMGs1.style.display="none";
//     IMGs2.style.display="block";
//     IMGs3.style.display="none";
//    }
//    else if(IMGs2.style.display=="block"){
//     IMGs1.style.display="none";
//     IMGs2.style.display="none";
   //  IMGs3.style.display="block";
//    }
// })