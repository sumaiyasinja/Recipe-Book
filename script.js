fetch('/recipe.json')
.then(response => response.json())
.then(data => {
    console.log(data);
    const section = document.getElementsByClassName('recipes')[0];
    for (let i = 0; i < data.length; i++) {
        const recipe = document.createElement('div');
        recipe.innerHTML = `
        <div class="cover-img-container" onclick="window.location.href = '/details/${data[i].id}';">
        <img class="cover-img" src='${data[i]?.coverImage}' alt="${data[i].recipeName}">
        <div class="cover-img-overlay">
    <a href="#"  id="${data[i]?.id}" class="view-details-btn">View Details</a>
        </div>
    </div>
         <h2 class="recipe-title">${data[i].recipeName}</h2>

        `;
        
        section.appendChild(recipe);
    }
})
const userRecipe = JSON.parse(localStorage.getItem('recipe'));
console.log(userRecipe);
const section = document.getElementsByClassName('user-recipes')[0];
for (let i = 0; i < userRecipe.length; i++) {
    const recipe = document.createElement('div');
    recipe.innerHTML = `
    <div class="cover-img-container" onclick="window.location.href = '/details/${userRecipe[i].id}';">
    <img class="cover-img" src='${userRecipe[i]?.coverImage}' alt="${userRecipe[i].recipeName}">
    <div class="cover-img-overlay">
<a href="#"  id="${userRecipe[i]?.id}" class="view-details-btn">View Details</a>
    </div>
</div>
     <h2 class="recipe-title">${userRecipe[i].recipeName}</h2>

    `;
    
    section.appendChild(recipe);
}