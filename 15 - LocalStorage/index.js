const addItems = document.querySelector('.add-items')
const itemsList = document.querySelector('.plates')
const items = JSON.parse(localStorage.getItem('items')) || []

const addItem = (e) => {
  e.preventDefault()

  const text = e.target.querySelector('[name=item]').value
  const item = { text, done: false }

  items.push(item)
  populateList(items, itemsList)

  const JSONString = JSON.stringify(items)

  localStorage.setItem('items', JSONString)
  e.target.reset()
}
const populateList = (plates = [], platesList) => {
  platesList.innerHTML = plates
    .map((plate, index) => {
      return `
      <li>
        <input type="checkbox" data-index="${index}" id="item-${index}" ${
        plate.done ? 'checked' : ''
      }/>
        <label for="item-${index}">${plate.text}</label>
      </li>
    `
    })
    .join('')
}
const toggleDone = (e) => {
  if (!e.target.matches('input')) return

  const el = e.target
  const index = el.dataset.index
  items[index].done = !items[index].done

  console.log(items[index].done)

  localStorage.setItem('items', JSON.stringify(items))
  populateList(items, itemsList)
}

addItems.addEventListener('submit', addItem)
itemsList.addEventListener('click', toggleDone)
populateList(items, itemsList)
