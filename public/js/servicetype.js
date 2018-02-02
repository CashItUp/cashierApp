  // Gets the part of the url that comes after the "?" (which we have if we're updating a post)
  var url = window.location.search;
  var numberId;
  
    // If we have this section in our url, we pull out the post id from the url
  // In '?post_id=1', postId is 1
  if (url.indexOf("?number_id=") !== -1) {
    numberId = url.split("=")[1];
    $("#dinein").attr("href","/dine-in?number_id=" + numberId)
    $("#togo").attr("href","/To-Go?number_id=" + numberId)

    //getPostData(postId, "post");
  }
  // Otherwise if we have an employee_id in our url, preset the employee select box to be our Employee
//   else if (url.indexOf("?employee_id=") !== -1) {
//     employeeId = url.split("=")[1];
//   }