
var url = window.location.search;
var numberId;
var tableId;
var tableIndexOfNumberId;
  // If we have this section in our url, we pull out the post id from the url
// In '?post_id=1', postId is 1
if (url.indexOf("?number_id=") !== -1) {
  var tempArray=url.split("?");
  numberId= tempArray[1].split("=")[1]
  //getPostData(postId, "post");
}
//Test code

$("#datamain").attr("href","/service?number_id=" + numberId)



  

// $.each(countries, function(i)

// {   
//     var li = $('<li/>')
  
//         .appendTo('#order1');

//     var aaa = $('<a/>')
//         .text(countries[i])
//         .appendTo(li);
// });


$("#complete-order").click(handleDeleteButtonPress);
var currentOrders
getOrders();
function getOrders() {
    $.get("/api/orders", function (data) {

        currentOrders = data;

    }).then(parseData).then(clearTrailingData);
}


var orderNumber= 0;
function parseData () {
    var lastOrder = currentOrders.shift();
    orderNumber = 0;
while(lastOrder!=undefined)
{    
    orderNumber++;
    var databaseid = lastOrder["id"];
    $("#order" + orderNumber).attr("databaseid",lastOrder["id"])
    $("#order" + orderNumber).children("li").remove()
    for (var i = 1; i <= 10; i++) {
        if (lastOrder["food" + i].name != undefined) {
            var name = lastOrder["food" + i].name;
           // var price = parseInt(lastOrder["food" + i].price);
            var quantity = parseInt(lastOrder["food" + i].quantity);
            //var total = price * quantity;
            //var symbol = "$"
            //document.getElementById('entries').innerHTML += '<tr><th>' + name +" x "+quantity+ '</th><td>' + symbol + total + '</td></tr>';
            var li = $('<li/>')
  
            .appendTo('#order'+ orderNumber);
            var aaa = $('<a/>')
        .text(name + " x " + quantity)
        .appendTo(li);

        }
        else {
            
        }
        //document.getElementById('total').innerHTML = ("$"+lastOrder.total)
    }
    lastOrder = currentOrders.shift();
}
}

function clearTrailingData() {
    if(orderNumber < 6)
    {
    orderNumber++;
    $("#order" + orderNumber).children("li").remove()
    }
}
function handleFormSubmit(event) {
    event.preventDefault();
   
  }

  // Function for handling what happens when the delete button is pressed
  function handleDeleteButtonPress() {
    event.preventDefault();
    var listItemData = $(this).parent("td").parent("tr").data("employee");
    
    var id = $("#order1").attr("databaseid");
    $.ajax({
      method: "DELETE",
      url: "/api/orders/" + id
    })
    .done(getOrders);
  }
// $.get("/api/ordersall/" + numberId, function (data) {


//     for (var i = 1; i <= 10; i++) {
//         console.log(lastOrder)
//         console.log("monkey")
//         if (lastOrder["food" + i].name != undefined) {
//             var name = lastOrder["food" + i].name;
//             var price = parseInt(lastOrder["food" + i].price);
//             var quantity = parseInt(lastOrder["food" + i].quantity);
//             var total = price * quantity;
//             var symbol = "$"
//             document.getElementById('entries').innerHTML += '<tr><th>' + name +" x "+quantity+ '</th><td>' + symbol + total + '</td></tr>';
//         }
//         else {

//         }
//         document.getElementById('total').innerHTML = ("$"+lastOrder.total)
//     }
// });