$(document).ready(function() {
  // Getting references to the name inout and employee container, as well as the table body
  var nameInput = $("#employee-name");
  var idInput = $("#employee-id");
  var employeeList = $("tbody");
  var employeeContainer = $(".employee-container");
  // Adding event listeners to the form to create a new object, and the button to delete
  // an Employee
  $(document).on("submit", "#employee-form", handleEmployeeFormSubmit);
  $(document).on("click", ".delete-employee", handleDeleteButtonPress);

  // Getting the intiial list of Employees
  getEmployees();

  // A function to handle what happens when the form is submitted to create a new Employee
  function handleEmployeeFormSubmit(event) {
    event.preventDefault();
    // Don't do anything if the name fields hasn't been filled out
    if (!nameInput.val().trim().trim()) {
      return;
    }
    // Calling the upsertEmployee function and passing in the value of the name input
    upsertEmployee({
      name: nameInput.val(),
      idNumber: idInput.val()
    })
  }

  // A function for creating an employee. Calls getEmployees upon completion
  function upsertEmployee(employeeData) {
    $.post("/api/employees", employeeData)
      .then(getEmployees);
  }

  // Function for creating a new list row for employees
  function createEmployeeRow(employeeData) {
    var newTr = $("<tr>");
    newTr.data("employee", employeeData);
    newTr.append("<td>" + employeeData.name + "</td>");
    newTr.append("<td> " + employeeData.idNumber + "</td>");
    newTr.append("<td><a style='cursor:pointer;color:red' class='delete-employee'>Delete</a></td>");
    return newTr;
  }

  // Function for retrieving employees and getting them ready to be rendered to the page
  function getEmployees() {
    $.get("/api/employees", function(data) {
      var rowsToAdd = [];
      for (var i = 0; i < data.length; i++) {
        rowsToAdd.push(createEmployeeRow(data[i]));
      }
      renderEmployeeList(rowsToAdd);
      nameInput.val("");
    });
  }

  // A function for rendering the list of employees to the page
  function renderEmployeeList(rows) {
    employeeList.children().not(":last").remove();
    employeeContainer.children(".alert").remove();
    if (rows.length) {
      console.log(rows);
      employeeList.prepend(rows);
    }
    else {
      renderEmpty();
    }
  }

  // Function for handling what to render when there are no employees
  function renderEmpty() {
    var alertDiv = $("<div>");
    alertDiv.addClass("alert alert-danger");
    alertDiv.text("You must create an Employee before you can create a Post.");
    employeeContainer.append(alertDiv);
  }

  // Function for handling what happens when the delete button is pressed
  function handleDeleteButtonPress() {
    var listItemData = $(this).parent("td").parent("tr").data("employee");
    var id = listItemData.id;
    $.ajax({
      method: "DELETE",
      url: "/api/employees/" + id
    })
    .done(getEmployees);
  }
});
