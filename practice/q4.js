// Constructor function for a population record
function Person(name, gender, address, education, profession) {
    this.name = name;
    this.gender = gender;
    this.address = address;
    this.education = education;
    this.profession = profession;
}

// Save records in localStorage
function saveRecords(records) {
    localStorage.setItem("populationRecords", JSON.stringify(records));
}

// Retrieve records from localStorage
function getRecords() {
    var records = localStorage.getItem("populationRecords");
    return records ? JSON.parse(records) : [];
}

// Display records in a table
function displayRecords() {
    var records = getRecords();
    var recordTable = document.getElementById("recordTable");

    if (records.length === 0) {
        recordTable.innerHTML = "<p>No records found.</p>";
        return;
    }

    var tableHTML = `
        <table>
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
    `;

    for (var i = 0; i < records.length; i++) {
        var record = records[i];
        tableHTML += `
            <tr>
                <td>${i + 1}</td>
                <td>${record.name}</td>
                <td>${record.gender}</td>
                <td>${record.address}</td>
                <td>${record.education}</td>
                <td>${record.profession}</td>
            </tr>
        `;
    }

    tableHTML += "</tbody></table>";
    recordTable.innerHTML = tableHTML;
}

// Submit a new record
function submitRecord() {
    // Get form values
    var name = document.getElementById("name").value;
    var gender = document.querySelector('input[name="gender"]:checked')?.value;
    var address = document.getElementById("address").value;
    var education = document.getElementById("education").value;
    var profession = document.getElementById("profession").value;

    // Validate the form
    if (!name || !gender || !address || !education || !profession) {
        alert("Please fill in all fields.");
        return;
    }

    // Create a new record
    var newPerson = new Person(name, gender, address, education, profession);

    // Get existing records, add the new record, and save
    var records = getRecords();
    records.push(newPerson);
    saveRecords(records);

    // Clear the form
    document.getElementById("populationForm").reset();

    // Refresh the table
    displayRecords();
}

// Initial display of records
displayRecords();
