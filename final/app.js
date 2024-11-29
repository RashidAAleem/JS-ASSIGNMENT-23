function displayQuestion(questionId) {
    
        var contentDiv = document.getElementById("content");
        contentDiv.classList.add("active");

        if (questionId === "q1") {
            contentDiv.innerHTML =  `
            <h2>Question 1</h2>
            <p>Suppose you have an array of objects. Calculate total price of each item and all items.</p>
            <pre>
var itemsArray = [
    {name: "juice", price: 50, quantity: 3},
    {name: "cookie", price: 30, quantity: 9},
    {name: "shirt", price: 880, quantity: 1},
    {name: "pen", price: 100, quantity: 2}
];
            </pre>
            <p>Calculate total price of each item and all items.</p>
            <button onclick="displayAnswer1()">Answer</button>
        `;
    } else if (questionId === "q2") {
        contentDiv.innerHTML = `
            <h2>Question 2</h2>
            <p>Q2: Create an object with properties name, email, password, age, gender, city, country.
            Check if certain properties exist.</p>
            <button onclick="displayAnswer2()">Answer</button>
        `;
    } else if (questionId === "q3") {
        contentDiv.innerHTML = `
            <h2>Question 3</h2>
            <p>Q3: Create a constructor function to generate multiple records. Display the records in a table.</p>
            <button onclick="displayAnswer3()">Answer</button>
        `;
    } else if (questionId === "q4") {
        contentDiv.innerHTML = `
            <h2>Question 4</h2>
            <p>Q4: Check the population of an area. Enter records for name, gender, address, education, and profession.
            Use radio buttons and dropdowns for input.</p>
            <button onclick="displayAnswer4()">Answer</button>
        `;
    }
}

function displayAnswer1() {
    var contentDiv = document.getElementById("content")
if (document.getElementById("answer1")) {
    return;
    
}
var answerDiv = document.createElement("div");
answerDiv.id = "answer1";
answerDiv.innerHTML = `
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
                        <button onclick="closeAnswer1()">Close</button>
        </div>
`;
contentDiv.appendChild(answerDiv);
  
var itemsArray = [
    { name: "juice", price: 50, quantity: 3 },
    { name: "cookie", price: 30, quantity: 9 },
    { name: "shirt", price: 880, quantity: 1 },
    { name: "pen", price: 100, quantity: 2 }
];

var tableBody = document.querySelector("#itemsTable tbody");
var grandTotal = 0;
itemsArray.forEach(function(item) {
    var row = document.createElement("tr");
    row.innerHTML = `
            <td>${item.name}</td>
            <td>${item.price}</td>
            <td>${item.quantity}</td>
            <td>${item.price * item.quantity}</td>
        `;
        tableBody.appendChild(row);
        grandTotal += item.price * item.quantity;

})
document.getElementById("grandTotal").textContent = grandTotal;
}

function closeAnswer1() {
    var answerDiv = document.getElementById("answer1");
    if (answerDiv) {
        answerDiv.remove();
        
    }
}

function displayAnswer2() {
    var contentDiv = document.getElementById("content");

    // Prevent duplicate content
    if (document.getElementById("answer2")) {
        return;
    }

    // Create the answer container
    var answerDiv = document.createElement("div");
    answerDiv.id = "answer2";
    answerDiv.className = "answer-container";

    // Users array with complete and incomplete data
    var user = {
        name: "John Doe",
        email: "john.doe@example.com",
        password: "securePassword123",
        age: 30,
        gender: "Male",
        city: "New York",
        country: "USA"
    };

    var propertiesToCheck = ['age', 'country', 'firstName', 'lastName'];

    // Generate table header
    var tableHTML = `
        <h3>Object Properties</h3>
        <table id="userTable">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Password</th>
                    <th>Age</th>
                    <th>Gender</th>
                    <th>City</th>
                    <th>Country</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>${user.name || "N/A"}</td>
                <td>${user.email || "N/A"}</td>
                <td>${user.password || "N/A"}</td>
                <td>${user.age || "N/A"}</td>
                <td>${user.gender || "N/A"}</td>
                <td>${user.city || "N/A"}</td>
                <td>${user.country || "N/A"}</td>
            </tr>
             </tbody>
        </table>
        
        `;
        var resultHTML = "<h4>Property Existence Status:</h4><ul>";
        propertiesToCheck.forEach(function(property) {
            if (property in user) {
                resultHTML += `<li>'${property}' exists.</li>`;
            } else {
                resultHTML += `<li>'${property}' does not exist.</li>`;
            }
        });
        resultHTML += `</ul>
        <button onclick="closeAnswer2()">Close</button>`;
    
        // Combine table and result into the answer container
        answerDiv.innerHTML = tableHTML + resultHTML;
    
        // Append the answer container to the content div
        contentDiv.appendChild(answerDiv);
    }
    
    // Function to close and clear the answer
    function closeAnswer2() {
        var answerDiv = document.getElementById("answer2");
        if (answerDiv) {
            answerDiv.remove();
        }
    }

    //q3
   
    
    
    function displayAnswer3() {
        // Check if the answer3 div exists, if not, create it
        var contentDiv = document.getElementById("content");
        if (document.getElementById("answer3")) {
            return
            
        }
        var answerDiv = document.createElement("div");
            answerDiv.id = "answer3";
            answerDiv.className = "answer-container";
            document.body.appendChild(answerDiv);
        
            function User(name, email, age, gender, city, country) {
                this.name = name;
                this.email = email;
                this.age = age;
                this.gender = gender;
                this.city = city;
                this.country = country;
        
               }
               var users = [
                new User("John Doe", "john.doe@example.com", 30, "Male", "New York", "USA"),
                new User("Jane Smith", "jane.smith@example.com", 25, "Female", "Los Angeles", "USA"),
                new User("Michael Johnson", "michael.johnson@example.com", 40, "Male", "Chicago", "USA"),
                new User("Emily Davis", "emily.davis@example.com", 22, "Female", "Toronto", "Canada"),
                new User("David Brown", "david.brown@example.com", 35, "Male", "Vancouver", "Canada")
            ];
    
        // Create the table HTML
        var tableHTML = `
            <table id="userTable" border="1" style="border-collapse: collapse; width: 100%; text-align: left;">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Age</th>
                        <th>Gender</th>
                        <th>City</th>
                        <th>Country</th>
                    </tr>
                </thead>
                <tbody>
        `;
    
        // Loop through users to populate table rows
        for (var i = 0; i < users.length; i++) {
            var user = users[i];
            tableHTML += `
                <tr>
                    <td>${i + 1}</td>
                    <td>${user.name}</td>
                    <td>${user.email}</td>
                    <td>${user.age}</td>
                    <td>${user.gender}</td>
                    <td>${user.city}</td>
                    <td>${user.country}</td>
                </tr>
            `;
        }
    
        // Close the table and add a "Close" button
        tableHTML += `
                </tbody>
            </table>
            <button onclick="closeAnswer3()" style="margin-top: 10px;">Close</button>
        `;
    
        // Set the content of the answerDiv
        answerDiv.innerHTML = tableHTML;
        contentDiv.appendChild(answerDiv);
    }
    
    // Function to close and clear the table
    function closeAnswer3() {
        var answerDiv = document.getElementById("answer3");
        if (answerDiv) {
            answerDiv.remove();
        }
    }
    
    // // Constructor function for creating user objects
    // function User(name, email, age, gender, city, country) {
    //     this.name = name;
    //     this.email = email;
    //     this.age = age;
    //     this.gender = gender;
    //     this.city = city;
    //     this.country = country;
    // }
      
    

    //q4

// Person constructor
function Person(name, gender, address, education, profession) {
    this.name = name;
    this.gender = gender;
    this.address = address;
    this.education = education;
    this.profession = profession;
}

// Function to get records from local storage or return an empty array if none exist
function getRecords() {
    var records = localStorage.getItem("populationRecords");
    return records ? JSON.parse(records) : [];
}

// Function to save records to local storage
function saveRecords(records) {
    localStorage.setItem("populationRecords", JSON.stringify(records));
}

function displayAnswer4() {
    var contentDiv = document.getElementById("content");

    // Prevent creating duplicate form
    if (document.getElementById("answer4")) {
        return;
    }

    var answerDiv = document.createElement("div");
    answerDiv.id = "answer4";
    answerDiv.className = "answer-container";

    // Form and table HTML
    answerDiv.innerHTML = `
        <h3> Enter Population Record</h3>
        <form id="populationForm" onsubmit="return addRecord()">
            <label for="name">Name:</label><br>
            <input type="text" id="name" name="name" required><br><br>

            <label for="gender">Gender:</label><br>
            <input type="radio" id="male" name="gender" value="Male" required> Male
            <input type="radio" id="female" name="gender" value="Female"> Female
            <input type="radio" id="other" name="gender" value="Other"> Other<br><br>

            <label for="address">Address:</label><br>
            <input type="text" id="address" name="address" required><br><br>

            <label for="education">Education:</label><br>
            <select id="education" name="education" required>
                <option value="" disabled selected>Select Education</option>
                <option value="High School">High School</option>
                <option value="Undergraduate">Undergraduate</option>
                <option value="Postgraduate">Postgraduate</option>
                <option value="Other">Other</option>
            </select><br><br>

            <label for="profession">Profession:</label><br>
            <input type="text" id="profession" name="profession" required><br><br>

            <button type="submit">Add Record</button>
        </form>
        
        <h3>Population Records</h3>
        <table id="recordsTable" border="1" style="border-collapse: collapse; width: 100%; text-align: left;">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Gender</th>
                    <th>Address</th>
                    <th>Education</th>
                    <th>Profession</th>
                </tr>
            </thead>
            <tbody>
                <!-- Records will be dynamically added here -->
            </tbody>
        </table>
        <button onclick="closeAnswer4()" style="margin-top: 10px;">Close</button>
    `;

    contentDiv.appendChild(answerDiv);

    // Load existing records into the table
    loadRecords();
}

// Function to add a new record
function addRecord() {
    var name = document.getElementById("name").value;
    var gender = document.querySelector('input[name="gender"]:checked')?.value;
    var address = document.getElementById("address").value;
    var education = document.getElementById("education").value;
    var profession = document.getElementById("profession").value;

    // Validate fields
    if (!name || !gender || !address || !education || !profession) {
        alert("Please fill out all fields.");
        return false; // Prevent form submission
    }

    // Create new Person object and update records
    var newPerson = new Person(name, gender, address, education, profession);
    var records = getRecords();
    records.push(newPerson);
    saveRecords(records);

    // Update the table with the new record
    appendRecordToTable(newPerson, records.length);

    // Reset the form
    document.getElementById("populationForm").reset();

    return false; // Prevent form submission
}

// Function to append a single record to the table
function appendRecordToTable(person, index) {
    var tableBody = document.getElementById("recordsTable").querySelector("tbody");

    var row = tableBody.insertRow();
    row.innerHTML = `
        <td>${index}</td>
        <td>${person.name}</td>
        <td>${person.gender}</td>
        <td>${person.address}</td>
        <td>${person.education}</td>
        <td>${person.profession}</td>
    `;
}

// Function to load records into the table
function loadRecords() {
    var records = getRecords();
    var tableBody = document.getElementById("recordsTable").querySelector("tbody");

    // Clear existing table rows
    tableBody.innerHTML = "";

    // Append all records
    records.forEach((person, index) => {
        appendRecordToTable(person, index + 1);
    });
}

// Function to close and remove the answer4 section
function closeAnswer4() {
    var answerDiv = document.getElementById("answer4");
    if (answerDiv) {
        answerDiv.remove();
        localStorage.removeItem("populationRecords");
    }
}

