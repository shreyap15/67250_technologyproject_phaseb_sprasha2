var x = 5
var y = 7
var z = x + y
console.log(z)

A = "Hello "
B = "world!"
var C = A + B
console.log(C)

function sumnPrint(x1, x2) {
    console.log(x1 + x2);
}

sumnPrint(x, y);
sumnPrint(A, B);

if (C.length > z) {
    console.log(C);
} else if (C.length < z) {
    console.log(z);
} else {
    console.log("good job!");
}

/*
L1 = ["Watermelon","Pineapple","Pear","Banana"];
L2 = ["Apple","Banana","Kiwi","Orange"];

function findTheBanana(L) {
    for (let i = 0; i < L.length; i++) {
        if (L[i] === "Banana") alert("Found the banana!");
    }
}

findTheBanana(L1);
findTheBanana(L2);

L1.forEach(function(item) {
    if (item === "Banana") alert("Found the banana!");
});
L2.forEach(function(item) {
    if (item === "Banana") alert("Found the banana!");
});

*/

var now = new Date();
var hour = now.getHours();

function greeting(hour) {
    if (hour < 12) {
        console.log("Good morning!");
    } else if (hour < 18) {
        console.log("Good afternoon!");
    } else if (hour < 20) {
        console.log("Good evening!");
    } else {
        console.log("Good night!");
    }
}

greeting(hour);

if (window.location.pathname.includes("index.html")) {
    var greetingElement = document.getElementById("greeting");
    if (greetingElement) {
        greetingElement.textContent = "Welcome to the MonoMuse Museum";
    }
}

function addYear() {
    var year = new Date().getFullYear();
    var copyYearElement = document.getElementById("copyYear");
    if (copyYearElement) {
        copyYearElement.textContent = year;
    }
}

/* Sets the 'active' class on the navigation link that matches the current page URL.*/

function ActiveNav() {
    // Get all navigation links
    const navLinks = document.querySelectorAll('nav a');

    // Iterate over each link
    navLinks.forEach(link => {
        // Check if the link's href matches the current window location
        if (window.location.href === link.href) {
            // Add the 'active' class to highlight the current page
            link.classList.add("active");
        }
    });
}

// Execute the function to set the active navigation link on page load
document.addEventListener('DOMContentLoaded', ActiveNav);

// Toggle intro content without reloading the page
$(document).ready(function() {
    // When the "Read Less" button is clicked
    $("#readLess").click(function() {
        $("#longIntro").hide(); // Hide the long introduction text
        $("#readLess").hide();  // Hide the "Read Less" button itself
        $("#readMore").show();  // Show the "Read More" button
    });

    // When the "Read More" button is clicked
    $("#readMore").click(function() {
        $("#longIntro").show();  // Show the long introduction text
        $("#readLess").show();   // Show the "Read Less" button
        $("#readMore").hide();   // Hide the "Read More" button
    });
});

function showPurchaseForm(selectedDate) {
    var form = document.getElementById("ticketForm");
    var dateInput = document.getElementById("ticketDate");
    if (dateInput && selectedDate) {
        dateInput.value = selectedDate;
    }
    if (form) {
        form.style.display = "block";
        form.scrollIntoView({ behavior: "smooth", block: "start" });
    }
}

function handleTicketSubmit(event) {
    if (event) {
        event.preventDefault();
    }
    alert("Redirecting to payment system.");
    return false;
}
