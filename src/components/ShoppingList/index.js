import React from 'react';
import AddProduct from '../AddProduct';

class ShoppingList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      products: ['Bread', 'Apple', 'Banana']
    };
  }

  addProduct(product) {
    this.setState({
      products: [...this.state.products, product]
    });
  }

  render() {
    return (
      <div>
        <h2>Shopping list</h2>

        <AddProduct addProduct={this.addProduct.bind(this)} />

        <ul>
          {this.state.products.map((product, index) => <li key={index}>{product}</li>)}
        </ul>
      </div>
    )
  }
}

export default ShoppingList;
