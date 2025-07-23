const nav = document.getElementById('main')
const logo = document.querySelector('.logo')
const navOffsetTop = nav.offsetTop

const makeNavSticky = () => {
  if (window.scrollY >= navOffsetTop) {
    document.body.classList.add('fixed-nav')
  } else {
    document.body.classList.remove('fixed-nav')
  }
}

window.addEventListener('scroll', makeNavSticky)
