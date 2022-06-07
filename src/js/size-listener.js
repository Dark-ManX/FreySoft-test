const size = document.querySelector('.container');
const DESKTOP_SIZE = 1440;
window.addEventListener('resize', onResize());

console.dir(size.style);
function onResize(e) {
  document.documentElement.clientWidth > DESKTOP_SIZE ? console.log('yes') : console.log('no');
  console.dir(document.documentElement.clientWidth);
}
