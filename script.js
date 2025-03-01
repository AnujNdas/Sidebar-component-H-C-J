document.getElementById("toggle-btn").addEventListener("click", function () {
    let sidebar = document.getElementById("sidebar");
    let toggleIcon = document.getElementById("toggle-icon");
    let companyName = document.getElementById("company-name");
    sidebar.classList.toggle("collapsed");
    toggleIcon.classList.toggle("rotated");
    companyName.style.display = sidebar.classList.contains("collapsed") ? "none" : "block";
});