// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

// JavaScript to add/remove the 'scrolled' class on scroll
window.addEventListener("scroll", function () {
    var navbar = document.querySelector("nav");
    if (window.scrollY > 50) { // Adjust this value as needed
                navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});