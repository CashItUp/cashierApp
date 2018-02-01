// Getting references to the name inout and author container, as well as the table body
var nameInput = $("#author-name");
var authorList = $("tbody");
var authorContainer = $(".author-container");
// Adding event listeners to the form to create a new object, and the button to delete
// an Author
$(document).on("submit", "#author-form", handleAuthorFormSubmit);
// $(document).on("click", ".delete-author", handleDeleteButtonPress);

// Getting the intiial list of Authors
getAuthors();


// A function to handle what happens when the form is submitted to create a new Author
function handleAuthorFormSubmit(event) {
  event.preventDefault();
  console.log("icli2cked")
  // Don't do anything if the name fields hasn't been filled out
  var authorSearched = $("#author-name").val().trim();
  if (!authorSearched) {
    return;
  }


  $.get("/api/author/" + authorSearched, function (data) {

    console.log(data);
    if(data!=null) {
    alert("Login Successful!")
    window.location.href = "/service"
    }

  }).then(alertMe);
}

//create new user if no user found
function alertMe(data) {

  if(data==null)
  alert("Get a userID from the manager")
}
// A function for creating an author. Calls getAuthors upon completion
function upsertAuthor(authorData) {
  $.post("/api/authors", authorData)
    .then(getAuthors);
}

function getAuthors() {
  $.get("/api/authors", function (data) {
    console.log(data);
  });
}

function renderBooks(data) {
  if (data.length !== 0) {
    console.log("monkey")
    $("#stats").empty();
    $("#stats").show();


    var div = $("<div>");

    div.append("<h2>" + data.id + "</h2>");
    div.append("<p>Author: " + data.name + "</p>");


    $("#stats").append(div);


    // $(".delete").click(function () {

    //   var info = {
    //     id: $(this).attr("data-id")
    //   };

    //   $.post("/api/delete", info)
    //     // On success, run the following code
    //     .done(function (deldata) {
    //       // Log the data we found
    //       console.log(deldata);
    //       console.log("Deleted Successfully!");
    //     });

    //   $(this).closest("div").remove();

    // });

  }
}

