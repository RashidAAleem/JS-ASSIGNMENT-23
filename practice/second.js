var itemsArray = [
    { name: "juice", price: "50", quantity: "3" },
    { name: "cookie", price: "30", quantity: "9" },
    { name: "shirt", price: "880", quantity: "1" },
    { name: "pen", price: "100", quantity: "2" }
];

var tableBody = document.getElementById("itemsTable").querySelector("tbody");
var grandTotal = 0;

itemsArray.forEach(item=>{
    var row = document.createElement("tr");
    
    var nameCell = document.createElement("td");
    nameCell.textContent=item.name;
    row.appendChild(nameCell)

var priceCell =document.createElement("td")
priceCell.textContent=item.price;
row.appendChild(priceCell)

var quantityCell =document.createElement("td")
quantityCell.textContent=item.quantity;
row.appendChild(quantityCell)
var totalPriceCell = document.createElement("td");
totalPriceCell.textContent = item.price*item.quantity;
row.appendChild(totalPriceCell)


var totalPrice = item.price * item.quantity;
grandTotal += totalPrice;

tableBody.appendChild(row);
});


var grandTotalRow = document.getElementById("grandTotalRow");
grandTotalRow.classList.add("grand-total");


var grandTotalLabelCell = document.createElement("td");
grandTotalLabelCell.setAttribute("colspan", 3);
grandTotalLabelCell.textContent = "Grand Total"
grandTotalRow.appendChild(grandTotalLabelCell)

var grandTotalValueCell = document.createElement("td");
grandTotalValueCell.textContent = grandTotal;
grandTotalRow.appendChild(grandTotalValueCell)