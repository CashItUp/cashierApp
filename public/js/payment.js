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

if (url.indexOf("?table_id=") !== -1) {
  var tempArray=url.split("?");
  tableId= tempArray[2].split("=")[1]
  //getPostData(postId, "post");
}else{
  tableId=0;//tableId 0 for takeout
}

var total = 0;

//document.getElementById('entry').onsubmit = enter;
{/* <th>Total</th>
<th id="total">$0.00</th> */}

function enter(input) {
  var entry = input
  //var entry = parseFloat(entry);
  //currency = currencyFormat(entry);
  document.getElementById('entries').innerHTML += '<tr><td></td><td>' + currency + '</td></tr>';
  total += entry;
  document.getElementById('total').innerHTML = currencyFormat(total);
  
  //document.getElementById('newEntry').value = '';
  return false;
}

function currencyFormat(number) {
    var currency = parseFloat(number);
    currency = currency.toFixed(2);
    currency = '$' + currency;
    return currency;
}

var lastOrder;
$.get("/api/ordersall/" + numberId, function (data) {

    console.log(data); //show if match something
    lastOrder = data.pop();



    console.log(lastOrder)

    for (var i = 1; i <= 10; i++) {
        console.log(lastOrder)
        console.log("monkey")
        if (lastOrder["food" + i].name != undefined) {
            var name = lastOrder["food" + i].name;
            var price = parseInt(lastOrder["food" + i].price);
            var quantity = parseInt(lastOrder["food" + i].quantity);
            var total = price * quantity;
            var symbol = "$"
            document.getElementById('entries').innerHTML += '<tr><th>' + name +" x "+quantity+ '</th><td>' + symbol + total + '</td></tr>';
        }
        else {

        }
        document.getElementById('total').innerHTML = ("$"+lastOrder.total)
    }
});