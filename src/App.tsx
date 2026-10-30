import React from 'react'

const App = () => {
  const products = [
    { id: 1, name: "Laptop", price: 2500, category:"Computers"  },
    { id: 2, name: "keyboard", category:"Accessories", price: 300 },
    { id: 3, name: "Mouse", category:"Accessories", price: 150 },
    { id: 4, name: "Monitor", category:"Displays", price: 900},
    { id: 5, name: "Cell Phone", category:"Samsung Galaxy S26 Ultra", price: 3000},
    { id: 6, name: "Tablet", category: "Samsung Galaxy Z Fold8", price: 2000},
    { id: 7, name: "Television", categoty: "Samsung Smart TV", price: 4000},
    { id: 8, name: "Multimeter", category: "Tools", price: 128},
    { id: 9, name: "Samsung Galaxy Buds 4 Pro ", catagory: "Accessories", price: 250},
    { id: 10, name: "Samsung Bluetooth", category: "Speaker", price:500},
  ]
  return (
    <div className='text-9xl'>App</div>
  )
}

export default App