const movieForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')

messageOne.textContent = 'From JavaScript'


movieForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const movieSearch = search.value

    messageOne.textContent = 'Loading...'

    fetch('/movie?search=' + movieSearch).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                messageOne.textContent = data.error
            } else {
                messageOne.textContent = data.movieSearch
            }
        })
    })
    console.log(movieSearch)
})