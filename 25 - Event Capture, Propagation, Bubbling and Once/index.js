const divs = document.querySelectorAll('div')

const logText = (e) => {
  console.log(e.target.classList.value)
  // e.stopPropagation() // stop bubling
}

divs.forEach((div) =>
  div.addEventListener('click', logText, {
    capture: true,
    once: true,
  }),
)
