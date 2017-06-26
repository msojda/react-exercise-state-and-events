import React from 'react';

class AddProduct extends React.Component {
  itemInput;

  render() {
    const {addProduct} = this.props;

    return (
      <form>
        <input type="text" placeholder="Item name..." ref={(input) => this.itemInput = input} />
        <button
        type="submit"
        onClick={(event) => {
          event.preventDefault();
          addProduct(this.itemInput.value);
        }}>
        Add
        </button>
      </form>
    )
  }
}

export default AddProduct;
