// Toggle class active
const navbarNav = document.querySelector('.navbar-nav');

// ketika hamburger-menu di klik
document.querySelector('#hamburger-menu').onclick = () => {
    console.log('Hamburger menu clicked'); // Debugging
    navbarNav.classList.toggle('active');
};

// klik di luar siderbar untuk menghilangkan hamburger-menu
const hamburger = document.querySelector('#hamburger-menu');

document.addEventListener('click', function (e) {
    if(!hamburger.contains(e.target) && !hamburger.contains(e.target)){
        navbarNav.classList.remove('active');
    }
});

