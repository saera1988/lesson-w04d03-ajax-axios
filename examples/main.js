// We loaded axios library in our html file
// Lets make an ajax call with axios
const img = document.createElement('img');
const button = document.createElement('button');
const apiUrl = `https://pokeapi.co/api/v2/pokemon/1/`;
button.innerText = "Random";
document.body.append(button);
const getRandomCat = () => {
    axios({
        url: apiUrl,
        method: 'get',
    }
    )
        .then(res => {
            console.log(res)
            img.src=res.data.sprites.front_shiny;
            document.body.appendChild(img)
        })
        .catch(err => {
            console.log(err)
        })
}
button.addEventListener('click', getRandomCat);