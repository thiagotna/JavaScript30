const h1 = document.querySelector('.hero h1')

const initH1JSStyles = () => {
  h1.style.textShadow = '10px 10px 0 rgba(0, 0, 0, 1)'
}

document.addEventListener('DOMContentLoaded', initH1JSStyles)
document.addEventListener('mousemove', (e) => {
  const h1Rect = h1.getBoundingClientRect()
  const mouseX = e.clientX
  const mouseY = e.clientY
  const h1CenterX = h1Rect.left - h1Rect.width / 2
  const h1CenterY = h1Rect.top - h1Rect.height / 2
  const offsetX = (mouseX - h1CenterX) / 10
  const offsetY = (mouseY - h1CenterY) / 10

  h1.style.textShadow = `
    ${offsetX}px ${offsetY}px 0 rgba(0, 0, 0, 1),
    ${offsetX * -1}px ${offsetY}px 0 rgba(255, 0, 0, 1),
    ${offsetX * -1}px ${offsetY * -1}px 0 rgba(0, 255, 0, 1),
    ${offsetX}px ${offsetY * -1}px 0 rgba(0, 0, 255, 1)
  `
})
