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

    // Gallery thumbnail click updates main image
    $(".gallery-thumb").click(function() {
        var src = $(this).attr("src");
        var alt = $(this).attr("alt");
        $("#galleryMain").attr("src", src);
        $("#galleryMain").attr("alt", alt);
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

function handleBuyNow(isoDate, displayDate) {
    showPurchaseForm(displayDate);
    if (isoDate) {
        localStorage.setItem("monomuseSelectedDate", isoDate);
    }
    var qtyEl = document.getElementById("ticketQuantity");
    if (qtyEl) {
        qtyEl.value = "1";
    }
    window.location.href = "checkout.html";
}

function handleTicketSubmit(event) {
    if (event) {
        event.preventDefault();
    }
    alert("Redirecting to payment system.");
    return false;
}

function toggleNav() {
    var nav = document.querySelector(".nav_bar");
    if (!nav) {
        return;
    }
    if (nav.classList.contains("responsive")) {
        nav.classList.remove("responsive");
    } else {
        nav.classList.add("responsive");
    }
}

function initMap() {
    var mapElement = document.getElementById("map");
    if (!mapElement || typeof L === "undefined") {
        return;
    }
    var map = L.map("map").setView([40.4433, -79.9436], 14);
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: "&copy; OpenStreetMap contributors"
    }).addTo(map);
    L.marker([40.4433, -79.9436]).addTo(map);
}

document.addEventListener("DOMContentLoaded", initMap);

function updateTotalPrice() {
    var qtyInput = document.getElementById("ticketQuantity");
    var totalEl = document.getElementById("totalPrice");
    if (!qtyInput || !totalEl) {
        return;
    }
    var qty = parseInt(qtyInput.value, 10);
    if (isNaN(qty) || qty < 1) {
        totalEl.textContent = "0";
        return;
    }
    totalEl.textContent = (qty * 18).toString();
}

// Checkout form validation and total calculation
function validateCheckoutForm() {
    var isValid = true;
    var dateEl = document.getElementById("visitDate");
    var typeEl = document.getElementById("ticketType");
    var qtyEl = document.getElementById("ticketQuantity");
    var emailEl = document.getElementById("email");
    var zipEl = document.getElementById("zip");

    var dateError = document.getElementById("visitDateError");
    var typeError = document.getElementById("ticketTypeError");
    var qtyError = document.getElementById("ticketQuantityError");
    var emailError = document.getElementById("emailError");
    var zipError = document.getElementById("zipError");

    if (dateError) dateError.textContent = "";
    if (typeError) typeError.textContent = "";
    if (qtyError) qtyError.textContent = "";
    if (emailError) emailError.textContent = "";
    if (zipError) zipError.textContent = "";

    if (!dateEl || !dateEl.value) {
        if (dateError) dateError.textContent = "Please select a visit date.";
        isValid = false;
    }
    if (!typeEl || !typeEl.value) {
        if (typeError) typeError.textContent = "Please select a ticket type.";
        isValid = false;
    }
    var qty = qtyEl ? parseInt(qtyEl.value, 10) : NaN;
    if (isNaN(qty) || qty < 1 || qty > 10) {
        if (qtyError) qtyError.textContent = "Quantity must be between 1 and 10.";
        isValid = false;
    }
    if (!emailEl || !emailEl.value) {
        if (emailError) emailError.textContent = "Email is required.";
        isValid = false;
    } else {
        var emailPattern = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
        if (!emailPattern.test(emailEl.value)) {
            if (emailError) emailError.textContent = "Please enter a valid email.";
            isValid = false;
        }
    }
    if (zipEl && zipEl.value) {
        var zipPattern = /^\\d{5}$/;
        if (!zipPattern.test(zipEl.value)) {
            if (zipError) zipError.textContent = "Zip code must be 5 digits.";
            isValid = false;
        }
    }

    return isValid;
}

function handleCheckoutSubmit(event) {
    if (event) {
        event.preventDefault();
    }
    if (!validateCheckoutForm()) {
        return false;
    }
    var qtyEl = document.getElementById("ticketQuantity");
    var qty = qtyEl ? parseInt(qtyEl.value, 10) : 0;
    var total = qty * 18;
    localStorage.setItem("monomuseTotal", total.toString());
    window.location.href = "confirmation.html";
    return false;
}

function initCheckout() {
    var form = document.getElementById("checkoutForm");
    var qtyEl = document.getElementById("ticketQuantity");
    var dateEl = document.getElementById("visitDate");
    var emailEl = document.getElementById("email");
    if (!form || !qtyEl) {
        return;
    }
    if (dateEl) {
        var storedDate = localStorage.getItem("monomuseSelectedDate");
        if (storedDate) {
            dateEl.value = storedDate;
        }
    }
    updateTotalPrice();
    qtyEl.addEventListener("input", updateTotalPrice);
    if (emailEl) {
        emailEl.addEventListener("input", function() {
            var emailError = document.getElementById("emailError");
            if (emailError) {
                emailError.textContent = "";
            }
        });
    }
    form.addEventListener("submit", handleCheckoutSubmit);
}

// Confirmation page total display
function initConfirmation() {
    var totalEl = document.getElementById("confirmationTotal");
    if (!totalEl) {
        return;
    }
    var total = localStorage.getItem("monomuseTotal");
    totalEl.textContent = total ? total : "0";
}

document.addEventListener("DOMContentLoaded", function() {
    initCheckout();
    initConfirmation();
    initGallery();
});

function initGallery() {
    var main = document.getElementById("galleryMain");
    if (!main) {
        return;
    }
    var images = [
        { src: "../static/pissarro-image.jpeg", alt: "Camille Pissarro exhibition" },
        { src: "../static/morisot-image.jpg", alt: "Berthe Morisot exhibition" },
        { src: "../static/cassatt-image.jpg", alt: "Mary Cassatt exhibition" }
    ];
    var current = 0;

    function updateGallery(index) {
        current = (index + images.length) % images.length;
        main.setAttribute("src", images[current].src);
        main.setAttribute("alt", images[current].alt);
    }

    var prevBtn = document.getElementById("galleryPrev");
    var nextBtn = document.getElementById("galleryNext");
    if (prevBtn) {
        prevBtn.addEventListener("click", function() {
            updateGallery(current - 1);
        });
    }
    if (nextBtn) {
        nextBtn.addEventListener("click", function() {
            updateGallery(current + 1);
        });
    }

    updateGallery(0);
}
