//js/slide6_tribute.js

// SPARKLE RAIN GENERATION
const container = document.querySelector(".sparkle-container");

for (let i = 0; i < 50; i++) {
    let spark = document.createElement("div");
    spark.classList.add("sparkle");
    spark.innerHTML = "✨";
    spark.style.left = Math.random() * 100 + "vw";
    spark.style.animationDuration = (3 + Math.random() * 4) + "s";
    spark.style.fontSize = (8 + Math.random() * 10) + "px";
    container.appendChild(spark);
}

// Easter Egg
function revealEgg() {
    document.getElementById("easterPopup").classList.remove("hidden");
}

function closeEgg() {
    document.getElementById("easterPopup").classList.add("hidden");
}
