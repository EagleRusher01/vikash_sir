document.addEventListener("DOMContentLoaded", () => {

    const landing = document.getElementById("landing");
    const greeting = document.getElementById("greeting");
    const hunt = document.getElementById("hunt");
    const finalSection = document.getElementById("finalSection");

    const startBtn = document.getElementById("startBtn");
    const beginHuntBtn = document.getElementById("beginHuntBtn");

    const msg1Btn = document.getElementById("msg1Btn");
    const msg2Btn = document.getElementById("msg2Btn");
    const finalBtn = document.getElementById("finalBtn");

    const modal = document.getElementById("modal");
    const modalTitle = document.getElementById("modalTitle");
    const modalMessage = document.getElementById("modalMessage");
    const closeModal = document.getElementById("closeModal");

    let unlocked = { m1: false, m2: false };


    // Start Button
    startBtn.addEventListener("click", () => {
        landing.classList.add("hidden");
        greeting.classList.remove("hidden");
    });


    // Begin Hunt
    beginHuntBtn.addEventListener("click", () => {
        greeting.classList.add("hidden");
        hunt.classList.remove("hidden");
    });


    // Unlock Message 1
    msg1Btn.addEventListener("click", () => {
        unlocked.m1 = true;
        modalTitle.innerText = "Message 1";
        modalMessage.innerHTML = `
            Sir, aapke bina semester incomplete lagta hai.<br>
            You make Finance simple, logical & powerful.<br>
            Thank you for guiding us! 💙
        `;
        modal.classList.remove("hidden");
        msg1Btn.style.background = "#4CAF50";
        checkUnlock();
    });


    // Unlock Message 2
    msg2Btn.addEventListener("click", () => {
        unlocked.m2 = true;
        modalTitle.innerText = "Message 2";
        modalMessage.innerHTML = `
            Flashback to first class:<br>
            Sab dare hue the 😆<br>
            But then we realised —<br>
            You’re the coolest and smartest Finance mentor! 📘💼
        `;
        modal.classList.remove("hidden");
        msg2Btn.style.background = "#4CAF50";
        checkUnlock();
    });


    // Enable Final Button
    function checkUnlock() {
        if (unlocked.m1 && unlocked.m2) {
            finalBtn.disabled = false;
            finalBtn.classList.remove("locked");
        }
    }

    // Final Surprise
    finalBtn.addEventListener("click", () => {
        modalTitle.innerText = "Final Surprise 🎉";
        modalMessage.innerHTML = `
            Happy Birthday Dr. Vikash Varshney!<br><br>
            You are an inspiration — in wisdom, discipline, & humility.<br>
            Thank you for shaping us as students AND individuals.<br><br>
            Wishing you success, joy and prosperity always! 💙🎂💼
        `;
        modal.classList.remove("hidden");

        setTimeout(() => {
            hunt.classList.add("hidden");
            finalSection.classList.remove("hidden");
        }, 2500);
    });


    // Close Modal
    closeModal.addEventListener("click", () => {
        modal.classList.add("hidden");
    });

});
