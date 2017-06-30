import ReactDOM from 'react-dom';
import React from 'react';

class ShoppingList extends React.Component {
  itemInput;
  
  constructor(props) {
    super(props);

    this.state = {
      products: ['Bread', 'Apple', 'Banana']
    };
  }

  addProduct(event) {
    event.preventDefault();

    this.setState({
      products: [...this.state.products, this.itemInput.value]
    });
  }

  render() {
    return (
      <div>
        <h2>Shopping list</h2>

        <form>
          <input type="text" placeholder="Item name..." ref={(input) => this.itemInput = input} />
          <button type="submit" onClick={(event) => this.addProduct(event)}>Add</button>
        </form>

        <ul>
          {this.state.products.map((product, index) => <li key={index}>{product}</li>)}
        </ul>
      </div>
    )
  }
}

ReactDOM.render(<ShoppingList />, document.getElementById('root'));
