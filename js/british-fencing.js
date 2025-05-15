// Hide/show top bar on scroll
let lastScrollTop = 0;
const topBar = document.getElementById('topBar');

window.addEventListener('scroll', function () {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  
  if (scrollTop > lastScrollTop) {
    // Scrolling down
    topBar.style.top = "-70px";
  } else {
    // Scrolling up
    topBar.style.top = "0";
  }
  
  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});
