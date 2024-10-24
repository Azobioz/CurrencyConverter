

const url = ''; // key url
console.log(url)

function toggleDropdown(button) {
    let currencyList = null
    if (button.id === "currency-button-left") {
        currencyList = document.getElementById('currency-dropdown-left');
    }
    else {
        currencyList = document.getElementById('currency-dropdown-right');
    }

    currencyList.innerHTML = ''

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

                currency.addEventListener('click', () => selectCurrency(button, currencyCode));
                currency.addEventListener('click', () => {
                    if (button.id === "currency-button-left") {
                        setCurrencyValueAndCalculate(document.getElementById("left-value"));
                    }
                    else {
                        setCurrencyValueAndCalculate(document.getElementById("right-value"));
                    }
                });
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


function selectCurrency(button, currencyName) {

    button.textContent = currencyName;

    if (button.id === "currency-button-left") {
        document.getElementById("currency-dropdown-left").style.display = "none";
    }
    else {
        document.getElementById("currency-dropdown-right").style.display = "none";
    }

}

function setCurrencyValueAndCalculate(input) {

    if (input.id === "left-value") {
        let leftInput = document.getElementById("left-value");
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok ' + response.statusText);
                }
                return response.json();
            })
            .then(data => {
                const currencyType = document.getElementById("currency-button-left").textContent;

                const exchangeRate = data.conversion_rates[currencyType];


                const rightInput = document.getElementById("right-value");
                rightInput.value = ((exchangeRate * leftInput.value) * data.conversion_rates[document.getElementById("currency-button-right").textContent]).toFixed(2);


            })
    }
    else if (input.id === "right-value"){
        let rightInput = document.getElementById("right-value");
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok ' + response.statusText);
                }
                return response.json();
            })
            .then(data => {
                const currencyType = document.getElementById("currency-button-right").textContent;

                const exchangeRateRight = data.conversion_rates[currencyType];
                const exchangeRateLeft = data.conversion_rates[document.getElementById("currency-button-left").textContent];
                const leftInput = document.getElementById("left-value");
                const rightInput = document.getElementById("right-value");

                leftInput.value = ((exchangeRateLeft / exchangeRateRight) * rightInput.value).toFixed(2);


            })
    }

}