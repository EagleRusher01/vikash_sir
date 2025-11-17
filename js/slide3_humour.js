//js/slide3_humour.js

function revealMore() {
    const joke = document.getElementById("hiddenJoke");
    joke.classList.remove("hidden");
    joke.style.opacity = "1";
    joke.style.pointerEvents = "all";
    joke.style.transform = "scale(1)";
}

function showInsideJoke() {
    document.getElementById("insideJokePopup").style.display = "flex";
}

function closePopup() {
    document.getElementById("insideJokePopup").style.display = "none";
}
