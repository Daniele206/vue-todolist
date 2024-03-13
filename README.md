vue-todolist
===
**Descrizione:**

Rifare l’esercizio della to do list.
Questa volta però ogni todo sarà un oggetto, formato da due proprietà:
- text, una stringa che indica il testo del todo
- done, un booleano (true/false) che indica se il todo è stato fatto oppure no

**MILESTONE 1**

Stampare all’interno di una lista HTML un item per ogni todo.
Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.

**MILESTONE 2**

Visualizzare a fianco ad ogni item ha una “x”: cliccando su di essa, il todo viene rimosso dalla lista.

**MILESTONE 3**

Predisporre un campo di input testuale e un pulsante “aggiungi”: cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.
Oltre al click sul pulsante, intercettare anche il tasto ENTER per aggiungere il todo alla lista

**Bonus:**

1. esporre un messaggio di errore se il testo inserito ha meno di 4 caratteri

2. cliccando sul testo dell’item, invertire il valore della proprietà done del todo corrispondente (se done era uguale a false, impostare true e viceversa)

3. rendere eliminabili solo i task con done === true. In caso contrario esporre un messaggio di errore diverso dal precedente

4. Se la lista è vuota stampare “Non sono presenti task” al posto della lista

## Svolgimento

1. Creare struttura Vue in js.
2. Nel data andare a inserie un array di oggetti con 2 proprietá.
3. Andare a stampare nell'HTML gli oggetti dell'array, sotto forma di lista.
4. Rendere attiva la proprietá (done) se é true l'elemento é sbarrato, se é false non é sbarrato.
5. Rendere attiva l'icona del cestino, per cancellare l'elemento della lista.
6. Creare un elemento da usare con il v-model dell'imput.
7. Al click del bottone o al click del tasto ENTER, questo elemento viene aggiunto come oggetto all'array.

