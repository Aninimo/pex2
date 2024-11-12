document.addEventListener("DOMContentLoaded", function() {
    const params = new URLSearchParams(window.location.search);
    const blogId = params.get("id");
  
    fetch("blogs.json")
      .then(response => response.json())
      .then(data => {
        const blogContainer = document.getElementById("blog-detail-container");
        const allBlogs = data[0].blogs;
        const blogItem = allBlogs.find(blog => blog.id === Number(blogId));
  
        if (blogItem) {
          blogContainer.innerHTML = `
            <div class="recipe-container">
              <div>
                <h2>${blogItem.title}</h2>
                <img src="${blogItem.image}" alt="" class="imageBlog"/>
                <p class="contentBlog">${blogItem.content}</p>
              </div>
            </div>
          `;
  
          const otherBlogs = allBlogs.filter(blog => blog.id !== Number(blogId));
          const otherBlogsContainer = document.createElement('div');
          otherBlogsContainer.className = 'other-blogs-container'; 
  
          const recommendedTitle = document.createElement("h2");
          recommendedTitle.innerText = "Recomendados";
          otherBlogsContainer.appendChild(recommendedTitle);
  
          otherBlogs.forEach(blog => {
            const blogCard = document.createElement('div');
            blogCard.className = 'blogCardRecommended';
  
            blogCard.innerHTML = `
              <div class="recommendedContent">
                <div class="BlogrecommendedCard">
                  <img src="${blog.image}" alt="${blog.title}" class="imageBlogRecommended"/>
                  <div class="footerRecommended">
                    <h4 class="foodName">${blog.title}</h4>
                    <a href="blog.html?id=${blog.id}" class="btn">Ler</a>
                  </div>
                </div>
              </div>
            `;
            otherBlogsContainer.appendChild(blogCard);
          });
  
          blogContainer.appendChild(otherBlogsContainer); 
        } else {
          blogContainer.innerHTML = '<p>Blog não encontrado.</p>';
        }
      })
      .catch(error => console.error('Erro ao carregar o JSON:', error));
  });
