const endpoint =
  'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json'
const cities = [] //Array for storing data from fetch API call
const input = document.querySelector('.search') // Gets input element
const suggestionsList = document.querySelector('.suggestions') // gets list element
const defaultListItems = Array.from(suggestionsList.children) // Saves defaults list elements into a variable to be used later

const findMatches = (string, array) => {
  const regex = new RegExp(string, 'gi')

  return array.filter((item) => {
    return Object.values(item).some((value) => {
      return typeof value === 'string' && value.match(regex)
    })
  })
}

const displayMatches = (e) => {
  const string = e.currentTarget.value

  if (!string) {
    clearSuggestionList()
    defaultListItems.forEach((listItem) => {
      suggestionsList.appendChild(listItem)
    })
    return
  }

  const matchArray = findMatches(string, cities)
  const html = matchArray
    .map((place) => {
      const regex = new RegExp(string, 'gi')
      const cityName = place.city.replace(
        regex,
        `<span class="hl">${string}</span>`,
      )
      const stateName = place.state.replace(
        regex,
        `<span class="hl">${string}</span>`,
      )

      return `
        <li>
          <span class="name">${cityName}, ${stateName} </span>
          <span class="population">${numberWithDots(place.population)}</span>
        </li>`
    })
    .join('')
  suggestionsList.innerHTML = html
}

const clearSuggestionList = () => {
  while (suggestionsList.firstChild) {
    suggestionsList.removeChild(suggestionsList.firstChild)
  }
}

const numberWithDots = (number) => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
}

fetch(endpoint)
  .then((response) => response.json())
  .then((data) => cities.push(...data))

//Adds event listener to the input
input.addEventListener('input', displayMatches)
