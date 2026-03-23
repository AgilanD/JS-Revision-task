function formatCustomDateTime(date) {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();

    let hours = date.getHours();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; 
    const minutes = date.getMinutes();


    const formattedDay = day < 10 ? '0' + day : day;
    const formattedHours = hours < 10 ? '0' + hours : hours;
    const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;

    return `${formattedDay} ${month} ${year} ${formattedHours}:${formattedMinutes} ${ampm}`;
}

const demo= document.getElementById("result");

function run(){
    const now = new Date(); 
    const formattedDateTime = formatCustomDateTime(now);
    demo.style.display="block";
    demo.innerHTML=" ";
    demo.innerHTML=formattedDateTime;
    console.log(formattedDateTime);

}
