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

/* ============================
   MUSIC PLAY ON ANY CLICK
   ============================ */
let musicStarted = false;

function enableMusic() {
    if (musicStarted) return;
    musicStarted = true;

    const audio = document.getElementById("chime");
    audio.volume = 0.6;

    audio.play().catch(err => {
        console.log("Music blocked, retrying on next click...");
    });
}

// run on first click anywhere on page
document.addEventListener("click", enableMusic);
