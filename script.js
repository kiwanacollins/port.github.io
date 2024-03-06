let text = 'Collins is a frontend developer with a passion for creating beautiful and functional user interfaces.';
let index = 0;

function typeEffect() {
  if (index < text.length) {
    document.getElementById('type-effect').innerHTML += text.charAt(index);
    index++;
    setTimeout(typeEffect, 100); // Adjust the timeout to control the typing speed
  }
}

window.onload = typeEffect;