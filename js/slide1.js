// js/slide1.js
// Slide 1 interactions: confetti slight boost, sound, portrait egg, accessibility.

document.addEventListener('DOMContentLoaded', () => {
  const chime = document.getElementById('chime');
  const beginBtn = document.getElementById('beginBtn');
  const muteBtn = document.getElementById('muteBtn');
  const portrait = document.getElementById('portraitCard');
  const eggModal = document.getElementById('eggModal');
  const closeEgg = document.getElementById('closeEgg');

  // Attempt to play chime on first user gesture; play when user clicks start or portrait
  let audioAllowed = false;
  function tryPlay() {
    if(audioAllowed) return;
    chime.volume = 0.9;
    chime.play().catch(()=>{/* autoplay blocked until user gesture */});
    audioAllowed = true;
    muteBtn.setAttribute('aria-pressed', 'false');
  }

  // click start => trigger small celebration
  beginBtn.addEventListener('click', (e) => {
    tryPlay();
    // small extra confetti effect (clone pieces)
    burstConfetti(18);
  });

  // mute/unmute toggle
  let muted = false;
  muteBtn.addEventListener('click', () => {
    muted = !muted;
    if(muted) { chime.pause(); muteBtn.textContent = '🔕'; muteBtn.setAttribute('aria-pressed','true'); }
    else { chime.play().catch(()=>{}); muteBtn.textContent = '🔔'; muteBtn.setAttribute('aria-pressed','false'); }
  });

  // portrait easter egg modal
  portrait.addEventListener('click', openEgg);
  portrait.addEventListener('keypress', (e) => { if(e.key === 'Enter' || e.key === ' ') openEgg(); });

  function openEgg(){
    eggModal.classList.remove('hidden');
    tryPlay();
  }
  closeEgg.addEventListener('click', () => eggModal.classList.add('hidden'));
  eggModal.addEventListener('click', (ev) => { if(ev.target === eggModal) eggModal.classList.add('hidden'); });

  // lightweight confetti burst: clone a few pieces and animate then remove
  function burstConfetti(count=12){
    const wrap = document.querySelector('.confetti-wrap');
    for(let i=0;i<count;i++){
      const el = document.createElement('span');
      el.className = 'confetti';
      // random color
      const colors = ['#ffd166','#ff6b6b','#7bd389','#6ec6ff','#b39ddb'];
      el.style.background = colors[Math.floor(Math.random()*colors.length)];
      el.style.left = (10 + Math.random()*80) + '%';
      el.style.top = (10 + Math.random()*20) + '%';
      el.style.opacity = 0.95;
      el.style.width = (6 + Math.random()*12) + 'px';
      el.style.height = (10 + Math.random()*20) + 'px';
      el.style.transform = `translateY(-20vh) rotate(${Math.random()*360}deg)`;
      el.style.transition = 'transform 1.6s cubic-bezier(.2,.9,.2,1), opacity 1.6s';
      wrap.appendChild(el);

      // animate using requestAnimationFrame
      requestAnimationFrame(()=> {
        el.style.transform = `translateY(110vh) rotate(${360 + Math.random()*720}deg)`;
        el.style.opacity = 0.95;
      });

      // remove after animation
      setTimeout(()=> el.remove(), 2200 + Math.random()*1000);
    }
  }

  // accessibility: allow pressing 'S' to start (for quick dev)
  document.addEventListener('keydown', (e)=>{
    if(e.key.toLowerCase() === 's'){ beginBtn.click(); }
  });

  // initial gentle confetti spawn
  setTimeout(()=> burstConfetti(8), 800);

});
