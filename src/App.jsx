/*
🎯 Obiettivo:

Aggiungi al carrello ✅
controllo se già presente ✅
Incrementa quantità ✅
Rimuovi dal carrello ✅
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
      updateCartQuantity(gadget.name)
      return
    }

    const productToAdd = {
      ...gadget,
      quantity: 1
    }

    setAddedProducts(curr => [...curr, productToAdd]) // qui stai dicendo: prendi l'ultimo stato corrente (curr) e costruisci un nuovo array aggiungendoci productToAdd

  }

  const updateCartQuantity = cartProduct => {

    setAddedProducts(curr => {   // setAddedProducts può ricevere una funzione come parametro, si chiama functional updater in React, e si usa quando Se il nuovo valore dipende dal vecchio, (per esempio qui che devo aggiornare il vecchio stato con il nuovo)

      // se dentro un map ho logica complessa su più righe, come per esempio un if/else, devo usare la graffa, che poi richiede un return
      return curr.map(p => {

        if (p.name === cartProduct) {
          return { ...p, quantity: p.quantity + 1 }

        }

        else {
          return p
        }

      })

    })

  }

  const removeProducts = cartProduct => {
    setAddedProducts(curr => curr.filter(p => p.name !== cartProduct))
  }

  const totalToPay = addedProducts.reduce((acc, p) => acc + (p.price * p.quantity), 0)

  return (
    <>

      <h1>available products</h1>

      {/* ricordarsi che quando ritorno direttamente un valore con .map ci va la tonda e non la graffa, quindi non ci va return, perchè la tonda ha return implicito*/}
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

            <button onClick={() => removeProducts(cartProduct.name)}>
              rimuovi prodotto
            </button>

          </li>

        </ul>


      ))}

      <h3>Totale da pagare: {totalToPay.toFixed(2)}</h3>

    </>
  )
}

export default App
