// from data.js
var tableData = data;
var tableBody = d3.select('tbody')

// YOUR CODE HERE!
console.log(tableData);

tableData.forEach((report) => {
    let newtr = tableBody.append("tr");
    let entries = Object.entries(report);
    entries.forEach(([key, value]) => {
        newtr.append("td").text(`${value}`);
    });
})

// Button Selection
var button = d3.select("#filter-btn");

button.on("click", function () {
    tableBody.html("");
    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#input");
    // get the value property of the input element
    var inputValue = inputElement.property("value");
    // Print the value to the console
    console.log(inputValue);

    // Add multiple criteria to filter function 
    var filterData = tableData.filter(report => report.datetime === inputValue ||
        report.city === inputValue ||
        report.state === inputValue ||
        report.country === inputValue ||
        report.shape === inputValue);
    console.log(filterData);

    // Add table according to the filter selected
    filterData.forEach(function (dateData) {
        console.log(dateData);
        // create the table row 
        var row = tableBody.append("tr");
        Object.entries(dateData).forEach(function ([key, value]) {
            console.log(key, value);
            // add the table data to the cell
            var cell = row.append("td");
            cell.text(value);
        });
    });
});

//}
