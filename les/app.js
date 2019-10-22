console.log("works!!!!");


// fetch('https://dog.ceo/api/breeds/image/random')
// .then( res => {
//     console.log(res.json())
// })

// axios({
//     url: 'https://dog.ceo/api/breeds/image/random',
//     method: 'get'
// })
// .then( response => {
//     console.log(response.data.message);
// })
// .catch(error => {
//     console.log(error);
// })

// console.log("hi ");


const img = document.createElement('img');
const button = document.querySelector('button');

const apiUrl = 'https://dog.ceo/api/breeds/image/random';

const random = () => {
    axios({
        url: apiUrl,
        method: 'get'
    })
    .then( res => {
        const imgUrl = res.data.message;
        img.src = imgUrl;
        document.body.appendChild(img);
    })
}
button.addEventListener('click', random)