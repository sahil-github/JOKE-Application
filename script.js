const JOKE_API_URL="https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit";
function Joke(){
    fetch('https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit')
    .then(response=>response.json())
    .then(data =>{
        //console.log(data)
        if (data.type === 'single') {
        document.getElementById('joke').innerHTML= data.joke;
        } else {
         document.getElementById("joke").innerHTML = `${data.setup}<br> ${data.delivery}`;
    }
})
};
