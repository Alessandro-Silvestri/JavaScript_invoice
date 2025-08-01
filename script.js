function itemMakerRow() {
    let amount = 0;
    // Item table creation ///////////////////////////////////////
    let table = document.createElement("table");
    table.setAttribute("border", "0px");
    let tr = document.createElement("tr");
    table.appendChild(tr);

    // input Description
    let inputDescription = document.createElement("input");
    inputDescription.type = "text";
    inputDescription.id = "inputDescription";
    inputDescription.placeholder = "Description";
    inputDescription.size = "40";
    var td = document.createElement("td");
    td.appendChild(inputDescription);
    tr.appendChild(td);

    // input quantity
    let inputQuantity = document.createElement("input");
    inputQuantity.type = "text";
    inputQuantity.id = "inputQuantity";
    inputQuantity.size = "2";
    inputQuantity.placeholder = "Qt"
    var td = document.createElement("td");
    td.appendChild(inputQuantity);
    tr.appendChild(td);

    // input rate
    let inputRate = document.createElement("input");
    inputRate.type = "text";
    inputRate.id = "inputRate";
    inputRate.size = "2";
    inputRate.placeholder = "£";
    var td = document.createElement("td");
    td.appendChild(inputRate);
    tr.appendChild(td);

    // amount 
    var displayAmountNode = document.createTextNode(`£ ${amount}`);
    var td = document.createElement("td");
    td.appendChild(displayAmountNode);
    tr.appendChild(td);

    // button remove
    let inputRemoveButton = document.createElement("button");
    inputRemoveButton.id = "inputRemoveButton";
    inputRemoveButtonNode = document.createTextNode("X");
    inputRemoveButton.appendChild(inputRemoveButtonNode);
    var td = document.createElement("td");
    td.appendChild(inputRemoveButton);
    tr.appendChild(td);

    // remove behavior
    inputRemoveButton.addEventListener("click", () => {
        // remove the item row (it's not possible to remove all the rows)
        if (divItemsContainer.children.length > 1)
            inputRemoveButton.parentNode.parentNode.parentNode.remove();
    })





    

    /////////UNTIL HERE ///////////// AMOUNT CALCULATION //////////// BUG FIX /////////
    table.addEventListener("focusout", () => {
        amount = inputQuantity.value * inputRate.value;
        var displayAmountNode = document.createTextNode(`£ ${amount}`);
        table.children[0].children[3].innerHTML = displayAmountNode.value;
    })
    ///////////////////////////////////////////////////////////////////////////////////






    return table;
}

// objects
let divItemsContainer = document.getElementById("divItemsContainer");
let totalCalculationButton = document.getElementById("totalCalculationButton");
let totalDisplay = document.getElementById("totalDisplay");

divItemsContainer.appendChild(itemMakerRow());

let addItem = document.getElementById("addItem");
addItem.addEventListener("click", () => {
    divItemsContainer.appendChild(itemMakerRow());
})



