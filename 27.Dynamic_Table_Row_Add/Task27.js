const btn=document.getElementById('Addetails');

btn.addEventListener('click',()=>{
    const name=document.getElementById("Name").value;
    const age=document.getElementById("Age").value;
    const TABLE =document.getElementById("Details");

    const tr=document.createElement("tr");
    const td=document.createElement('td');
    const td1=document.createElement('td');
    td.innerText=(name);
    td1.innerText=(age);

    tr.appendChild(td);
    tr.appendChild(td1);
    TABLE.appendChild(tr);

})