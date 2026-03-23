const items = Array.from({ length: 50 }, (_, i) => `Item ${i + 1}`);
const itemsPerPage = 10;
let currentPage = 1;

function displayPage(page) {
        const start = (page - 1) * itemsPerPage;
        const end = start + itemsPerPage;
        document.getElementById("data-container").innerHTML =
        items.slice(start, end).map(item => `<p>${item}</p>`).join("");
}

function setupPagination() {
        const totalPages = Math.ceil(items.length / itemsPerPage);
        const pagination = document.getElementById("pagination");
        pagination.innerHTML = "";

        for (let i = 1; i <= totalPages; i++) {
                const btn = document.createElement("a");
                btn.textContent = i;
                btn.classList.toggle("active", i === currentPage);
                btn.addEventListener("click", () => {
                currentPage = i;
                
                displayPage(currentPage);
                setupPagination();
                });
        pagination.appendChild(btn);
        }
}

displayPage(currentPage);
setupPagination();
