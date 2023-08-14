
document.querySelector('#logout').addEventListener('click', logoutFunction);

const logoutFunction = async (e) => {
    e.preventDefault();

    if (req.session.logged_in) {
        req.session.logged_in = false;
        document.location.replace('homepage')
    }
}