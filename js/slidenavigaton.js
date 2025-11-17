//js/slidenavigation.js

function goTo(slideId){
    document.querySelectorAll("section").forEach(sec => sec.classList.add("hidden"));
    document.getElementById(slideId).classList.remove("hidden");
}

window.goTo = goTo; // allow in HTML
