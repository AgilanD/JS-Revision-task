const before_loading = document.getElementById("content-before-loading");
before_loading.style.display = "block";
let c = 0;
function getInformation() {
        for (let i = 0; i < 10; i++) {
            const newdiv = document.createElement("div");
            const n = document.createElement("img");
            n.src="D:\training\Training tasks\image\OIP.jpg";
            n.className = "sub-block";
            // newdiv.innerHTML = n;
            before_loading.appendChild(n);
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