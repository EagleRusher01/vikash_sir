//js/slide5_finance_theme.js

// AUDIO PLAY ON FIRST CLICK ANYWHERE
const chime = document.getElementById("chime");

document.addEventListener("click", () => {
    chime.currentTime = 0;   // Always start from beginning
    chime.play().catch(() => {});
}, { once: true });  // Only first click triggers audio permission unlock



// INFINITY POPUP
document.getElementById("infinity").addEventListener("click", () => {
    document.getElementById("infinityPopup").classList.remove("hidden");
});

function closeInfinity() {
    document.getElementById("infinityPopup").classList.add("hidden");
}
