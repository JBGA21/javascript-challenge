// from data.js
var tableData = data;
var tableBody = d3.select('tbody')

// YOUR CODE HERE!
function buildTable(data) {
    data.forEach((rowData) => {
        const row = tableBody.append("tr")

    });
}

function handleClick() {

}

d3.selectAll("#filter-btn").on('click', handleClick)

buildTable(tableData)