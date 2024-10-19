const url = '';


function toggleDropdown(button) {
    let currencyList = null
    if (button.id === "currency-button-left") {
        currencyList = document.getElementById('currency-dropdown-left');
    }
    else {
        currencyList = document.getElementById('currency-dropdown-right');
    }


    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            for (let currencyCode in data.conversion_rates) {
                const currency = document.createElement("div");
                currency.textContent = `${currencyCode}`;
                currencyList.appendChild(currency);
            }
        })


    var dropdown = null;
    if (button.id === "currency-button-left") {
        dropdown = document.getElementById("currency-dropdown-left");
    }
    else {
        dropdown = document.getElementById("currency-dropdown-right");
    }
    dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
}




function selectCurrency(side) {




}
