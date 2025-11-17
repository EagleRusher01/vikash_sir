//js/slide4_messages.js

let unlocked = { m1: false, m2: false };

const msg1Btn = document.getElementById("msg1Btn");
const msg2Btn = document.getElementById("msg2Btn");
const finalBtn = document.getElementById("finalBtn");

const msg1Card = document.getElementById("msg1Card");
const msg2Card = document.getElementById("msg2Card");
const finalBlast = document.getElementById("finalBlast");

const step1 = document.getElementById("step1");
const step2 = document.getElementById("step2");
const step3 = document.getElementById("step3");

/* UNLOCK MESSAGE 1 */
msg1Btn.addEventListener("click", () => {
    msg1Card.classList.remove("hidden");
    unlocked.m1 = true;
    step1.classList.add("active");
    msg1Btn.style.opacity = "0.5";
    checkUnlock();
});

/* UNLOCK MESSAGE 2 */
msg2Btn.addEventListener("click", () => {
    msg2Card.classList.remove("hidden");
    unlocked.m2 = true;
    step2.classList.add("active");
    msg2Btn.style.opacity = "0.5";
    checkUnlock();
});

/* CHECK FINAL UNLOCK */
function checkUnlock() {
    if (unlocked.m1 && unlocked.m2) {
        finalBtn.disabled = false;
        finalBtn.classList.remove("locked");
        step3.classList.add("active");
    }
}

/* FINAL BLAST */
finalBtn.addEventListener("click", () => {
    finalBlast.classList.remove("hidden");
    startConfetti();
});

/* Inside Joke */
function showJoke() {
    document.getElementById("jokePopup").classList.remove("hidden");
}
function closeJoke() {
    document.getElementById("jokePopup").classList.add("hidden");
}

/* Confetti */
function startConfetti() {
    const canvas = document.getElementById("confettiCanvas");
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let confetti = [];

    for (let i = 0; i < 200; i++) {
        confetti.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height - canvas.height,
            size: Math.random() * 6 + 2,
            speed: Math.random() * 3 + 2,
            color: ["#ffd166", "#0ea5e9", "#fff"][Math.floor(Math.random()*3)]
        });
    }

    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        confetti.forEach(c => {
            ctx.fillStyle = c.color;
            ctx.fillRect(c.x, c.y, c.size, c.size);
            c.y += c.speed;

            if (c.y > canvas.height) {
                c.y = -10;
            }
        });

        requestAnimationFrame(draw);
    }

    draw();
}
