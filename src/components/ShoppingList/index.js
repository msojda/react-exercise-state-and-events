import React from 'react';
import { connect } from 'react-redux'
import AddProduct from '../AddProduct';

class ShoppingList extends React.Component {
  render() {
    const {products} = this.props;

    return (
      <div>
        <h2>Shopping list</h2>

        <AddProduct />

        <ul>
          {products.map((product, index) => <li key={index}>{product}</li>)}
        </ul>
      </div>
    )
  }
}

export default connect(
  function(state){
    return {products: state.products}
  }
)(ShoppingList);
