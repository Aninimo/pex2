document.addEventListener("DOMContentLoaded", function(){
    const toggleButtons = document.querySelectorAll(".toggle-button");
    const cards = document.querySelectorAll(".cardQuestion .contentCard");
  
    for(let i = 1; i < cards.length; i++){
      cards[i].classList.add("hidden");
    }
  
    toggleButtons.forEach((button, index) => {
      button.addEventListener("click", () => {
        const contentCard = cards[index];
        if(contentCard.classList.contains("hidden")){
          contentCard.classList.remove("hidden");
          button.querySelector('i').classList.remove('fa-plus');
          button.querySelector('i').classList.add('fa-minus');
        }else{
          contentCard.classList.add('hidden');
          button.querySelector('i').classList.remove('fa-minus');
          button.querySelector('i').classList.add('fa-plus');
        }
      })
    })
})

fetch('blogs.json')
  .then(response => response.json())
  .then(data => {
    const allBlogsContainer = document.getElementById('allBlogsContainer');

    if(data && Array.isArray(data) && data[0] && Array.isArray(data[0].blogs)){
      const allBlogs = data[0].blogs;

      allBlogs.forEach(blog => {
        const blogElement = document.createElement('div');
        blogElement.className = 'blogCard';

        blogElement.innerHTML = `
          <img src="${blog.image}" alt="${blog.title}" class="image-blog"/>
          <h2>${blog.title}</h2>
          <p>${blog.description}</p>
          <a href="blog.html?id=${blog.id}" class="btn">Leia mais</a>
        `;

        allBlogsContainer.appendChild(blogElement);
      });
    } else {
      console.error('Estrutura de dados inesperada:', data);
    }
  })
  .catch(error => {
    console.error('Erro ao buscar os blogs:', error);
});

fetch('blogs.json')
  .then(response => response.json())
  .then(data => {
    const blogsContainer = document.getElementById('blogs-container');
    
    if (data && Array.isArray(data) && data[0] && Array.isArray(data[0].blogs)) {
      
      const firstThreeBlogs = data[0].blogs.slice(0, 3);

      firstThreeBlogs.forEach(blog => {
        const blogElement = document.createElement('div');
        blogElement.className = 'blogCard';

        blogElement.innerHTML = `
          <img src="${blog.image}" alt="${blog.title}" class="image-blog"/>
          <h2>${blog.title}</h2>
          <p>${blog.description}</p>

          <a href="blog.html?id=${blog.id}" class="btn">Leia mais</a>
        `;

        blogsContainer.appendChild(blogElement);
      });
    } else {
      console.error('Estrutura de dados inesperada:', data);
    }
  })
  .catch(error => console.error('Erro ao carregar o JSON:', error));

  fetch('food.json')
  .then(response => response.json())
  .then(data => {
    const allFoodsContainer = document.getElementById('allFoodsContainer');

    if (data && Array.isArray(data) && data[0] && Array.isArray(data[0].foods)) {
      const allFoods = data[0].foods;

      allFoods.forEach(food => {
        const foodElement = document.createElement('div');
        foodElement.className = 'foodCard';

        foodElement.innerHTML = `
          <img src="${food.image}" alt="${food.name}" class="imageFood"/>
          <h2>${food.name}</h2>
          <a href="food.html?id=${food.id}" class="btn">Leia mais</a>
        `;

        allFoodsContainer.appendChild(foodElement);
      });
    } else {
      console.error('Estrutura de dados inesperada:', data);
    }
  })
  .catch(error => {
    console.error('Erro ao buscar as receitas:', error);
  });

fetch('food.json')
  .then(response => response.json())
  .then(data => {
    const foodContainer = document.getElementById('foods-container');
    
    if (data && Array.isArray(data) && data[0] && Array.isArray(data[0].foods)) {
      const firstThreeFoods = data[0].foods.slice(0, 2);

      firstThreeFoods.forEach(food => {
        const foodElement = document.createElement('div');
        foodElement.className = 'foodCard';

        foodElement.innerHTML = `
          <img src="${food.image}" alt="${food.name}" class="imageFood"/>
          <h4 class="foodName">${food.name}</h4>
          <a href="food.html?id=${food.id}" class="btn">Veja a receita</a>
        `;

        foodContainer.appendChild(foodElement);
      });
    } else {
      console.error('Estrutura de dados inesperada:', data);
    }
  })
  .catch(error => console.error('Erro ao carregar o JSON:', error));
