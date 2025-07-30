/*
🎯 Obiettivo:

Aggiungi al carrello
controllo se già presente
Incrementa quantità
Rimuovi dal carrello
Calcola totale

*/

import { useState } from "react";

function App() {

  const gadgets = [
    { name: 'Smartphone', price: 599 },
    { name: 'Laptop', price: 999 },
    { name: 'Tablet', price: 399 },
    { name: 'Headphones', price: 149 },
  ];

  const [addedProducts, setAddedProducts] = useState([])

  const addGadgetsToCart = gadget => {

    const isProductAlreadyAdded = addedProducts.some(p => p.name === gadget.name)

    if (isProductAlreadyAdded) {
      return
    }

    const productToAdd = {
      ...gadget,
      quantity: 1
    }

    setAddedProducts(curr => [...curr, productToAdd]) // qui stai dicendo: prendi l'ultimo stato corrente (curr) e costruisci un nuovo array aggiungendoci productToAdd

  }


  return (
    <>

      <h1>available products</h1>

      {/* ricordarsi che quando faccio un map ci va la tonda e non la graffa*/}
      {gadgets.map((product, index) => (

        <ul>

          <li key={index}>

            {product.name}: {product.price}€

            <button onClick={() => addGadgetsToCart(product)}>
              Aggiungi al carrello
            </button>

          </li>


        </ul>

      ))}

      <h2>Your shopping cart</h2>

      {addedProducts.map((cartProduct, index) => (

        <ul>

          <li key={index}>
            {cartProduct.name}: {cartProduct.price}€ quantità:{cartProduct.quantity}

          </li>

        </ul>


      ))}

    </>
  )
}

export default App
