const box = document.getElementById('animatedBox');

function toggleVisibility() {
  box.classList.toggle('hidden');
}

function toggleScale() {
  box.classList.toggle('scaled');
}

function moveLeft() {
  box.classList.remove('moved-right');
  box.classList.toggle('moved-left');
}

function moveRight() {
  box.classList.remove('moved-left');
  box.classList.toggle('moved-right');
}

function resetPosition() {
  box.classList.remove('moved-left', 'moved-right', 'scaled');
}
