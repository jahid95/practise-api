document.getElementById('error-message').style.display = 'none';

const searchFood = () => {
    const searchField = document.getElementById('input-field');
    const textSearch = searchField.value;
    // console.log(textSearch);
    searchField.value= '';
    if(textSearch == ''){
      document.getElementById('error-message').style.display = 'block';
    }
    else{
      const url= `https://www.themealdb.com/api/json/v1/1/search.php?s=${textSearch}`;
      fetch(url)
      .then(res => res.json())
      .then(data => displaySearchResult(data.meals));
    }

   
}

const displaySearchResult = meals =>{
  const searchResult = document.getElementById('search-result');
  searchResult.textContent ='';
    meals.forEach(meal => {
        
    const div = document.createElement('div');
    div.classList.add('col');
    div.innerHTML =`
    <div onclick="loadMealDetail(${meal.idMeal})" class="card">
    <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${meal.strMeal}</h5>
      <p class="card-text">${meal.strInstructions.slice(0,200)}</p>
    </div>
  </div>
    `;
    searchResult.appendChild(div);
    })
}



// Meal Details
const loadMealDetail = mealId => {
  const url= `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayMealDetail(data.meals[0]));
}

const displayMealDetail = meal => {
  // console.log(meal);
  const mealDetails = document.getElementById('meal-details');
  mealDetails.textContent = '';
  const div = document.createElement('div');
  div.classList.add('card');
  div.innerHTML = `
  <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
  <div class="card-body">
      <h5 class="card-title">${meal.strMeal}</h5>
      <p class="card-text">${meal.strInstructions.slice(0, 150)}</p>
      <a href="${meal.strYoutube}" class="btn btn-primary">Go somewhere</a>
  </div>
  `;
  mealDetails.appendChild(div);
}





