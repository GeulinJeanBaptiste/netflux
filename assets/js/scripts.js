const search = document.querySelector("#search")
const results = document.querySelector("#results")


//{return} le return est obligatoire si je mets des {}

search.addEventListener("input", () => {
    fetch(`search.php?query=${search.value}&limit=25`)
        .then((response) => response.json())
        .then((json) => {
            console.dir(json);
            json.map((value) => {
                results.innerHTML += value.cast + "|" + value.title + "<br>";
            })
        })
})






























// chap SELECT title cast from 