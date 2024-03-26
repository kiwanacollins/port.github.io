let observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('heartbeat');
    } else {
      entry.target.classList.remove('heartbeat');
    }
  });
});

observer.observe(document.querySelector('.code-container'));