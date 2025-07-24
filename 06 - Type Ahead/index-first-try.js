const endpoint =
  'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json'
const cities = [] //Array for storing data from fetch API call
const input = document.querySelector('.search') // Gets input element
const suggestionsList = document.querySelector('.suggestions') // gets list element
const defaultListItems = Array.from(suggestionsList.children) // Saves defaults list elements into a variable to be used later
const handleChange = (e) => {
  const inputValue = e.currentTarget.value //gets input value
  const filteredCities = cities.filter(
    (obj) => obj.city.includes(inputValue) || obj.state.includes(inputValue),
  ) // returns filtered array that checks array elements that contains the string pattern

  //Check input value for emprty or not
  if (inputValue) {
    clearSuggestionList()
    //Run events for each element data from the stored array
    filteredCities.forEach((filteredCity) => {
      const listItem = document.createElement('li') //Create a li element for each filtered element

      listItem.innerHTML = `<span>${filteredCity.city}, ${filteredCity.state}</span><small>${filteredCity.population}</small>` // fill li element with fetched data content
      suggestionsList.appendChild(listItem) // append li element with content to the suggestion list
    })
  } else {
    //I input value is empty clears the suggestion list and append the default list items
    clearSuggestionList()
    defaultListItems.forEach((listItem) => {
      suggestionsList.appendChild(listItem)
    })
  }
}
//Clears list back to the default state
const clearSuggestionList = () => {
  while (suggestionsList.firstChild) {
    suggestionsList.removeChild(suggestionsList.firstChild)
  }
}

//Fetches data and save it into an array
fetch(endpoint)
  .then((response) => response.json())
  .then((data) => cities.push(...data))

//Adds event listener to the input
input.addEventListener('input', handleChange)
