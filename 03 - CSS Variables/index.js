//ELEMENTS
const root = document.querySelector(':root') //return <html> element
const cssProperties = getComputedStyle(root)
const inputControls = document.querySelectorAll('.controls input')
const spaceInput = document.getElementById('spacing') // returns <input id="spacing" />
const blurInput = document.getElementById('blur') // returns <input id="blur" />
const colorBaseInput = document.getElementById('base') //returns <input id="base" />

const handleEvent = (e) => {
  const elId = e.target.id
  const cssPropertyInitialValue = cssProperties.getPropertyValue(`--${elId}`)
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
