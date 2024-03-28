document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// scroll effect
const container = document.querySelector('.scroll-container');
let scrollPos = 0;

setInterval(() => {
  if (scrollPos >= container.scrollWidth - container.clientWidth) {
    scrollPos = 0;
  } else {
    scrollPos += 1;
  }
  container.scrollLeft = scrollPos;
}, 20); // Adjust this value to change the speed of the scroll