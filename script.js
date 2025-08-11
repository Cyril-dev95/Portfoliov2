const sidenav = document.getElementById("mySidenav");
const openBtn = document.getElementById("openBtn");
const closeBtn = document.getElementById("closeBtn");

openBtn.onclick = openNav;
closeBtn.onclick = closeNav;

function openNav() {
    document.querySelector(".sidenav").style.left = "0"; // Ouvre la sidenav
    document.body.classList.add("sidenav-open"); // Ajoute une classe au body
    openBtn.style.display = "none"; // Masque le bouton burger
}

function closeNav() {
    document.querySelector(".sidenav").style.left = "-250px"; // Ferme la sidenav
    document.body.classList.remove("sidenav-open"); // Supprime la classe du body

    // Ajoute un délai légèrement réduit avant de réafficher le bouton burger
    setTimeout(() => {
        openBtn.style.display = "block"; // Réaffiche le bouton burger après la transition
    }, 350); // Délai ajusté pour apparaître un peu plus tôt
}

document.addEventListener("DOMContentLoaded", () => {
    const sidenav = document.getElementById("mySidenav");
    const openBtn = document.getElementById("openBtn");
    const closeBtn = document.getElementById("closeBtn");
    const sidenavLinks = document.querySelectorAll(".sidenav a");

    // Ouvre la sidenav
    openBtn.addEventListener("click", (event) => {
        event.preventDefault(); // Empêche le comportement par défaut
        sidenav.classList.add("active");
    });

    // Ferme la sidenav
    closeBtn.addEventListener("click", (event) => {
        event.preventDefault(); // Empêche le comportement par défaut
        sidenav.classList.remove("active");
    });

    // Ferme la sidenav lorsqu'un lien est cliqué
    sidenavLinks.forEach(link => {
        link.addEventListener("click", () => {
            sidenav.classList.remove("active");
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
  const items = document.querySelectorAll('.timeline-container');
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }
      });
    },
    { threshold: 0.2 }
  );
  items.forEach(item => observer.observe(item));

  // Ligne verticale animée au scroll
  const timeline = document.querySelector('.timeline');
  const timelineLineDiv = document.querySelector('.timeline-line');

  function updateLineHeight() {
    const rect = timeline.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    let progress = 0;
    if (rect.top < windowHeight && rect.bottom > 0) {
      progress = Math.min(1, (windowHeight - rect.top) / rect.height);
    }
    timelineLineDiv.style.height = Math.max(0, progress * rect.height) + 'px';
  }

  window.addEventListener('scroll', updateLineHeight);
  window.addEventListener('resize', updateLineHeight);

  // Initialisation
  updateLineHeight();


  // Carousel

    let itemsCarousel = document.querySelectorAll('.slider .item');
    let next = document.getElementById('next');
    let prev = document.getElementById('prev');

    let active = 1; // Commence sur le projet du milieu

    function loadShow() {
      let stt = 0;

      itemsCarousel.forEach(item => {
        item.style.opacity = 0;
        item.style.zIndex = 0;
        item.style.filter = 'blur(2px)';
        item.style.transform = 'scale(0.8)';
      });

      itemsCarousel[active].style.transform = `none`;
      itemsCarousel[active].style.zIndex = 1;
      itemsCarousel[active].style.filter = 'none';
      itemsCarousel[active].style.opacity = 1;

      stt = 0;
      for (var i = active + 1; i < itemsCarousel.length; i++) {
        stt++;
        itemsCarousel[i].style.transform = `translateX(${120 * stt}px) scale(${1 - 0.2 * stt}) perspective(16px) rotateY(-1deg)`;
        itemsCarousel[i].style.zIndex = -stt;
        itemsCarousel[i].style.opacity = stt > 2 ? 0 : 0.6;
      }

      stt = 0;
      for (var i = active - 1; i >= 0; i--) {
        stt++;
        itemsCarousel[i].style.transform = `translateX(${-120 * stt}px) scale(${1 - 0.2 * stt}) perspective(16px) rotateY(1deg)`;
        itemsCarousel[i].style.zIndex = -stt;
        itemsCarousel[i].style.opacity = stt > 2 ? 0 : 0.6;
      }
    }

    loadShow();

    next.onclick = function () {
      active = active + 1 < itemsCarousel.length ? active + 1 : active;
      loadShow();
    };

    prev.onclick = function () {
      active = active - 1 >= 0 ? active - 1 : active;
      loadShow();
    };
  });
