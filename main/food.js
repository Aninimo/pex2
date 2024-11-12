document.addEventListener("DOMContentLoaded", function (){
    const params = new URLSearchParams(window.location.search);
    const foodId = params.get("id");
  
    fetch("food.json")
    .then(response => response.json())
    .then(data => {
      const foodContainer = document.getElementById('food-details-container');
      const allFoods = data[0].foods; 
      const foodItem = allFoods.find(food => food.id == foodId);
  
      if (foodItem) {
        foodContainer.innerHTML = `
          <div class="recipe-container">
            <div>
              <h2>${foodItem.name}</h2>
              <img src="${foodItem.image}" alt="${foodItem.name}" class="imageFoodDetails"/>
              <div class="boxFood">
                <h4>Ingredientes:</h4>
                <ul>
                  ${foodItem.ingredientes.map(ingredient => `<li>${ingredient}</li>`).join('')}
                </ul>
                <h4>Modo de Preparo:</h4>
                <p class="modFood">${foodItem.modo}</p>
              </div>
            </div>
          `;
  
        const otherFoods = allFoods.filter(food => food.id !== foodId);
        const otherFoodsContainer = document.createElement('div');
  
        const recommendedTitle = document.createElement("h2");
        recommendedTitle.innerText = "Recomendados";
        otherFoodsContainer.appendChild(recommendedTitle);
        
        otherFoods.forEach(food => {
          const foodCard = document.createElement('div');
          foodCard.className = 'foodCardRecommended';
          foodCard.innerHTML = `
            <div class="recommendedContent">
              <div class="recommendedCard">
                <img src="${food.image}" alt="${food.name}" class="imageFoodRecommended"/>
                <div class="footerRecommended">
                  <h4 class="foodName">${food.name}</h4>
                  <a href="food.html?id=${food.id}" class="btn">Ver</a>
                </div>
              </div>
            </div>
          `;
          otherFoodsContainer.appendChild(foodCard);
        });
  
        foodContainer.appendChild(otherFoodsContainer);
      } else {
        foodContainer.innerHTML = '<p>Receita não encontrada.</p>';
      }
    })
    .catch(error => console.error('Erro ao carregar o JSON:', error));
  })
