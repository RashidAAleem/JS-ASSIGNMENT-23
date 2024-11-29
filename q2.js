// function messageContainer(){
//     var contentDiv = document.getElementById("message-container")

//     contentDiv.innerHTML = `
//     <h1>
//     Hello world</h1>
//     `
// }
// messageContainer();

// var user = {
//     // name: "Rana Rashid",
//     email: "rrashid.physics@gmail.com",
//     age: 37,
//     gender: "male",
//     city: "karachi",
//     country: "Pakistan",
// }
// if ('age' in user) {

//     console.log("'age' property exists in the user object")
    
// } else {
//     console.log("'age' property does not exists in the user object")
    
// }

// if ('firstName' in user) {
//     console.log("'firstName' property exists in the user object.");
// } else {
//     console.log("'firstName' property does not exist in the user object.");
// }

// if ('lastName' in user) {
//     console.log("'lastName' property exists in the user object.");
// } else {
//     console.log("'lastName' property does not exist in the user object.");
// }

// console.log(user);

// var user = {
//     name: "Rana Rashid",
//     email: "rrashid.physics@gmail.com",
//     age: 37,
//     gender: "male",
//     city: "karachi",
//     country: "Pakistan",
// }

// var properties = ['age', 'email', 'firstName', 'lastName'];

// for (var i = 0; i < properties.length; i++) {
//     var property = properties[i];

//     if (property in user) {
//                 console.log("'" + property + "' property exists in the user object.");
                
//             } else {
        
//         console.log("'" + property + "' property doesnot exist in the user object.");
//     }
    
// }


// var user = {
//     name: "Rana Rashid",
//     email: "rrashid.physics@gmail.com",
//     age: 37,
//     gender: "male",
//     city: "karachi",
//     country: "Pakistan",
// }

// var properties = ['age', 'email', 'firstName', 'lastName'];
// properties.forEach(function (property) {
//     if (property in user) {
//         console.log("'" + property + "' property exists in the user object.");
        
//     } else {
//         console.log("'" + property + "' property doesnot exist in the user object.");
        
//     }
    
// })


// function checkProperties() {
//     // Create an object with the required properties
//     var user = {
//         name: "John Doe",
//         email: "john.doe@example.com",
//         password: "securePassword123",
//         age: 30,
//         gender: "Male",
//         city: "New York",
//         country: "USA"
//     };

//     // Array of properties to check
//     var propertiesToCheck = ['age', 'country', 'firstName', 'lastName'];

//     // Reference to the content div
//     var contentDiv = document.getElementById("content");

//     // Create a result container
//     var resultHTML = '<div class="result"><ul>';

//     // Loop through each property and check if it exists
//     for (var i = 0; i < propertiesToCheck.length; i++) {
//         var property = propertiesToCheck[i];
//         if (property in user) {
//             resultHTML += `<li>'${property}' property exists in the user object.</li>`;
//         } else {
//             resultHTML += `<li>'${property}' property does not exist in the user object.</li>`;
//         }
//     }

//     // Close the result list
//     resultHTML += '</ul></div>';

//     // Display the result in the content div
//     contentDiv.innerHTML = resultHTML;
// }

// // Call the function to display results on the page
// checkProperties();


function checkProperties() {
    // Create an object with the required properties
    var user = {
        name: "John Doe",
        email: "john.doe@example.com",
        password: "securePassword123",
        age: 30,
        gender: "Male",
        city: "New York",
        country: "USA"
    };

    // Array of properties to check
    var propertiesToCheck = ['age', 'country', 'firstName', 'lastName'];

    // Generate HTML string for the results
    var resultHTML = '<div class="result"><ul>';
    for (var i = 0; i < propertiesToCheck.length; i++) {
        var property = propertiesToCheck[i];
        if (property in user) {
            resultHTML += `<li>'${property}' property exists in the user object.</li>`;
        } else {
            resultHTML += `<li>'${property}' property does not exist in the user object.</li>`;
        }
    }
    resultHTML += '</ul></div>';

    // Return the HTML string
    return resultHTML;
}

// Call the function and update the content div
document.getElementById("content").innerHTML = checkProperties();


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

    // User object with complete and incomplete data
    var user = {
        name: "John Doe",
        email: "john.doe@example.com",
        password: "securePassword123",
        age: 30,
        gender: "Male",
        city: "New York",
        country: "USA"
    };

    // Properties to check
    var propertiesToCheck = ['age', 'country', 'firstName', 'lastName'];

    // Generate table header
    var tableHTML = `
        <h3>User Data Table</h3>
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

    // Now create the resultHTML (property existence check) below the table
    var resultHTML = "<h4>Property Existence Status:</h4><ul>";
    propertiesToCheck.forEach(function(property) {
        if (property in user) {
            resultHTML += `<li>'${property}' exists in the user object.</li>`;
        } else {
            resultHTML += `<li>'${property}' does not exist in the user object.</li>`;
        }
    });
    resultHTML += "</ul>";  // Close the list

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


