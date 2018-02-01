
// Cahce necesarry DOM Elements
var productsEl = document.querySelector(".products"),
  cartEl = document.querySelector(".shopping-cart-list"),
  productQuantityEl = document.querySelector(".product-quantity"),
  emptyCartEl = document.querySelector(".empty-cart-btn"),
  cartCheckoutEl = document.querySelector(".cart-checkout"),
  totalPriceEl = document.querySelector(".total-price");

// Fake JSON data array here should be API call
var products = [
  {
    id: 0,
    name: "Ramen",
    description: "Yummy Yummy in my tummy",
    imageUrl: "https://media.giphy.com/media/10SrYA07iDPyO4/giphy.gif",
    price: 1.00
  },
  {
    id: 1,
    name: "Churros",
    description: "Mmmmm",
    imageUrl: "https://media.giphy.com/media/UvnFD56ijyq76/giphy.gif",
    price: 1.00,
  },
  {
    id: 2,
    name: "Pizza",
    description: "Gotta stretch that cheese",
    imageUrl: "https://media.giphy.com/media/4ayiIWaq2VULC/giphy.gif",
    price: 150
  },
  {
    id: 3,
    name: "Cookie",
    description: "Look at them chocolates",
    imageUrl: "https://media.giphy.com/media/9lzBlco6tkvte/giphy.gif",
    price: 1.00
  },
  {
    id: 4,
    name: "Mac & Cheese",
    description: "Mmmmm more cheese",
    imageUrl: "https://media.giphy.com/media/9BNFNy343fIys/giphy.gif",
    price: 150
  },
  {
    id: 5,
    name: "Bulgogi",
    description: "Sprinkle Sprinkle",
    imageUrl: "https://media.giphy.com/media/l1AsNyDgCOBm9wk2A/giphy.gif",
    price: 150
  }
],
  productsInCart = [];

// Pretty much self explanatory function. NOTE: Here I have used template strings (ES6 Feature)
var generateProductList = function () {
  products.forEach(function (item) {
    var productEl = document.createElement("div");
    productEl.className = "product";
    productEl.innerHTML = `<div class="product-image">
                                  <img src="${item.imageUrl}" alt="${item.name}">
                               </div>
                               <div class="product-name"><span>Product:</span> ${item.name}</div>
                               <div class="product-description"><span>Description:</span> ${item.description}</div>
                               <div class="product-price"><span>Price:</span> $${item.price} </div>
                               <div class="product-add-to-cart">
                                 <a href="#0" class="btn btn-default see-more">More Details</a>
                                 <a href="#0" class="btn btn-default add-to-cart" data-id=${item.id}>Add to Cart</a>
                               </div>
                            </div>
  `;

    productsEl.appendChild(productEl);
  });
}

// Like one before and I have also used ES6 template strings
var generateCartList = function () {

  cartEl.innerHTML = "";

  productsInCart.forEach(function (item) {
    var li = document.createElement("li");
    li.innerHTML = `${item.quantity} ${item.product.name} - $${item.product.price * item.quantity}`;
    cartEl.appendChild(li);
  });

  productQuantityEl.innerHTML = productsInCart.length;

  generateCartButtons()
}


// Function that generates Empty Cart and Checkout buttons based on condition that checks if productsInCart array is empty
var generateCartButtons = function () {
  if (productsInCart.length > 0) {
    emptyCartEl.style.display = "block";
    cartCheckoutEl.style.display = "block"
    totalPriceEl.innerHTML = "$ " + calculateTotalPrice();
  } else {
    emptyCartEl.style.display = "none";
    cartCheckoutEl.style.display = "none";
  }
}

// Setting up listeners for click event on all products and Empty Cart button as well
var setupListeners = function () {
  productsEl.addEventListener("click", function (event) {
    var el = event.target;
    if (el.classList.contains("add-to-cart")) {
      var elId = el.dataset.id;
      addToCart(elId);
    }
  });

  emptyCartEl.addEventListener("click", function (event) {
    if (confirm("Are you sure?")) {
      productsInCart = [];
    }
    generateCartList();
  });
}

// Adds new items or updates existing one in productsInCart array
var addToCart = function (id) {
  var obj = products[id];
  if (productsInCart.length === 0 || productFound(obj.id) === undefined) {
    productsInCart.push({ product: obj, quantity: 1 });
  } else {
    productsInCart.forEach(function (item) {
      if (item.product.id === obj.id) {
        item.quantity++;
      }
    });
  }
  generateCartList();
}


// This function checks if project is already in productsInCart array
var productFound = function (productId) {
  return productsInCart.find(function (item) {
    return item.product.id === productId;
  });
}

var calculateTotalPrice = function () {
  return productsInCart.reduce(function (total, item) {
    return total + (item.product.price * item.quantity);
  }, 0);
}

// This functon starts the whole application
var init = function () {
  generateProductList();
  setupListeners();
}

// Exposes just init function to public, everything else is private


// I have included jQuery although I haven't used it


var url = "https://translate.yandex.net/api/v1.5/tr.json/translate",
  keyAPI = "trnsl.1.1.20130922T110455Z.4a9208e68c61a760.f819c1db302ba637c2bea1befa4db9f784e9fbb8";

// document.querySelector('#translate').addEventListener('click', function() {
//     var xhr = new XMLHttpRequest(),
//         textAPI = products[0].name,
//         langAPI = document.querySelector('#lang').value
//         data = "key="+keyAPI+"&text="+textAPI+"&lang="+langAPI;
//     xhr.open("POST",url,true);
//     xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
//     xhr.send(data);
//     xhr.onreadystatechange = function() {
//         if (this.readyState==4 && this.status==200) {
//             var res = this.responseText;
//             document.querySelector('#json').innerHTML = res;
//             var json = JSON.parse(res);
//             if(json.code == 200) {
//               products[0].name = json.text[0];
//             }
//             else {
//                 document.querySelector('#output').innerHTML = "Error Code: " + json.code;
//             }
//         }
//     }
// }, false);

console.log(products)
$(".product").remove();

function translatethis1(input, lang) {
  var products = input;
  for (i = 0; i < products.length; i++) {

    var output = ''
    var xhr = new XMLHttpRequest(),
      textAPI = products[i].name,
      langAPI = lang,
      data = "key=" + keyAPI + "&text=" + textAPI + "&lang=" + langAPI;
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.send(data);
    xhr.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        var res = this.responseText;
        //document.querySelector('#json').innerHTML = res;
        var json = JSON.parse(res);
        if (json.code == 200) {
          products[i].name = json.text[0];

        }
        else {
          products[i].name = products[i].name;

        }
      }
    }
  }

}
function translatethis2(input, lang) {
  var products = input;
  for (i = 0; i < products.length; i++) {

    var output = ''
    var xhr = new XMLHttpRequest(),
      textAPI = products[i].description,
      langAPI = lang,
      data = "key=" + keyAPI + "&text=" + textAPI + "&lang=" + langAPI;
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.send(data);
    xhr.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        var res = this.responseText;
        //document.querySelector('#json').innerHTML = res;
        var json = JSON.parse(res);
        if (json.code == 200) {
          products[i].description = json.text[0];

        }
        else {
          products[i].description = products[i].description;

        }
      }
    }
  }

}


