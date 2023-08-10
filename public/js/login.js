document.querySelector('./login-button').addEventListener('click', loginFunction);

const loginFunction = async (e) => {
    e.preventDefault();

    const email = document.querySelector('.login-email').value.trim();
    const password = document.querySelector('.login-password').value.trim();

    if (email && password) {
        
        const response = await fetch ('/api/users/login', {
            method: 'POST',
            body: JSON.stringify({email, password}),
            headers: { 'Content-Type': 'application/json'}
        });

        if (response.ok){
            document.location.replace('/dashboard')
        } else {
            //refresh the page so the user can try logging in or signing up again. 
        }
    }
}