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


var button = d3.select("#filter-btn");

button.on("click", function () {
    tableBody.html("");
    var inputElement = d3.select("#datetime");
    var inputValue = inputElement.property("value");
    console.log(inputValue);
    var filterData = tableData.filter(report => report.datetime === inputValue);
    console.log(filterData);
})

//}

//d3.selectAll("#filter-btn").on('click', handleClick)

//buildTable(tableData)