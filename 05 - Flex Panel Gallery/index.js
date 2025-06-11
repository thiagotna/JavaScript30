const panelChildren = document.querySelectorAll('.panel > *')

panelChildren.forEach((child) => {
  child.addEventListener('click', (e) => {
    e.preventDefault()

    const clickedPanel = child.closest('.panel') //Gets the closest parent

    if (!clickedPanel) return

    // Closes all other panels
    document.querySelectorAll('.panel.open').forEach((panel) => {
      if (panel !== clickedPanel) {
        panel.classList.remove('open')
      }
    })

    // Uptades the clicke panel
    clickedPanel.classList.toggle('open')
  })
})
