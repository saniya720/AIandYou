// Smooth scroll for nav links
const navLinks = document.querySelectorAll(".nav-links a");
navLinks.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Section reveal on scroll
const sections = document.querySelectorAll(".section");
const revealSection = () => {
  const trigger = window.innerHeight * 0.85;
  sections.forEach((section) => {
    const rect = section.getBoundingClientRect();
    if (rect.top < trigger) {
      section.classList.add("visible");
    }
  });
};
window.addEventListener("scroll", revealSection);
window.addEventListener("load", revealSection);

// Animate cards with staggered delay
const cards = document.querySelectorAll(".card");
cards.forEach((card, i) => {
  card.style.animationDelay = `${0.2 + i * 0.1}s`;
});

// neet content to appear on web page
document.addEventListener("DOMContentLoaded", function () {
  const neetLink = document.getElementById("neet-hover-link");
  const previewBox = document.getElementById("neet-preview");
  let hoverTimeout;

  function showMenu() {
    clearTimeout(hoverTimeout);
    previewBox.style.display = "block";
  }
  function hideMenu() {
    hoverTimeout = setTimeout(() => {
      previewBox.style.display = "none";
    }, 100);
  }

  neetLink.addEventListener("mouseenter", showMenu);
  neetLink.addEventListener("mouseleave", hideMenu);
  previewBox.addEventListener("mouseenter", showMenu);
  previewBox.addEventListener("mouseleave", hideMenu);

  // Hide preview when hovering over JEE or CA
  const jeeLink = document.querySelector('a.nav-link.disabled');
  const caLink = document.querySelectorAll('a.nav-link.disabled')[1];
  if (jeeLink) jeeLink.addEventListener("mouseenter", () => previewBox.style.display = "none");
  if (caLink) caLink.addEventListener("mouseenter", () => previewBox.style.display = "none");
});

document.addEventListener('DOMContentLoaded', function() {
  function setupCardVideo(sectionId, displayId) {
    document.querySelectorAll(`#${sectionId} .card`).forEach(card => {
      card.addEventListener('click', function() {
        const videoId = card.getAttribute('data-video');
        const display = document.getElementById(displayId);
        if (videoId) {
          display.innerHTML = `
            <div class="video-display-inner">
              <iframe
                src="https://www.youtube.com/embed/${videoId}?autoplay=1"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          `;
        } else {
          display.innerHTML = '<p>No video assigned.</p>';
        }
      });
    });
  }

  setupCardVideo('students', 'students-video-display');
  setupCardVideo('teachers', 'teachers-video-display');
  setupCardVideo('school', 'school-video-display');
});

// Sticky Section Navbar show/hide and active link logic
const sectionNavbar = document.querySelector('.section-navbar-sticky');
const sectionNavbarLinks = document.querySelectorAll('.section-navbar-list a');
const stickySections = [
  document.getElementById('students'),
  document.getElementById('teachers'),
  document.getElementById('school'),
  document.getElementById('price')
];

function handleSectionNavbar() {
  let showNavbar = false;
  let activeIndex = -1;
  const scrollY = window.scrollY;
  const offset = 70; // adjust for navbar height

  stickySections.forEach((section, idx) => {
    if (section) {
      const rect = section.getBoundingClientRect();
      const sectionTop = rect.top + window.scrollY - offset;
      const sectionBottom = sectionTop + section.offsetHeight;
      if (scrollY >= sectionTop && scrollY < sectionBottom) {
        showNavbar = true;
        activeIndex = idx;
      }
    }
  });

  sectionNavbar.style.display = showNavbar ? 'block' : 'none';

  sectionNavbarLinks.forEach((link, idx) => {
    if (idx === activeIndex) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

window.addEventListener('scroll', handleSectionNavbar);
window.addEventListener('load', handleSectionNavbar);
