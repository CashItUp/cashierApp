

//Clock 
function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('txt').innerHTML =
    h + ":" + m + ":" + s;
    var t = setTimeout(startTime, 500);
}
function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}
  

  //Numpad
  //Create value to hold
  var addNumber="";
  var submitNumber;

$("#button-7").on("click",function() {
   addNumber += this.value;
   $("#holder").val(addNumber)
});
$("#button-8").on("click",function() {
   addNumber += this.value;
   $("#holder").val(addNumber)
});
$("#button-9").on("click",function() {
   addNumber += this.value;
   $("#holder").val(addNumber)
});
$("#button-4").on("click",function() {
   addNumber += this.value;
   $("#holder").val(addNumber)
});
$("#button-5").on("click",function() {
   addNumber += this.value;
   $("#holder").val(addNumber)
});
$("#button-6").on("click",function() {
   addNumber += this.value;
   $("#holder").val(addNumber)
});
$("#button-1").on("click",function() {
   addNumber += this.value;
   $("#holder").val(addNumber)
});
$("#button-2").on("click",function() {
   addNumber += this.value;
   $("#holder").val(addNumber)
});
$("#button-3").on("click",function() {
   addNumber += this.value;
   $("#holder").val(addNumber)
});

  // "clear" button
      $("#button-clear").on("click", function() {
        addNumber=""
        $("#holder").val("")
      });
   // "Enter" button
      $("#button-enter").on("click", function(event) {
       
// match sql data here!!
// Save the id they typed into the addNumber input
  var IDSearch=addNumber;
  // Make an AJAX get request to our api, including the user's book in the url
  $.get("/api/" + IDSearch, function(data) {

    console.log(data);
    // Call our renderBooks function to add our books to the page
    renderID(data);
    });
  });



