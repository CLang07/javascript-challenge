// from data.js
var tableData = data;

// YOUR CODE HERE!

// Get a reference to the table body
var tbody = d3.select("tbody");

// reference button with id
var button = d3.select("#filter-btn");
// Select the form
var form = d3.select("#form");


// Create event handlers 
button.on("click", runFilter);
form.on("submit", runFilter);




function runFilter(){
    // clear table
    tbody.html("");
    // Prevent the page from refreshing
    d3.event.preventDefault();
    // Getting a reference to the input element on the page with the id property set to 'input-field'
    var inputElement_dt = d3.select("#datetime");
    // Get the value property of the input element
    var inputValue_dt = inputElement_dt.property("value");
    // filter data to date specified
    var filtData_dt = data.filter((row)=>row.datetime==inputValue_dt);
    // rebuild table
    buildTable(filtData_dt);
}


// Uses d3 to update each cell's text with
// UFO values (date, city, state, country, shape, duration, comments)

function buildTable(data){
    data.forEach(function(ufo_sighting) {
    console.log(ufo_sighting);
    var row = tbody.append("tr");
        Object.entries(ufo_sighting).forEach(function([key, value]) {
            console.log(key, value);
            // Appends a cell to the row for each value
            // in the tableData
            var cell = row.append("td");
            cell.text(value);
        });
    });
}
// build initial table with all data
buildTable(tableData);