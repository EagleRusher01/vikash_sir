//js/slide5_finance_theme.js

// Infinity Easter Egg
document.getElementById("infinity").addEventListener("click", () => {
    document.getElementById("infinityPopup").classList.remove("hidden");
});

function closeInfinity() {
    document.getElementById("infinityPopup").classList.add("hidden");
}
