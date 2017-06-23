import ReactDOM from 'react-dom';
import React from 'react';

class ShoppingList extends React.Component {
  render() {
    return (
      <div>
        <h2>Shopping list</h2>

        <form>
          <input type="text" placeholder="Item name..." />
          <button type="submit">Add</button>
        </form>

        <ul>
          <li>Bread</li>
          <li>Oranges</li>
          <li>Olive oil</li>
        </ul>
      </div>
    )
  }
}

ReactDOM.render(<ShoppingList />, document.getElementById('root'));
