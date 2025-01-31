
// Call API with fetch
const apiBase = 'https://swapi.dev/api/'

let nextPage = null

// Get all people from the Star Wars API
function getPersons () {
    if (nextPage === null) {
        apiUrl = apiBase + 'people/'
    } else {
        apiUrl = nextPage
    }

    fetch(apiUrl).then(response => response.json()).then(data => {
        const persons = data.results
        nextPage = data.next

        console.log(persons)

        let content = ''
        persons.forEach(person => {
            const id = getCharacterId(person.url)
            content += '<li>'
                content += '<h2>' + person.name + '</h2>'
                content += '<img src="https://starwars-visualguide.com/assets/img/characters/' + id + '.jpg" alt="' + person.name + '">'
            content += '</li>'
        })

        document.getElementById('characters').innerHTML += content
    })
}

getPersons()

function getCharacterId(url) {
const regex = /people\/(\d+)/
return url.match(regex)[1]
}

document.getElementById('load-more').addEventListener('click', () => {
    getPersons()
})

function search () {
    document.getElementById('search').addEventListener('keyup', function () {
        const currentSearch = this.value.toLowerCase()
        const characters = document.querySelectorAll('#characters li')
        characters.forEach(character => {
            let name = character.querySelector('h2').innerText.toLowerCase()
            if (name.indexOf(currentSearch) === -1) {
                character.style.display = 'none'
            } else {
                character.style.display = 'block'
            }
        })
    })
}
search()