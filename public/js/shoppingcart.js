var App = React.createClass({
    getItems: function() {
      // some request here
      return [{id: 1, name: "Cool Banana", price: 2.49},
              {id: 2, name: "Epic Apple", price: 3.29},
              {id: 3, name: "Awesome Grape", price: 0.49}];
    },
    getInitialState: function() {
      return {
        items: this.getItems(),
        cart: []
      }
    },
    addToCart: function(item) {
      var found = false;
      var updatedCart = this.state.cart.map((cartItem) => {
        if (cartItem.name == item.name) {
          found = true;
          cartItem.quantity++;
          return cartItem;
        } else {
          return cartItem;
        }
      });
      
      if (!found) { updatedCart.push({id: item.id, name: item.name, price: item.price, quantity: 1}) }
      
      this.setState({
        cart: updatedCart
      });
    },
    render: function(){
      return (
        <div>
          <nav>
            <h3>Products</h3>
            <Cart cart={this.state.cart} />
          </nav>
            <div className="Products">  
              {this.state.items.map((item) => {
                return <Product details={item} addToCart={this.addToCart} />
              })}
            </div>
        </div>
      );
    }
  });
  
  var Cart = React.createClass({
    getInitialState: function() {
      return {
        open: false
      }
    },
    openCart: function() {
      this.setState({
        open: !this.state.open
      })
    },
    render: function() {
      return (
        <div className={"Cart " + (this.state.open ? "Cart-Open" : "")} onClick={this.openCart} >
          <p className="Title">Cart</p>
          <div>
          {this.props.cart.length > 0 ? this.props.cart.map((item) => {
            return <p>{item.name}{item.quantity > 1 ? <span> {item.quantity}</span> : ''}</p> }) : <p>Empty</p>}
          </div>
        </div>
      );
    }
  });
  
  var Product = React.createClass({
    addToCart: function() {
      this.props.addToCart(this.props.details);
    },
    render: function() {
      let item = this.props.details;
      return (
        <div className="Product" onClick={this.addToCart}>
          <p>{item.name}</p>
          <p>{item.price}</p>
        </div>
      );
    }
  });
  
  ReactDOM.render(<App />, document.getElementById('app'));