var itemsArray = [
    { name: "juice", price: "50", quantity: "3" },
    { name: "cookie", price: "30", quantity: "9" },
    { name: "shirt", price: "880", quantity: "1" },
    { name: "pen", price: "100", quantity: "2" }
];

document.getElementById("juice").textContent  = itemsArray[0].price*itemsArray[0].quantity
document.getElementById("cookie").textContent  = itemsArray[1].price*itemsArray[1].quantity
document.getElementById("shirt").textContent  = itemsArray[2].price*itemsArray[2].quantity
document.getElementById("pen").textContent  = itemsArray[3].price*itemsArray[3].quantity
document.getElementById("grandTotal").textContent  = itemsArray[3].price*itemsArray[3].quantity
// console.log(juice)



document.getElementById("grandTotal").textContent =
            "Grand Total: " +
            (parseInt(document.getElementById("juice").textContent) +
            parseInt(document.getElementById("cookie").textContent) +
            parseInt(document.getElementById("shirt").textContent) +
            parseInt(document.getElementById("pen").textContent));
// document.write (itemsArray)