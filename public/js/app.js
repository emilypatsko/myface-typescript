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
