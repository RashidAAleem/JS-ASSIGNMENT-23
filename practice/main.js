function displayQuestion() {
    var contentDiv = document.getElementById("content");

    contentDiv.innerHTML = `
    <div class="answer-container">
        <h2>Q1: Suppose You have an array of objects:</h2>
        <pre>
var itemsArray = [
{name: "juice", price: 50, quantity: 3},
{name: "cookie", price: 30, quantity: 9},
{name: "shirt", price: 880, quantity: 1},
{name: "pen", price: 100, quantity: 2}
];
        </pre>
        <h3>Calculate the total price of each item and the total price of all items.</h3>
        <button onclick="displayAnswer()">Answer</button>
    </div>
`;
}

function displayAnswer() {
    // Disable the button to prevent multiple clicks
    var answerButton = document.querySelector(".answer-container button");
    if (answerButton) {
        answerButton.disabled = true; // Disable the button
    }

    var contentDiv = document.getElementById("content");

    // Append the answer table and a close button to the content
    contentDiv.innerHTML += `
        <div class="answer-container">
            <table id="itemsTable">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total Price</th>
                    </tr>
                </thead>
                <tbody>
                    <!-- Rows will be generated dynamically -->
                </tbody>
                <tfoot>
                    <tr class="grand-total-row">
                        <td colspan="3">Grand Total</td>
                        <td id="grandTotal"></td>
                    </tr>
                </tfoot>
            </table>
            <button onclick="closeAnswer()">Close</button> <!-- Close button -->
        </div>
    `;

    // Data array
    var itemsArray = [
        { name: "juice", price: 50, quantity: 3 },
        { name: "cookie", price: 30, quantity: 9 },
        { name: "shirt", price: 880, quantity: 1 },
        { name: "pen", price: 100, quantity: 2 }
    ];

    // Reference to table body
    var tableBody = document.querySelector("#itemsTable tbody");

    // Calculate grand total
    var grandTotal = 0;

    // Generate table rows
    itemsArray.forEach(function(item) {
        var row = document.createElement("tr");

        // Generate table cells for name, price, quantity, and total price
        row.innerHTML = `
            <td>${item.name}</td>
            <td>${item.price}</td>
            <td>${item.quantity}</td>
            <td>${item.price * item.quantity}</td>
        `;

        // Append row to table body
        tableBody.appendChild(row);

        // Add to grand total
        grandTotal += item.price * item.quantity;
    });

    // Update grand total cell
    document.getElementById("grandTotal").textContent = grandTotal;
}

// Function to close the answer section
function closeAnswer() {
    var contentDiv = document.getElementById("content");

    // Remove the answer container from the contentDiv
    var answerContainer = document.querySelector(".answer-container");
    if (answerContainer) {
        contentDiv.removeChild(answerContainer);
    }
}


