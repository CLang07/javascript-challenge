// from data.js
var tableData = data;

// YOUR CODE HERE!

// Get a reference to the table body
var tbody = d3.select("tbody");

// reference button with ids
var button = d3.select("#filter-btn-or");
var button_and =d3.select("#filter-btn-and");


// Create event handlers 
button.on("click", runFilter);
button_and.on("click",runFilter2)




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
    var inputElement_c = d3.select("#city");
    // Get the value property of the input element
    var inputValue_c = inputElement_c.property("value");
    // filter data to date specified
    var filtData_c = data.filter((row)=>row.city==inputValue_c);
    // rebuild table
    var inputElement_s = d3.select("#state");
    // Get the value property of the input element
    var inputValue_s = inputElement_s.property("value");
    // filter data to date specified
    var filtData_s = data.filter((row)=>row.state==inputValue_s);
    // rebuild table
    var inputElement_co = d3.select("#country");
    // Get the value property of the input element
    var inputValue_co = inputElement_co.property("value");
    // filter data to date specified
    var filtData_co = data.filter((row)=>row.country==inputValue_co);
    // rebuild table
    var inputElement_sh = d3.select("#shape");
    // Get the value property of the input element
    var inputValue_sh = inputElement_sh.property("value");
    // filter data to date specified
    var filtData_sh = data.filter((row)=>row.shape==inputValue_sh);
    // rebuild table
    // buildTable(filtData_dt,filtData_c,filtData_s,filtData_co,filtData_sh);
    buildTable(filtData_dt);
    buildTable(filtData_c);
    buildTable(filtData_s);
    buildTable(filtData_co);
    buildTable(filtData_sh);
    console.log(filtData_dt);

    // console.log(inputValue);
    
}

function runFilter2(){
    // clear table
    tbody.html("");
    // Prevent the page from refreshing
    d3.event.preventDefault();
    // Getting a reference to the input element on the page with the id property set to 'input-field'
    var inputElement_dt = d3.select("#datetime");
    // Get the value property of the input element
    var inputValue_dt = inputElement_dt.property("value");
    var inputElement_c = d3.select("#city");
    // Get the value property of the input element
    var inputValue_c = inputElement_c.property("value");
    var inputElement_s = d3.select("#state");
    // Get the value property of the input element
    var inputValue_s = inputElement_s.property("value");
    var inputElement_co = d3.select("#country");
    // Get the value property of the input element
    var inputValue_co = inputElement_co.property("value");
    var inputElement_sh = d3.select("#shape");
    // Get the value property of the input element
    var inputValue_sh = inputElement_sh.property("value");
    
    // create array of values inputed by user
    var inputValues = [inputValue_dt,inputValue_c,inputValue_s,inputValue_co,inputValue_sh];
    // create array of titles
    var inputTitles = ["datetime","city","state","country","shape"]; 

    // filter all data entered
    for (i=0;i<inputTitles.length;i++){ 
        if (inputValues[i]!=""){
            // actualInputs.push(inputValues[i]);
            var value = inputValues[i];
            var title = inputTitles[i];
            // var filterData = data.filter((row)=>row.==value);
            tableData = tableData.filter((row)=>row[title]==value);

            // buildTable(filterData);
            console.log(i);
            console.log(title);
            console.log(value);
            console.log(tableData);
        } 

    }
    // build new filtered table
    buildTable(tableData);
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
// uses function to build table of all data
buildTable(tableData);