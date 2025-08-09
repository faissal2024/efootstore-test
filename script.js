const toggleBtn = document.getElementById('toggle-menu');
const mobileMenu = document.getElementById('mobile-menu');

toggleBtn.addEventListener('click', () => {
  const expanded = toggleBtn.getAttribute('aria-expanded') === 'true' || false;
  toggleBtn.setAttribute('aria-expanded', !expanded);
  toggleBtn.classList.toggle('open');
  mobileMenu.classList.toggle('active');
});

// إغلاق القائمة عند الضغط في أي مكان خارجها
mobileMenu.addEventListener('click', (e) => {
  if (e.target === mobileMenu) {
    toggleBtn.classList.remove('open');
    toggleBtn.setAttribute('aria-expanded', false);
    mobileMenu.classList.remove('active');
  }
});


 function showPopup(imgSrc) {
  document.getElementById("popup-img").src = imgSrc;
  document.getElementById("img-popup").style.display = "flex";
}

function hidePopup() {
  document.getElementById("img-popup").style.display = "none";
}



