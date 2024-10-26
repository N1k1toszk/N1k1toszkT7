function updatePrice() {
    let s = document.getElementsByName("type");
    let select = s[0];
    let price = 0;
    let prices = {
        types: [400, 300, 500],
        options: {
            2: 100,
        },
        checkboxes: {
            1: 40,
            2: 90,
            3: -50,
        }
    };
    price = prices.types[select.value - 1];
    let radioDiv = document.getElementById("radios");
    radioDiv.style.display = (select.value == "2" ? "block" : "none");
    let radios = document.getElementsByName("options");
    radios.forEach(function(radio) {
        if (radio.checked) {
            let optionPrice = prices.options[radio.value];
            if (optionPrice !== undefined) {
                price += optionPrice;
            }
        }
    });
    let checkDiv = document.getElementById("checkboxes");
    checkDiv.style.display = (select.value == "1" || select.value == "2" ? "none" : "block");
    let checkboxes = document.querySelectorAll("#checkboxes input");
    checkboxes.forEach(function(checkbox) {
        if (checkbox.checked) {
            let cPrice = prices.checkboxes[checkbox.name];
            price += cPrice;
        }
    });
    let count = document.getElementById("count").value;
    if(parseInt(count) < 0) {
        let Price = document.getElementById("price");
        Price.innerHTML = "Данные введены неправильно";
    }
    else {
        price *= count;
        if(select.value != "2") 
        {  
            if(select.value == "1") {
                price = prices.types[0] * count;
            }
        }
        else if(price/count-prices.types[select.value - 1] == 40 || price/count-prices.types[select.value - 1] == 140) {
        price -= 40 * count;
        }
        else if(price/count-prices.types[select.value - 1] == 90 || price/count-prices.types[select.value - 1] == 190) {
            price -= 90 * count;
        }
        else if(price/count-prices.types[select.value - 1] == -50 || price/count-prices.types[select.value - 1] == 50) {
            price -= -50 * count;
        }
        else if(price/count-prices.types[select.value - 1] == 130 || price/count-prices.types[select.value - 1] == 230) {
            price -= 130 * count;
        }
        else if(price/count-prices.types[select.value - 1] == -10 || price/count-prices.types[select.value - 1] == 90) {
            price -= -10 * count;
        }
        else if(price/count-prices.types[select.value - 1] == -40 || price/count-prices.types[select.value - 1] == 60) {
            price -= -40 * count;
        }
        else if(price/count-prices.types[select.value - 1] == 80 || price/count-prices.types[select.value - 1] == 180) {
            price -= 80 * count;
        }
        let Price = document.getElementById("price");
        Price.innerHTML = price + " рублей";
    }
}
window.addEventListener('DOMContentLoaded', function (event) {
    let radioDiv = document.getElementById("radios");
    radioDiv.style.display = "none";
    let s = document.getElementsByName("type");
    let select = s[0];
    select.addEventListener("change", function(event) {
        updatePrice();
    });
    let count = document.getElementById("count");
    count.addEventListener("change", function(event) {
        updatePrice();
    });
    let radios = document.getElementsByName("options");
    radios.forEach(function(radio) {
        radio.addEventListener("change", function(event) {
            updatePrice();
        });
    });
    let checkboxes = document.querySelectorAll("#checkboxes input");
    checkboxes.forEach(function(checkbox) {
        checkbox.addEventListener("change", function(event) {
            updatePrice();
        });
    });
    updatePrice();
});
