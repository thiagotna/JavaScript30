//ELEMENTS
const root = document.querySelector(':root') //return <html> element
const cssProperties = getComputedStyle(root)
const inputControls = document.querySelectorAll('.controls input')

const handleEvent = (e) => {
  const elId = e.target.id
  let cssPropertyValue =
    elId !== 'base' ? `${e.target.value}px` : e.target.value
  const savedValue = localStorage.getItem(elId)

  root.style.setProperty(`--${elId}`, cssPropertyValue)
  localStorage.setItem(elId, cssPropertyValue)
}

inputControls.forEach((input) => {
  const id = input.id
  const savedValue = localStorage.getItem(id)

  if (savedValue !== null) {
    input.value = savedValue.replace('px', '')
    root.style.setProperty(`--${id}`, savedValue)
  }
})

inputControls.forEach((input) => {
  input.addEventListener('input', handleEvent)
})
