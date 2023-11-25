document.addEventListener('DOMContentLoaded', function () {
  const articleLinks = document.getElementById('article-links');

  // Load articles from local storage on page load
  loadArticleLinks();

  function loadArticleLinks() {
    // Retrieve articles from local storage
    const existingArticles = JSON.parse(localStorage.getItem('articles')) || [];

    // Display links to existing articles
    existingArticles.forEach((article, index) => {
      const articleLink = document.createElement('a');
      articleLink.href = `article.html?id=${index}`; // Create individual article pages with query parameter
      articleLink.classList.add('d-block', 'bg-light', 'text-dark', 'p-3', 'my-2', 'rounded');
      articleLink.innerHTML = `<h2>${article.title}</h2>`;
      articleLinks.appendChild(articleLink);
    });
  }
});
