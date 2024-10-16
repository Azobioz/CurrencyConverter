function toggleDropdown(button) {
    var dropdown = null;
    if (button.id === "currency-button-left") {
        dropdown = document.getElementById("currency-dropdown-left");
    }
    else {
        dropdown = document.getElementById("currency-dropdown-right");
    }
    dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
}

function selectCurrency(currency, side) {
    if (side === 'left') {
        document.getElementById("currency-button-left").innerText = currency;
        document.getElementById("currency-dropdown-left").style.display = "none";
    }
    else {
        document.getElementById("currency-button-right").innerText = currency;
        document.getElementById("currency-dropdown-right").style.display = "none";
    }
}
