//question 1

const sum = (a, b) => a % b;
//question 2
const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating";
const divcontainer = document.querySelector(".results");


async function games() {
    const main = await fetch(url);

    const result = await main.json();

    const answer = result.results;
    divcontainer.innerHTML = "";

    for (let i = 0; i < answer.length; i++) {
        console.log(answer[i].name, answer[i].rating, answer[i].tag.length);
        if (i === 8) {
            break;
        }

        divcontainer.innerHTML += `<div>${answer[i].name}, ${answer[i].name}, ${answer[i].name}</div>`;


    }



}