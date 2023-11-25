document.addEventListener('DOMContentLoaded', function () {
  const articleContent = document.getElementById('article-content');

  // Get the article index from the query parameter
  const urlParams = new URLSearchParams(window.location.search);
  const articleIndex = parseInt(urlParams.get('id'));

  // Load articles from local storage on page load
  loadArticleContent();

  function loadArticleContent() {
    // Retrieve articles from local storage
    const existingArticles = JSON.parse(localStorage.getItem('articles')) || [];

    // Display the content of the selected article
    const selectedArticle = existingArticles[articleIndex];
    if (selectedArticle) {
      const articleElement = document.createElement('article');
      articleElement.innerHTML = `<h2>${selectedArticle.title}</h2><p>${selectedArticle.content}</p>`;
      articleContent.appendChild(articleElement);
    }
  }
});
