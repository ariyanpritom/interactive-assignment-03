const levelOne = document.querySelector('.level-one');
const overlay = document.querySelector('.overlay');
const overlayTwo = document.querySelector('.overlay-two');
const close = document.querySelector('.close-level');
const closeTwo = document.querySelector('.close-power');
const powerOne = document.querySelector('.power-one');
const menuOn = document.querySelector('.menu-on');

/* Level One */
const menuOne = document.querySelector('.menu-catch-one');
menuOne.addEventListener('click', function () {
  levelOne.classList.add('show');
  overlay.classList.add('show');
  levelOne.classList.remove('hidden');
  overlay.classList.remove('hidden');
});

close.addEventListener('click', function () {
  levelOne.classList.add('hidden');
  overlay.classList.add('hidden');
  levelOne.classList.remove('show');
  overlay.classList.remove('show');
});
overlay.addEventListener('click', function () {
  levelOne.classList.add('hidden');
  overlay.classList.add('hidden');
  levelOne.classList.remove('show');
  overlay.classList.remove('show');
});

/* Power One */
menuOn.addEventListener('click', function () {
  powerOne.classList.add('show');
  overlayTwo.classList.add('show');
  powerOne.classList.remove('hidden');
  overlayTwo.classList.remove('hidden');
});

closeTwo.addEventListener('click', function () {
  powerOne.classList.add('hidden');
  overlayTwo.classList.add('hidden');
  powerOne.classList.remove('show');
  overlayTwo.classList.remove('show');
});
overlayTwo.addEventListener('click', function () {
  powerOne.classList.add('hidden');
  overlayTwo.classList.add('hidden');
  powerOne.classList.remove('show');
  overlayTwo.classList.remove('show');
});

const powerLink = document.querySelectorAll('.power-link');
for (let i = 0; i < powerLink.length; i++) {
  powerLink[i].addEventListener('click', function () {
    powerOne.classList.add('hidden');
    overlayTwo.classList.add('hidden');
    powerOne.classList.remove('show');
    overlayTwo.classList.remove('show');
  });
}
