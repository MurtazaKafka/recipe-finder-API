let search = document.getElementById("srch");
let result = document.getElementById("result");

search.addEventListener("keypress", function(){

    fetch(`https://api.spoonacular.com/food/search?query=${srch.value}&number=5&apiKey=b3f03659cd0e4bcb87086c86160e2c61`)
        .then(res => res.json())
        .then(data => result.innerHTML = renderHTML(data))

        search.textContent = ""
    })

function renderHTML(data) {
    return `<div id="result" class="result">
    <div class="searchResults">
        <img src=${data.searchResults[0].results[0].image}>
        <h2>${data.searchResults[0].results[0].name}</h2>
        <h3>${data.searchResults[0].results[0].content}</h3>
    </div>

    <div class="searchResults">
        <img src=${data.searchResults[1].results[1].image}>
        <h2>${data.searchResults[1].results[1].name}</h2>
        <h3>${data.searchResults[1].results[1].content}</h3>
    </div>

    <div class="searchResults">
        <img src=${data.searchResults[2].results[2].image}>
        <h2>${data.searchResults[2].results[2].name}</h2>
        <h3>${data.searchResults[2].results[2].content}</h3>
    </div>

    <div class="searchResults">
        <img src=${data.searchResults[3].results[3].image}>
        <h2>${data.searchResults[3].results[3].name}</h2>
        <h3>${data.searchResults[3].results[3].content}</h3>
    </div>

    <div class="searchResults">
        <img src=${data.searchResults[4].results[4].image}>
        <h2>${data.searchResults[4].results[4].name}</h2>
        <h3>${data.searchResults[4].results[4].content}</h3>
    </div>
</div>
`
} 

