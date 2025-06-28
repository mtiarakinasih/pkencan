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
};

window.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    document.getElementById("welcomeScreen").classList.add("hide");
    document.body.classList.remove("not-loaded");
  }, 3500); // 3.5 detik sebelum masuk ke halaman bunga
});
;

setTimeout(() => {
  document.querySelector('.welcome-screen').style.opacity = '0';
  setTimeout(() => {
    document.querySelector('.welcome-screen').style.display = 'none';
    document.body.classList.remove('no-scroll'); // ✅ aktifkan scroll & layout normal
  }, 1000);
}, 3000);


  