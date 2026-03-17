function demo(){

    if(localStorage.getItem("Visitor")){
        let count=parseInt(localStorage.getItem("Visitor"));
        count++;
        localStorage.setItem("Visitor",count);
        alert(`Cookies Added : Visitor=${count}`);
    }
    else{
        localStorage.setItem("Visitor",1);
        alert(`Cookies Added : Visitor=1`);
    }

}