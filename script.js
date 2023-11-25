document.addEventListener('DOMContentLoaded', function () {
  const articleForm = document.getElementById('articleForm');
  const articlesList = document.getElementById('articles-list');

  // Load articles from local storage on page load
  loadArticles();

  articleForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const title = document.getElementById('articleTitle').value;
    const content = document.getElementById('articleContent').value;

    // Create a new article element
    const article = document.createElement('article');
    article.classList.add('bg-light', 'text-dark', 'p-3', 'my-2', 'rounded');
    article.innerHTML = `<h2>${title}</h2><p>${content}</p>`;

    // Append the new article to the list
    articlesList.appendChild(article);

    // Save the new article to local storage
    saveArticle(title, content);

    // Clear the form fields
    articleForm.reset();
  });

  function saveArticle(title, content) {
    // Retrieve existing articles from local storage
    const existingArticles = JSON.parse(localStorage.getItem('articles')) || [];

    // Add the new article
    existingArticles.push({ title, content });

    // Save the updated articles to local storage
    localStorage.setItem('articles', JSON.stringify(existingArticles));
  }

  function loadArticles() {
    // Retrieve articles from local storage
    const existingArticles = JSON.parse(localStorage.getItem('articles')) || [];

    // Display existing articles
    existingArticles.forEach(article => {
      const articleElement = document.createElement('article');
      articleElement.classList.add('bg-light', 'text-dark', 'p-3', 'my-2', 'rounded');
      articleElement.innerHTML = `<h2>${article.title}</h2><p>${article.content}</p>`;
      articlesList.appendChild(articleElement);
    });
  }
});
