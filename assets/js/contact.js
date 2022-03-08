var selectedRow = null
document.getElementById('submit').onclick = function () {
    location.href  = '#infoList'
}

function onFormSubmit () {
    var formData = readFormData ();
    if (selectedRow == null)
        insertNewRecord(formData);
    else 
        updateRecord(formData);
    resetForm();
}

function readFormData () {
    var formData = {};
    formData["inputName"] = document.getElementById("inputName").value;
    formData["inputLastName"] = document.getElementById("inputLastName").value;
    formData["inputEmail"] = document.getElementById("inputEmail").value;
    formData["inputPhone"] = document.getElementById("inputPhone").value;
    formData["inputAddress"] = document.getElementById("inputAddress").value;
    formData["inputCity"] = document.getElementById("inputCity").value;
    formData["inputCountry"] = document.getElementById("inputCountry").value;
    formData["exampleFormControlTextarea1"]= document.getElementById("exampleFormControlTextarea1").value;
    return formData;
}

function insertNewRecord(data) {
    const containerTable = document.getElementById('infoList').getElementsByTagName('thead')[0];
    var table = document.getElementById('infoList').getElementsByTagName('tbody')[0];
    containerTable.innerHTML =` <tr>
    <th>Name</th>
    <th>Last Name</th>
    <th>Email</th>
    <th>Phone</th>
    <th>Address</th>
    <th>City</th>
    <th>Country</th>
    <th>Comments</th>
    <th>Actions</th>
    
    </tr>
    
    `
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.inputName;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.inputLastName;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.inputEmail;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.inputPhone;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.inputAddress;
    cell6 = newRow.insertCell(5);
    cell6.innerHTML = data.inputCity;
    cell7 = newRow.insertCell(6);
    cell7.innerHTML = data.inputCountry;
    cell8 = newRow.insertCell(7);
    cell8.innerHTML = data.exampleFormControlTextarea1;
    cell8 = newRow.insertCell(8);
    cell8.innerHTML = `
    <a onClick="onEdit(this)" style="border: 2px solid gray; background-color: green; color: white; cursor:pointer;">Edit</a>
    <a onClick="onDelete(this)" style="border: 2px solid gray; background-color: green; color: white; cursor:pointer;">Delete</a>
    <a onClick="reloadForm(this)" style="border: 2px solid gray; background-color: green; color: white; cursor:pointer;">Reset  Form</a>`;

    
    
}

function resetForm() {

    document.getElementById("inputName").value = "";
    document.getElementById("inputLastName").value = "";
    document.getElementById("inputEmail").value = "";
    document.getElementById("inputPhone").value = "";
    document.getElementById("inputAddress").value = "";
    document.getElementById("inputCity").value = "";
    document.getElementById("inputCountry").value = "";
    document.getElementById("exampleFormControlTextarea1").value = "";
    selectedRow = null;


}

function onEdit (td) {

    selectedRow = td.parentElement.parentElement;
    document.getElementById("inputName").value = selectedRow.cells[0].innerHTML;
    document.getElementById("inputLastName").value = selectedRow.cells[1].innerHTML;
    document.getElementById("inputEmail").value = selectedRow.cells[2].innerHTML;
    document.getElementById("inputPhone").value = selectedRow.cells[3].innerHTML;
    document.getElementById("inputAddress").value = selectedRow.cells[4].innerHTML;
    document.getElementById("inputCity").value = selectedRow.cells[5].innerHTML;
    document.getElementById("inputCountry").value = selectedRow.cells[6].innerHTML;
    document.getElementById("exampleFormControlTextarea1").value = selectedRow.cells[7].innerHTML;

}

function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.inputName;
    selectedRow.cells[1].innerHTML = formData.inputLastName;
    selectedRow.cells[2].innerHTML = formData.inputEmail;
    selectedRow.cells[3].innerHTML = formData.inputPhone;
    selectedRow.cells[4].innerHTML = formData.inputAddress;
    selectedRow.cells[5].innerHTML = formData.inputCity;
    selectedRow.cells[6].innerHTML = formData.inputCountry;
    selectedRow.cells[7].innerHTML = formData.exampleFormControlTextarea1;

}
function onDelete(td) {
    if (confirm('Do you want to delete this record?')) {
        row= td.parentElement.parentElement;
        document.getElementById("infoList").deleteRow(row.rowIndex);
        resetForm();
    }
}

function reloadForm () {
    if (confirm('Do you want to reload this form?'))
    location.reload()
}