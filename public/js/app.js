const { readBuilderProgram } = require("typescript");

document.addEventListener('DOMContentLoaded', function() {
    // Add your JavaScript here.
});

function changeBackgroundColor() {
    console.log("colour change");
    const posts = document.getElementsByClassName("user_post");
    for (let i = 0; i < posts.length; i++) {
        posts[i].style.backgroundColor = generateRandomColor();
    }
}

function generateRandomColor() {
    return `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;    
}

function toggleMobileNav() {
    var navbar = document.getElementById("mobile_nav");
    navbar.classList.toggle("mobile_nav_visible");
    // var bgElements = document.querySelectorAll('.user_post');
    var bgElements = document.querySelectorAll('body > *:not(header)');
    // var bgElements = document.querySelectorAll('body > *:not(#mobile_nav, header)');
    for (let i = 0; i < bgElements.length; i++) {
        bgElements[i].classList.toggle("blurred_bg");
    }
}
