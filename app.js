//March 30 Review
// AJAX and APIs Exercise
// 1
const first = document.querySelector('#first');
const p1 = document.createElement('p');
const p2 = document.createElement('p');
first.append(p1);
first.append(p2);
`{"id":18,"type":"programming","setup":"Why did the programmer quit his job?","punchline":"Because he didn't get arrays."}`;

//1a
const jokeJS1 = JSON.parse(`"id":18,"type":"programming","setup":"Why did the programmer quit his job?","punchline":"Because he didn't get arrays."`);

//1b
p1.innerText = jokeJS1.setup;

//1c
p2.innerText = jokeJS1.punchline;

// 2
const second = document.querySelector('#second');
const p3 = document.createElement('p');
const p4 = document.createElement('p');
second.append(p3);
second.append(p4);
//2a
axios.get(`https://official-joke-api.appspot.com/random_joke`)

//2b
.then(res => {
    const jokeJS2 = res;
    console.log(res.data);
    //2c
    p3.innerText = jokeJS2.data.setup;
    p3.innerText = jokeJS2.data.punchline;
    })
    //2d
    .catch(err => console.log(err));

// 3
const third = document.querySelector('#third');
const p5 = document.createElement('p');
const p6 = document.createElement('p');
third.append(p5);
third.append(p6);

//3a
axios.get(`https://official-joke-api.appspot.com/random_joke`)

// 3b
async function jokeFunc() {    
    try {
        const jokeJS3 = await axios.get(`https://official-joke-api.appspot.com/random_joke`)
        // 3c
        p5.innerText = jokeJS3.data.setup;
        p5.innerText = jokeJS3.data.punchline;
    } catch (err) {// 3d
        console.log(err);
      }
}

// 4
const fourth = document.querySelector('#fourth');
const p7 = document.createElement('p');
fourth.append(p7);
https://www.tvmaze.com/api


// 4a
const id = "38963";
const season = "1";
const number = "8";

// 4b
const fullURL =`http://api.tvmaze.com/shows/${id}/episodebynumber?season=${season}&{number}`;

// 4d
async function tvMazeFunc(){
// 4f 
try {
    // 4c & 4d
const mando = axios.get(`http://api.tvmaze.com/shows/${id}/episodebynumber?season=${season}&{number}`)//4d const mando =
// OR
//axios.get(fullURL);

// 4e
p7.innerText = mando.data.name;
//4f
} catch (err) {
    console.log(err);
  }
}

// BONUS
// 5.
//(https://pokeapi.co/)

const body = document.querySelector(`body`);
const img = document.createElement(`img`);
body.append(img);

async function pokeFunc(){
    try {
        const pokeData = await axios.get(`https://pokeapi.co/api/v2/pokemon/pikachu`);
        img.src = pokeData.data.sprites.front_default;
    } catch (err) {
        console.log(err);
    }
}
pokeFunc();