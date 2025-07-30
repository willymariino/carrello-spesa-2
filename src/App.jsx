/*
🎯 Obiettivo:

Aggiungi al carrello
controllo se già presente
Incrementa quantità
Rimuovi dal carrello
Calcola totale

*/

function App() {

  const gadgets = [
    { name: 'Smartphone', price: 599 },
    { name: 'Laptop', price: 999 },
    { name: 'Tablet', price: 399 },
    { name: 'Headphones', price: 149 },
  ];

  return (
    <>

      {/* ricordarsi che quando faccio un map ci va la tonda e non la graffa*/}
      {gadgets.map((product, index) => (

        <ul>

          <li key={index}>

            {product.name}: {product.price}€

          </li>


        </ul>

      ))}

    </>
  )
}

export default App
