var propertyValue = document.getElementById("propertyValue");

var commissionSaleDisplay = document.getElementById("commissionSaleDisplay");
var agentsPortionDisplay = document.getElementById("agentsPortionDisplay");
var brokerPortionDisplay = document.getElementById("brokerPortionDisplay");
var takeHomeDisplay = document.getElementById("takeHomeDisplay");

var agentPortion = 2.5;
var commission = 5;
var brokerPortion = 20;

/**
 * The function `getCommission` removes the percentage sign from the text content of an element and
 * assigns the resulting value to the variable `commission`.
 * @param el - The parameter `el` is a reference to an HTML element.
 */
function getCommission(el) {
    let _ = el.textContent;
    _ = _.replace("%", "")
    commission = _;
    console.log(commission);
}

/**
 * The function `getAgentPortion` removes the percentage sign from the text content of an element and
 * assigns the resulting value to the `agentPortion` variable.
 * @param el - The parameter `el` is expected to be an element object, representing an HTML element.
 */
function getAgentPortion(el) {
    let _ = el.textContent;
    _ = _.replace("%", "")
    agentPortion = _;
    console.log(agentPortion);
}


/**
 * The function `getBrokerPortion` removes the percentage sign from the text content of an element and
 * assigns the resulting value to the variable `flatRate`.
 * @param el - The `el` parameter is a reference to an HTML element.
 */
function getBrokerPortion(el) {
    let _ = el.textContent;
    _ = _.replace("%", "")
    brokerPortion = _;
    console.log(brokerPortion);
}

function getInputValue(el) {
    let value = el.value;
    if (el.classList.contains("error")) {
        return;
    }
    else {
        calculate();
    }
}

function reset() {
    billTotal.value = "";
    customTip.value = "";
    numOfPeople.value = "";
}

function submit() {
    calculate();
}

$(document).ready(function (e) {
    if (e.keyCode == 13) {
        e.preventDefault();
        alert("enter was pressed");
    }
});

$(document).ready(function () {
    $('.body input[type="text"]').blur(function () {
        if ($(this).val() == "0") {
            console.log("cant be 0")
        }
        else if ($(this).val()) {
            $(this).removeClass("error");
        }
    });
});

function calculate() {
    console.log(propertyValue.value)
    console.log(commission)
    console.log(agentPortion)
    console.log(brokerPortion)

    
}