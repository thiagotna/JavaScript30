const pressedKeys = []
const enableFatality = 'ABACABB'

window.addEventListener('keyup', (e) => {
  pressedKeys.push(e.key)
  pressedKeys.splice(
    -enableFatality.length - 1,
    pressedKeys.length - enableFatality.length,
  )

  const codeMatches = pressedKeys.join('').includes(enableFatality)

  if (codeMatches) {
    alert('OUTSTANDING!')
  }
  console.log(pressedKeys)
})
