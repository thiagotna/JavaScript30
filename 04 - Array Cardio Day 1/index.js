// Get your shorts on - this is an array workout!
// ## Array Cardio Day 1

// Some data we can work with

const inventors = [
  { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
  { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
  { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
  { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
  { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
  { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
  { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
  { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
  { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
  { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
  { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
  { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 },
]

const people = [
  'Bernhard, Sandra',
  'Bethea, Erin',
  'Becker, Carl',
  'Bentsen, Lloyd',
  'Beckett, Samuel',
  'Blake, William',
  'Berger, Ric',
  'Beddoes, Mick',
  'Beethoven, Ludwig',
  'Belloc, Hilaire',
  'Begin, Menachem',
  'Bellow, Saul',
  'Benchley, Robert',
  'Blair, Robert',
  'Benenson, Peter',
  'Benjamin, Walter',
  'Berlin, Irving',
  'Benn, Tony',
  'Benson, Leana',
  'Bent, Silas',
  'Berle, Milton',
  'Berry, Halle',
  'Biko, Steve',
  'Beck, Glenn',
  'Bergman, Ingmar',
  'Black, Elk',
  'Berio, Luciano',
  'Berne, Eric',
  'Berra, Yogi',
  'Berry, Wendell',
  'Bevan, Aneurin',
  'Ben-Gurion, David',
  'Bevel, Ken',
  'Biden, Joseph',
  'Bennington, Chester',
  'Bierce, Ambrose',
  'Billings, Josh',
  'Birrell, Augustine',
  'Blair, Tony',
  'Beecher, Henry',
  'Biondo, Frank',
]

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's
console.log(
  '1. Filter the list of inventors for those who were born in the 1500',
)
inventors.filter((inventor) => {
  if (inventor.year < 1600 && inventor.year >= 1500) {
    console.log(`${inventor.first} ${inventor.last}`)
  }
})
// Array.prototype.map()
// 2. Give us an array of the inventors first and last names
console.log('2. Give us an array of the inventors first and last names')
const inventorNames = []
inventors.map((inventor) => {
  inventorNames.push(`${inventor.first} ${inventor.last}`)
})
console.log(inventorNames)

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest
console.log('3. Sort the inventors by birthdate, oldest to youngest')
console.table(inventors.sort((a, b) => (a.year > b.year ? 1 : -1)))

// Array.prototype.reduce()
// 4. How many years did all the inventors live all together?
console.log('4. How many years did all the inventors live all together?')
const years = inventors.map((inventor) => inventor.passed - inventor.year)
const sumOfAges = years.reduce(
  (accmulator, currentValue) => accmulator + currentValue,
  0,
)
console.log(sumOfAges)

// 5. Sort the inventors by years lived
console.log('5. Sort the inventors by years lived')
const inventorNamesAndAges = inventors.map((inventor) => ({
  ...inventor,
  inventorAge: inventor.passed - inventor.year,
}))
const inventorAgesSorted = inventorNamesAndAges.sort((a, b) =>
  a.inventorAge > b.inventorAge ? -1 : 1,
)
console.table(inventorAgesSorted)

// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
console.log(
  '6. create a list of Boulevards in Paris that contain "de" anywhere in the name',
)
const boulevardsInParis = [
  'Boulevards of Paris',
  'City walls of Paris',
  'Thiers wall',
  'Wall of Charles V',
  'Wall of Philip II Augustus',
  'City gates of Paris',
  "Haussmann's renovation of Paris",
  'Boulevards of the Marshals',
  'Boulevard Auguste-Blanqui',
  'Boulevard Barbès',
  'Boulevard Beaumarchais',
  "Boulevard de l'Amiral-Bruix",
  'Boulevard Mortier',
  'Boulevard Poniatowski',
  'Boulevard Soult',
  'Boulevard des Capucines',
  'Boulevard de la Chapelle',
  'Boulevard de Clichy',
  'Boulevard du Crime',
  "Boulevard du Général-d'Armée-Jean-Simon",
  'Boulevard Haussmann',
  "Boulevard de l'Hôpital",
  'Boulevard des Italiens',
  'Boulevard Lefebvre',
  'Boulevard de la Madeleine',
  'Boulevard de Magenta',
  'Boulevard Malesherbes',
  'Boulevard Marguerite-de-Rochechouart',
  'Boulevard Montmartre',
  'Boulevard du Montparnasse',
  'Boulevard Raspail',
  'Boulevard Richard-Lenoir',
  'Boulevard Saint-Germain',
  'Boulevard Saint-Michel',
  'Boulevard de Sébastopol',
  'Boulevard de Strasbourg',
  'Boulevard du Temple',
  'Boulevard Voltaire',
  'Boulevard Hippolyte-Marquès',
]
const pattern = /\bde\b/g
const filteredBoulevards = boulevardsInParis.filter((str) => pattern.test(str))
console.table(filteredBoulevards)

// 7. sort Exercise
// Sort the people alphabetically by last name
console.log('7. Sort Exercise')
const peopleFormatted = people.map((personFormatted) =>
  personFormatted.split(',', 2),
)
const peopleOrderedByLastName = peopleFormatted.sort((a, b) =>
  a[0] > b[0] ? 1 : -1,
)

console.table(peopleOrderedByLastName)

// 8. Reduce Exercise
// Sum up the instances of each of these
const data = [
  'car',
  'car',
  'truck',
  'truck',
  'bike',
  'walk',
  'car',
  'van',
  'bike',
  'walk',
  'car',
  'van',
  'car',
  'truck',
]

console.log('8. Reduce Exercise')
const instanceCount = data.reduce((accmulator, element) => {
  accmulator[element] = (accmulator[element] || 0) + 1
  return accmulator
}, {})

console.table(instanceCount)
