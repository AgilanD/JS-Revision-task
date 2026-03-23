const before_loading = document.getElementById("content-before-loading");
before_loading.style.display = "block";
let c = 0;
function getInformation() {
        for (let i = 0; i <10; i++) {
            const newdiv = document.createElement("div");
            newdiv.className = "sub-block";
            newdiv.innerHTML = `Card ${c}${i}`;
            before_loading.appendChild(newdiv);
        }
        c++;
}

window.addEventListener("scroll", () => {
    if (
        document.documentElement.scrollTop +
        document.documentElement.clientHeight >=
        document.documentElement.scrollHeight
    ) {
        getInformation();
    }
});
getInformation();