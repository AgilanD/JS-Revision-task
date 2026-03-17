
function demo(){
    const params = new URLSearchParams("https://www.mitrahsoft.com/?technology=coldfusion&people=veryNice");
    const tech=params.get("technology");
    const people=params.get("people");
    document.getElementById("Result").innerHTML=`<p>Technology: Coldfusion</p> <p>People: ${people}</p>`;
}