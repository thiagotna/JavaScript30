const divs = document.querySelectorAll('div')

const logText = (e) => {
  console.log(e.currentTarget.classList.value)
  // e.stopPropagation() // stop bubling
}

divs.forEach((div) =>
  div.addEventListener('click', logText, {
    capture: true,
    once: true,
  }),
)
