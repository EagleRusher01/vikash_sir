//js/slide2_gallery.js

function showMemories() {
    const section = document.getElementById("memories");
    section.style.opacity = "1";
    section.style.pointerEvents = "all";

    // small pop animation
    section.style.transform = "scale(1.02)";
    setTimeout(() => {
        section.style.transform = "scale(1)";
    }, 300);
}
