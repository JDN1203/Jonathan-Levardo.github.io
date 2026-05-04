// MOBILE MENU BUTTON

// Tie variables to HTML CSS classes
const primaryNav = document.querySelector(".primary-nav");
const navToggle = document.querySelector(".mobile-menu-button");

navToggle.addEventListener("click", () => {
    // Get attribute from the nav ul
    const visibility = primaryNav.getAttribute("data-visible");

    // If menu is NOT visible, make it visible when the menu button is clicked. Do the reverse if the menu is visible
    if (visibility === "false") {
        primaryNav.setAttribute("data-visible", true);
        navToggle.setAttribute("aria-expanded", true);
    } else {
        primaryNav.setAttribute("data-visible", false);
        navToggle.setAttribute("aria-expanded", false);        
    }
});

// NAVIGATION VIA BUTTONS
function toExplorePage() {
    document.location='/Web Dev I Assessment 2 - Jonathan Deuel C. Levardo/Assessment 2 HTML files/explore.html'
}

function toPlanetPage() {
    document.location='/Web Dev I Assessment 2 - Jonathan Deuel C. Levardo/Assessment 2 HTML files/planet.html'
}

function backToExplorePage() {
    document.location='../Assessment 2 HTML files/explore.html'
}