const logoutFunction = async (e) => {
    e.preventDefault();
    
    console.log('logout button clicked');
    
    const response = await fetch('/api/user/logout', {
        method: 'POST',
        header: {'Content-Type': 'application/json'}
    });
    
    if (response.ok) {
        document.location.replace('/');
    } else {
        alert(response.statuseText);
    }
}
document.querySelector('#logout').addEventListener('click', logoutFunction);