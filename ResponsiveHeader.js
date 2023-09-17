function checkScreenWidth() {
    const screenWidth = window.innerWidth;

    if (screenWidth >= 769) {
        // Screen size is desktop, remove the .menu-expanded class
        mainContainer.classList.remove('menu-expanded');
    }
}

// Run the function on page load and when the window size changes
window.addEventListener('load', checkScreenWidth);
window.addEventListener('resize', checkScreenWidth);


// JavaScript to handle the menu button click event and toggle the navbar
const menuButton = document.querySelector('.menu-button');
const navbar = document.querySelector('.navbar');
const mainContainer = document.querySelector('.main-container');

menuButton.addEventListener('click', () => {
    navbar.classList.toggle('active');
    mainContainer.classList.toggle('menu-expanded'); 
});