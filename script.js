  const hamburgerInput = document.querySelector('.hamburger input[type="checkbox"]');
  const navbarCollapse = document.getElementById('navbarNav');

  hamburgerInput.addEventListener('change', () => {
    if (hamburgerInput.checked) {
      navbarCollapse.classList.add('show');
    } else {
      navbarCollapse.classList.remove('show');
    }
  });



const checkbox = document.querySelector('.hamburger input[type="checkbox"]');
const navMenu = document.getElementById('navbarNav');

// إظهار وإخفاء القائمة عند تغيير حالة checkbox
checkbox.addEventListener('change', () => {
  if (checkbox.checked) {
    navMenu.classList.add('show');
  } else {
    navMenu.classList.remove('show');
  }
});

// إغلاق القائمة عند الضغط خارجها
document.addEventListener('click', (e) => {
  if (
    checkbox.checked && 
    !navMenu.contains(e.target) && 
    !checkbox.contains(e.target)
  ) {
    checkbox.checked = false;
    navMenu.classList.remove('show');
  }
});

// إغلاق القائمة عند اختيار رابط داخل القائمة
navMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    checkbox.checked = false;
    navMenu.classList.remove('show');
  });
});


 function showPopup(imgSrc) {
  document.getElementById("popup-img").src = imgSrc;
  document.getElementById("img-popup").style.display = "flex";
}

function hidePopup() {
  document.getElementById("img-popup").style.display = "none";
}



