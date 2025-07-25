import { useState } from 'react'
import './App.css'

function App() {
  const [selectedItems, setSelectedItems] = useState([])

  const inventory = [
  { name: 'bacon', unitPrice: 10.99, quantity: 10},
  { name: 'eggs', unitPrice: 3.99, quantity: 10},
  { name: 'cheese', unitPrice: 6.99, quantity: 10},
  { name: 'chives', unitPrice: 1.00, quantity: 10},
  { name: 'wine', unitPrice: 11.99, quantity: 10},
  { name: 'brandy', unitPrice: 17.55, quantity: 10},
  { name: 'bananas', unitPrice: 0.69, quantity: 10},
  { name: 'ham', unitPrice: 2.69, quantity: 10},
  { name: 'tomatoes', unitPrice: 3.26, quantity: 10},
  { name: 'tissue', unitPrice: 8.45, quantity: 10},
  ];

  const addToCart = (item) => {
    setSelectedItems([...selectedItems,item.name]);
  }

  const removeItem = (item) => {
    const newselectedItems = selectedItems.filter(function(selectedItem) {
      return selectedItem !== item
    });

    setSelectedItems(newselectedItems);

  }

  return (
    <>
      <ul>
        {inventory.map((item,index)  => {
          return <li key={index}><button onClick={() => addToCart(item)}>{item.name}</button></li>
        })};
      </ul>

      {selectedItems && <p>Your selected Items</p>}
      {selectedItems &&   
        selectedItems.map(selectedItem => {
          return <div key={selectedItem}>{selectedItem} <button onClick={() => removeItem(selectedItem)}>Remove</button></div>
        })
      }
      
    </>
  )
}

export default App
