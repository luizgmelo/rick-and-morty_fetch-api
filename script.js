let notUse = true;

async function showData() {
    
    if (notUse) {
        notUse = false;
        const body = document.body;
    
        const promise = fetch('https://rickandmortyapi.com/api/character');
        const response = await promise;
        const data = await response.json();
        return data.results.map(object => body.innerHTML += `<p class='name'>${object['name']}</p>`);
    }

}







