function Person(name, age, gender, city) {
this.name = name;
this.age = age;
this.gender = gender;
this.city = city;    
}

var person1 = new Person("Alice", 28, "Female", "New York")
var person2 = new Person("Bob", 34, "Male", "Los Angeles");
var person3 = new Person("Charlie", 40, "Male", "Chicago");
var person4 = new Person("Diana", 25, "Female", "Houston");

var records = [person1, person2, person3, person4];

function displayRecords(){
var contentDiv = document.getElementById("content")
var html="";

// for (var i = 0; i < records.length; i++) {
//     var person = records[i];
//     html +=`
//     <div class = "record">
//     <h3>Record ${i+1}</h3>
//     <p> <strong>Name:</strong>${person.name}</p>
//     <p> <strong>Age:</strong>${person.age}</p>
//     <p> <strong>Gender:</strong>${person.city}</p>
//     </div>
//     `
    
// }

var tableHTML = `
        <table>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Gender</th>
                    <th>City</th>
                </tr>
            </thead>
            <tbody>
    `;

    // Loop through the records to create rows
    for (var i = 0; i < records.length; i++) {
        var person = records[i];
        tableHTML += `
            <tr>
                <td>${i + 1}</td>
                <td>${person.name}</td>
                <td>${person.age}</td>
                <td>${person.gender}</td>
                <td>${person.city}</td>
            </tr>
        `;
    }

    // Close the table
    tableHTML += `
            </tbody>
        </table>
    `;

    // Add the table to the content div
    contentDiv.innerHTML = tableHTML;
}

displayRecords();