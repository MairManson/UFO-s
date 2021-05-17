// import the data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");

// Create a function to iterate through data and append to table row
// First, clear existing data
function buildTable(data) {
    tbody.html("");
    //iterate through data and append to table row
    data.forEach((dataRow) => {
        let row = tbody.append("tr");
        //  loop through each field in the dataRow and wrap data in <td> tags
        Object.values(dataRow).forEach((val) => {
        let cell = row.append("td");
        cell.text(val);
        }
   );
 });
}
// Ad onClick event button w/D3
function handleClick(){
    let date = d3.select("#datetime").property("value");
    // Filter data by date
    let filteredData = tableData;
    if (date) {
        filteredData = filteredData.filter(row => row.datetime === date);
    }
    buildTable(filteredData);
}
// D3 listens for button click
d3.selectAll("#filter-btn").on("click", handleClick);

// Load unfiltered original imported data 
buildTable(tableData);
