const bands = [
  'The Plot in You',
  'The Devil Wears Prada',
  'Pierce the Veil',
  'Norma Jean',
  'The Bled',
  'Say Anything',
  'The Midway State',
  'We Came as Romans',
  'Counterparts',
  'Oh, Sleeper',
  'A Skylit Drive',
  'Anywhere But Here',
  'An Old Dog',
]

// Função para remover os artigos do início da string
function stripArticle(bandName) {
  // Usa uma expressão regular para substituir "A ", "An ", ou "The " no início da string por ""
  return bandName.replace(/^(A |An |The )/i, '').trim()
}

// Ordena a lista usando a função de comparação
const sortedBands = bands.sort((a, b) => {
  // Compara as strings já sem os artigos
  return stripArticle(a) > stripArticle(b) ? 1 : -1
})

// Seleciona a lista no HTML
const bandsList = document.getElementById('bands')

// Função para carregar a lista ordenada na página
const loadList = () => {
  sortedBands.forEach((band) => {
    const listItem = document.createElement('li')
    listItem.innerHTML = band
    bandsList.appendChild(listItem)
  })
}

// Adiciona o evento para carregar a lista quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', loadList)
