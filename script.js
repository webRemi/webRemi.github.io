var i = 0;
var txt = '"They engage in a frenetic dance, an infernal electronic waltz where pulses of light and shadow weave a symphony of possibilities."';
var speed = 50;

document.addEventListener('DOMContentLoaded', function() {
    writeQuote();
    checkDarkMode(); 
});

function writeQuote() {
    if (i < txt.length) {
        document.getElementById("quote").innerHTML += txt.charAt(i);
        i++;
        setTimeout(writeQuote, speed);
    }
}

function myFunction() {
    var element = document.body;
    var button = document.getElementById("dark"); 
    element.classList.toggle("dark-mode");
    
    if (element.classList.contains("dark-mode")) {
        localStorage.setItem("darkMode", "enabled");
        document.getElementById("profileImg").src = "asx.webp"; 
        button.textContent = "1"; 
    } else {
        localStorage.setItem("darkMode", "disabled");
        document.getElementById("profileImg").src = "asx.png"; 
        button.textContent = "0"; 
    }
}

function checkDarkMode() {
    if (localStorage.getItem("darkMode") === "enabled") {
        document.body.classList.add("dark-mode");
        document.getElementById("profileImg").src = "asx.webp"; 
        document.getElementById("dark").textContent = "1"; 
    } else {
        document.getElementById("dark").textContent = "0"; 
    }
}

document.querySelectorAll('input[type=button]').forEach((button, index) => {
    button.addEventListener("click", function() {
        const showMore = document.getElementById(`show-more-${index + 1}`);
        showMore.style.display = showMore.style.display === "block" ? "none" : "block";
    });
});