for (const btn of document.querySelectorAll(".expand-btn")) {
    btn.addEventListener("click", () => {
        btn.parentElement.parentElement.nextElementSibling.classList.toggle("expanded");
    });
}
