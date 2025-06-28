onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");
    clearTimeout(c);
  }, 1000);
};

function toggleNotePopup() {
  const overlay = document.getElementById('noteOverlay');
  const popup = document.getElementById('notePopup');

  if (overlay.classList.contains('hidden')) {
    overlay.classList.remove('hidden');
    popup.style.animation = 'popupIn 0.3s ease forwards';
  } else {
    popup.style.animation = 'popupOut 0.2s ease forwards';
    setTimeout(() => {
      overlay.classList.add('hidden');
    }, 200);
  }
}

window.addEventListener("DOMContentLoaded", () => {
  const audio = document.getElementById('bgMusic');

  // 1. Coba play langsung (kalau browser ngizinin)
  if (audio && audio.paused) {
    audio.play().catch(e => {
      console.log("Autoplay blocked, will wait for click");
    });
  }

  // 2. Tapi juga pasang fallback: play pas user klik pertama kali
  window.addEventListener('click', () => {
    if (audio && audio.paused) {
      audio.play().catch(e => console.log("Play on click blocked:", e));
    }
  }, { once: true });

  setTimeout(() => {
    document.getElementById("welcomeScreen").classList.add("hide");
    document.body.classList.remove("not-loaded");
  }, 3500);
});

setTimeout(() => {
  document.querySelector('.welcome-screen').style.opacity = '0';

  setTimeout(() => {
    document.querySelector('.welcome-screen').style.display = 'none';
    document.body.classList.remove('no-scroll');
  }, 1000);
}, 3000);
