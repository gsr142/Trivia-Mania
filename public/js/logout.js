
document.querySelector('#logout').addEventListener('click', logoutFunction);

const logoutFunction = async (e) => {
    e.preventDefault();

    const response = await fetch('/api/user/logout', {
        method: 'POST',
        header: {'Content-Type': 'application/json'}
    })

    if (response.ok) {
        document.location.replace('/');
    } else {
        alert(response.statuseText);
    }
}