//login button
document.querySelector('.login-form').addEventListener('submit', loginButtonFunction);

//login button function
const loginButtonFunction = async (e) => {
    e.preventDefault();

    const email = document.querySelector('.login-username').value.trim();
    const password = document.querySelector('.login-password').value.trim();

    if (email && password) {
        
        const response = await fetch ('/api/users/login', {
            method: 'POST',
            body: JSON.stringify({email: email, password: password}),
            headers: { 'Content-Type': 'application/json'}
        });

        if (response.ok){
            document.location.replace('/homepage')
        } else {
            document.location.replace('/landingpage');
        
        }
    }
}


//create account button
document.querySelector('.create-account-form').addEventListener('submit', createAccountButtonFunction);

//create account button function
const createAccountButtonFunction = async () => {
    
    const username = document.querySelector('.create-username').value.trim();
    const password = document.querySelector('.create-password').value.trim();
    
    const response = await fetch('/api/user', {
        method: 'POST',
        body: JSON.stringify({username: username, password: password}),
        headers: { 'Content-Type': 'application/json'}
    })

    if (response.ok) {
        document.location.replace('/homepage');
    } else {
        document.location.replace('/landingpage');
    }
}