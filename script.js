fetch('/recipe.json')
.then(response => response.json())
.then(data => {
    console.log(data);
    const section = document.getElementsByClassName('recipes')[0];
    for (let i = 0; i < data.length; i++) {
        const recipe = document.createElement('div');
        recipe.innerHTML = `
        
        <img class="cover-img"  src='${data[i].coverImage}' alt="${data[i].recipeName}"> 
         <h2 class="recipe-title">${data[i].recipeName}</h2>

        `;
        
        section.appendChild(recipe);
    }
})