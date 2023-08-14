// Function to fetch and populate categories in the dropdown
const populateCategories = async () => {
  const categorySelect = document.getElementById('category-select');

  try {
    const response = await fetch('/api/categories');
    if (response.ok) {
      const categories = await response.json();
      categories.forEach((category) => {
        const option = document.createElement('option');
        option.value = category.id;
        option.textContent = category.name;
        categorySelect.appendChild(option);
      });
    } else {
      console.error('Failed to fetch categories');
    }
  } catch (error) {
    console.error('Error fetching categories:', error);
  }
};
// eventlistener responsible for loading content to our dropdown menu calling our function (populateCategories)
document.addEventListener('DOMContentLoaded', () => {
  populateCategories();

  document
    .getElementById('start-trivia-button')
    .addEventListener('click', async () => {
      const categorySelect = document.getElementById('category-select');
      const difficultySelect = document.getElementById('difficulty-select');

      const selectedCategoryId = categorySelect.value;
      const selectedDifficulty = difficultySelect.value;

      fetchTrivia(selectedCategoryId, selectedDifficulty);
    });
});

// dynamically fetching categories
// overall provides scalability for when we want to add more categories in the future for this application