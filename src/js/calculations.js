const propertyValue = document.getElementById("propertyValue");
const commissionSaleDisplay = document.getElementById("commissionSaleDisplay");
const agentsPortionDisplay = document.getElementById("agentsPortionDisplay");
const brokerPortionDisplay = document.getElementById("brokerPortionDisplay");
const takeHomeDisplay = document.getElementById("takeHomeDisplay");

let commission = 5;
let agentPortion = 2.5;
let brokerPortion = 20;

function getCommission(el) {
    const commissionValue = el.textContent.replace("%", "");
    commission = commissionValue;
    updateVisitedState(".btn-group.commission button", el);
    console.log(commission);
}

function getAgentPortion(el) {
    const agentPortionValue = el.textContent.replace("%", "");
    agentPortion = agentPortionValue;
    updateVisitedState(".btn-group.agents button", el);
    console.log(agentPortion);
}

function getBrokerPortion(el) {
    const brokerPortionValue = el.textContent.replace("%", "");
    brokerPortion = brokerPortionValue;
    updateVisitedState(".btn-group.brokers button", el);
    console.log(brokerPortion);
}

function updateVisitedState(selector, clickedButton) {
    const buttons = document.querySelectorAll(selector);
    buttons.forEach(button => {
        if (button === clickedButton) {
            button.classList.add("visited");
        } else {
            button.classList.remove("visited");
        }
    });
}

function getInputValue(el) {
    if (el.classList.contains("error")) {
        return;
    } else {
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

document.addEventListener("keydown", function(e) {
    if (e.keyCode == 13) {
        e.preventDefault();
        alert("Enter was pressed");
    }
});

$('.body input[type="text"]').blur(function () {
    if ($(this).val() == "0") {
        console.log("Cannot be 0");
    } else if ($(this).val()) {
        $(this).removeClass("error");
    }
});

function calculate() {
    console.log(propertyValue.value);
    console.log(commission);
    console.log(agentPortion);
    console.log(brokerPortion);

    commissionSaleDisplay.innerHTML = "$" + propertyValue.value * (commission / 100);
    agentsPortionDisplay.innerHTML = "$" + propertyValue.value * (agentPortion / 100);
    brokerPortionDisplay.innerHTML = "$" + agentsPortionDisplay.innerHTML * (brokerPortion / 100);
    takeHomeDisplay.innerHTML = "$" + agentsPortionDisplay.innerHTML - brokerPortionDisplay.innerHTML;
}
