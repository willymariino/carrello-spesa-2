# Checklist passaggi dettagliata

- ## step 1: map iniziale pre mostrare i prodotti della lista della spesa in pagina

- ## step 2: creare la prima funzionzione **addToCart**
     1) creare lo stato locale dei prodotti aggiunti al carrello con [addedProducts, setAddedProducts]
     2) controllare se esiste già con .some
     3) bloccare l'aggiunta di duplicati con if **isProductAlreadyAdded** - return
     4) se esiste già aggiungere l'invocazione di **updateProductQuantity** dentro **isProductAlreadded**
     5) se non c'è aggiungerlo aggiungendo anche la proprietà quantity tramite la variabile **productToAdd**
     6) aggiornare lo stato con i nuovi prodotti aggiunti al carrello **setAddedProduct(curr => [...curr, productToAdd])

- ## step 3: creare la seconda funzione **updateCartQuantity** (a cui passo come parametro **cartProduct**, cioè il prodotto già nel carrello di cui voglio aggiornare lo stato)
     1) in questa funzione ho bisogno di modificare lo stato corrente del mio carrello, quindi dovrò usare la funzione **setAddedProducts** a cui passo come parametro lo stato corrente (curr)
     2) faccio in modo che **setAddedProducts** restituisca un map dello stato corrente, che servirà per scorrere tutti i prodotti aggiunti al carrello e identificare quello da modificare
     3) per identificare il prodotto da modificare aggiungo un condizionale che verifica che se il nome del prodotto che sto scorrendo (**p.name**) è uguale al prodotto che voglio modificare (**cartProduct**) allora restituisco l'intero oggetto (**...p**), con la proprietà quantity incrementata di 1 (**quantity: p.quantity + 1**)
     altrimenti restituisco l'oggetto senza modificarlo (**else return p**)

- ## step 4: aggiungo la funzione per rimuovere prodotti dal carrello (posso ripassare **cartProduct** come parametro dato che devo fare la stessa cosa della funzione precedente, aggiornare lo stato di addedProducts)
     1) per rimuovere un prodotto dall'array di oggetti, dato il principio di immutabilità in react, devo creare un nuovo array da cui filtro fuori il prodotto che voglio eliminare
     2) per modificare lo stato di addedProducts, devo prendere la funzione setAddedProducts e fare un filter dello stato corrente in cui confronto il prodotto corrente con col prodotto che voglio modificare

- ## step 5: calcolo il totale
     1) utilizzo il metodo reducer per aggregare tutti i miei prodotti nell'accumulatore e poi moltiplico tutte le quantità per il prezzo

- ## step 6: restituisco i risultati delle operazioni nel mio jsx
     1) faccio un .map dell'array di oggetti **products** per mostrare i prodotti presenti nella lista della spesa, e al suo interno ci metto il bottone per aggiungere i prodotti al carrello, dove invoco la funzione addedProducts
     2) faccio un .map di **addedProducts** per mostrare i prodotti correntemente nel carrello degli acquisti, e al suo interno ci metto i pulsanti incrementare quantità/rimuovere prodotti
     3) in fondo metto il totale che andrò a spendere.

      

     
