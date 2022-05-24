const form = document.querySelector('#input')
const display = document.getElementById('display')
const baseURL = 'http://localhost:4567'


addEventListener('submit', (e) => {
    e.preventDefault()
    axios.get(`${baseURL}/getDB`).then((res) => {
        console.log(res)
        display.innerHTML = `
        <h3>${res.data[2].name}</h3>
        <h3>${res.data[0].age}</h3>
        <h3>${res.data[0].favoriteSport}</h3>
        `
    })
})