let packagePrice = 0;
let packageName = "No package selected";

// Select package buttons
let buttons = document.querySelectorAll(".choose-btn");

buttons.forEach(function(button) {
    button.addEventListener("click", function() {
        packagePrice = Number(button.getAttribute("data-price"));
        packageName = button.getAttribute("data-package");

        document.getElementById("selectedPackage").innerText = packageName;

        calculateTotal();

        document.getElementById("calculator").scrollIntoView({
            behavior: "smooth"
        });
    });
});

// Budget Calculator
let extras = document.querySelectorAll(".extra");

extras.forEach(function(extra) {
    extra.addEventListener("change", calculateTotal);
});

function calculateTotal() {
    let total = packagePrice;

    extras.forEach(function(extra) {
        if (extra.checked) {
            total = total + Number(extra.value);
        }
    });

    document.getElementById("totalAmount").innerText =
        "₹" + total.toLocaleString("en-IN");
}

// Booking Form
let form = document.getElementById("bookingForm");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("customerName").value;
    let phone = document.getElementById("phone").value;
    let date = document.getElementById("eventDate").value;
    let location = document.getElementById("location").value;

    alert(
        "Thank you, " + name +
        "!\nYour booking request has been received." +
        "\nPackage: " + packageName +
        "\nDate: " + date +
        "\nLocation: " + location +
        "\nPhone: " + phone
    );

    form.reset();
});

// Design Selection Function
function selectDesign(name) {
    document.getElementById("selected").innerHTML =
        "Your selected design is: " + name;
}