const menuListItem = document.querySelectorAll('.cool > li')
const background = document.querySelector('.dropdownBackground')
const nav = document.querySelector('.top')

const mouseEnter = (e) => {
  e.target.classList.add('trigger-enter')
  setTimeout(() => {
    e.target.classList.contains('trigger-enter') &&
      e.target.classList.add('trigger-enter-active')
  }, 150)
  background.classList.add('open')

  const dropdown = e.target.querySelector('.dropdown')
  const dropdownCoords = dropdown.getBoundingClientRect()
  const navCoords = nav.getBoundingClientRect()

  const coords = {
    width: dropdownCoords.width,
    height: dropdownCoords.height,
    left: dropdownCoords.left - navCoords.left,
    top: dropdownCoords.top - navCoords.top,
  }

  background.style.setProperty('width', `${coords.width}px`)
  background.style.setProperty('height', `${coords.height}px`)
  background.style.setProperty(
    'transform',
    `translate(${coords.left}px ,${coords.top}px)`,
  )
}

const mouseLeave = (e) => {
  e.target.classList.remove('trigger-enter', 'trigger-enter-active')
  background.classList.remove('open')
}

menuListItem.forEach((listItem) => {
  listItem.addEventListener('mouseenter', mouseEnter)
  listItem.addEventListener('mouseleave', mouseLeave)
})
