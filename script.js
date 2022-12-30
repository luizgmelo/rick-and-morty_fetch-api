let notUse = true;

async function showData() {
    
    if (notUse) {
        notUse = false;
        const body = document.body;
    
        const promise = fetch('https://rickandmortyapi.com/api/character');
        const response = await promise;
        const data = await response.json();
        return data.results.map(object => {
            body.innerHTML += `
            <div>
                <img src='${object['image']}'>
                <p class='name'>${object['name']}</p>
            </div>
            `
            console.log(object)
        });
    }

}







