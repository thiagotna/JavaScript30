const inboxItems = document.querySelectorAll(
  '.inbox .item input[type="checkbox"]',
)
let lastChecked = null

function handleCheck(e) {
  let inBetween = false

  if (e.shiftKey && e.target.checked) {
    inboxItems.forEach((checkbox) => {
      if (checkbox === e.target || checkbox === lastChecked) {
        inBetween = !inBetween
      }

      if (inBetween) {
        checkbox.checked = true
      }
    })
  }

  lastChecked = e.target
}

inboxItems.forEach((checkbox) => {
  checkbox.addEventListener('click', handleCheck)
})
