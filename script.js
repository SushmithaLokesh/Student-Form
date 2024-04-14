var in1 = document.getElementById("in1")
var in2 = document.getElementById("in2")
var radio = document.getElementsByName("Gender")
var in4 = document.getElementById("in4")
var in5 = document.getElementById("in5")
var table = document.getElementById("container")
var btn = document.getElementById("btn")

function create() {

    var row = document.createElement("tr");
    var cell1 = document.createElement("td");

    var cell2 = document.createElement("td");
    var cell3 = document.createElement("td");

    var cell4 = document.createElement("td");
    var cell5 = document.createElement("td");
    var cell6 = document.createElement("td")
    cell1.innerHTML = in1.value

    cell2.innerHTML = in2.value
    //  cell3.innerHTML = result
    if (radio[0].checked) {
        cell3.innerHTML = radio[0].value
    }
    else {
        cell3.innerHTML = radio[1].value
    }
    cell4.innerHTML = in4.value
    cell5.innerHTML = in5.value
    cell6.innerHTML = '<button onclick="deleteitem(event)" style=background-color:red; class="one">delete</button>';

    row.appendChild(cell1);

    row.appendChild(cell2);
    row.appendChild(cell3);

    row.appendChild(cell4);
    row.appendChild(cell5);
    row.appendChild(cell6);
    table.appendChild(row);

}
function deleteitem(event) {
    event.target.closest("tr").remove()
}