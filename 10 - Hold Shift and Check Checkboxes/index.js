const inboxItems = document.querySelectorAll(
  '.inbox .item input[type="checkbox"]',
)
let lastChecked = null

function handleCheck(e) {
  let inBetween = false

  if (e.shiftKey && e.currentTarget.checked) {
    inboxItems.forEach((checkbox) => {
      if (checkbox === e.currentTarget || checkbox === lastChecked) {
        inBetween = !inBetween
      }

      if (inBetween) {
        checkbox.checked = true
      }
    })
  }

  lastChecked = e.currentTarget
}

inboxItems.forEach((checkbox) => {
  checkbox.addEventListener('click', handleCheck)
})
