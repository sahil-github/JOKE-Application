const JOKE_API_URL="https://v2.jokeapi.dev/joke/Programming";
function Joke(){
    fetch('https://v2.jokeapi.dev/joke/Programming')
    .then(response=>response.json())
    .then(data =>{
        console.log(data)
        if (data.type === 'single') {
        document.getElementById('joke').innerHTML= data.joke;
        } else {
         document.getElementById("joke").innerHTML = '${data.setup}<br> ${data.delivery}';
    }
})
};
