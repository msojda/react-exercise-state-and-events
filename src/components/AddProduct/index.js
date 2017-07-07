import React from 'react';
import { connect } from 'react-redux'
import { addProduct } from './actions';

class AddProduct extends React.Component {
  itemInput;

  render() {
    const {onAddProductClick} = this.props;

    return (
      <form>
        <input type="text" placeholder="Item name..." ref={(input) => this.itemInput = input} />
        <button
        type="submit"
        onClick={(event) => {
          event.preventDefault();
          onAddProductClick(this.itemInput.value);
        }}>
        Add
        </button>
      </form>
    )
  }
}

export default connect(
state => state,
dispatch => {
  return {
    onAddProductClick: product => {
      dispatch(addProduct(product))
    }
  }
}
)(AddProduct);
