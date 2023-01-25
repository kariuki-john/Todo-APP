let selectedRow = null;
function onFormSubmit(e) {
    event.preventDefault();

    let formData = readFormData();
    if (selectedRow === null) {
        insertNewRecord(formData);
    } else if(
        updateRecord(formData)
    ){
       
    } else {
        moveTR();
    }
    DeletForm();
}

// Read operation using this function


function readFormData() {
    let formData = {};
    formData["Tittle"] = document.getElementById("Tittle").value;
    formData["description"] = document.getElementById("description").value;
    formData["startdate"] = document.getElementById("startdate").value;
    formData["enddate"] = document.getElementById("enddate").value;
    return formData;
}


// Create operation of the todolist


function insertNewRecord(data) {
    let table = document.getElementById("TodoList").getElementsByTagName('tbody')[0];
    let tr = table.insertRow(table.length);

    let cell1 = tr.insertCell(0);
    cell1.innerHTML = data.Tittle;

    let cell2 = tr.insertCell(1);
    cell2.innerHTML = data.description;

    let cell3 = tr.insertCell(2);
    cell3.innerHTML = data.startdate;

    let cell4 = tr.insertCell(3);
    cell4.innerHTML = data.enddate;

    let cell5 = tr.insertCell(4);
    cell5.innerHTML = `
                        <a href="#" onClick='onDelete(this)' style="background-color:"red"">Delete</a>
                        <a href="#" onClick='onEdit(this)' style="color:">Edit</a>
                        <a href="#" name="Done"id="Done" onClick="moveTR(this)"style="background-color:"green" '>Done</a>`;
}

// To Delete the data of fill input


function DeletForm() {
    document.getElementById('Tittle').value = '';
    document.getElementById('description').value = '';
    document.getElementById('startdate').value = '';
    document.getElementById('enddate').value = '';
    selectedRow = null;
}

// For Edit todolist

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById('Tittle').value = selectedRow.cells[0].innerHTML;
    document.getElementById('description').value = selectedRow.cells[1].innerHTML;
    document.getElementById('startdate').value = selectedRow.cells[2].innerHTML;
    document.getElementById('enddate').value = selectedRow.cells[3].innerHTML;
}

function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.Tittle;
    selectedRow.cells[1].innerHTML = formData.description;
    selectedRow.cells[2].innerHTML = formData.startdate;
    selectedRow.cells[3].innerHTML = formData.enddate;
}

function insert(formData) {
    selectedRow.cells[0].innerHTML = formData.Tittle;
    selectedRow.cells[1].innerHTML = formData.description;
    selectedRow.cells[2].innerHTML = formData.startdate;
    selectedRow.cells[3].innerHTML = formData.enddate;
}

function onDelete(td) {
    if (confirm('Are you sure you want to delete this record?')) {
        row = td.parentElement.parentElement;
        document.getElementById('TodoList').deleteRow(row.rowIndex);
        DeletForm();
    }
}

//completed tasks

const moveTR = (ev) => {
    const EL_tr = ev.currentTarget.closest(tr);
    const sel = EL_tr.closest("table").id === "TodoList" ? "#completedTodo" : "#TodoList";
    document.querySelector(sel + " tbody").append(EL_tr);
  };
  
  document.querySelectorAll("Done")
    .forEach(EL => EL.addEventListener("click", moveTR));


 function deletealltodos(){
    if (confirm('Are you sure you want to delete All Todos?'))
    location. reload() ;
 }