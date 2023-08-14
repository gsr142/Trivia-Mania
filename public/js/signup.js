const signupForm = document.querySelector('#signup-form');

signupForm.addEventListener('submit', async (event) => {
  event.preventDefault();

  const username = signupForm.querySelector('#username').value;
  const password = signupForm.querySelector('#password').value;

  try {
    const response = await fetch('/api/user/newplayer', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (response.ok) {
      const data = await response.json();
      console.log(data.message);
      document.location.href = '/triviapage';
    } else {
      const errorData = await response.json();
      console.log(errorData.message);
      document.location.href = '/newplayer'
    }
  } catch (error) {
    console.log('Error:', error);
  }
});