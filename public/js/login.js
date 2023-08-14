const loginForm = document.querySelector('#login-form');

// Adding event listener for form submission
loginForm.addEventListener('submit', async (event) => {
  event.preventDefault(); // Prevent the default form submission

  // Get the input values from the form
  const username = loginForm.querySelector('#username').value.trim();
  const password = loginForm.querySelector('#password').value.trim();

  try {
    // Send a POST request to the login route
    const response = await fetch('api/user/login', {
      method: 'POST',
      body: JSON.stringify({ name: username, password: password }),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    // Handle the response based on success or failure
    if (response.ok) {
      const data = await response.json();
      console.log(data.message); // Display success message
      document.location.href = '/triviapage'
    } else {
      const errorData = await response.json();
      console.log(errorData.message);
      document.location.href = '/'
    }
  } catch (error) {
    console.log('Error:', error);
  }
});

