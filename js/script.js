//! Descrizione:
/*Rifare l'esercizio della to do list. Questa volta però ogni todo sarà un oggetto, formato da due proprietà:
text, una stringa che indica il testo del todo
done, un booleano (true/false) che indica se il todo è stato fatto oppure no
MILESTONE 1
Stampare all'interno di una lista HTML un item per ogni todo. Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.
MILESTONE 2
Visualizzare a fianco ad ogni item ha una "x": cliccando su di essa, il todo viene rimosso dalla lista.
MILESTONE 3
Predisporre un campo di input testuale e un pulsante "aggiungi": cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.
Bonus:
1- oltre al click sul pulsante, intercettare anche il tasto ENTER per aggiungere il todo alla lista
2- cliccando sul testo dell'item, invertire il valore della proprietà done del todo corrispondente (se done era uguale a false, impostare true e viceversa)*/

/*["Pane", "Latte", "Uova", "Frutta", "Verdura","Birra", "Patatine", "Cioccolato", "Salsicce"]*/

const { createApp } = Vue;

createApp({
  data() {
    return {
      prodotti: [
        
        {
          text: "Pane",
          done: true,
        },
        {
          text: "Latte",
          done: true,
        },
        {
          text: "Uova",
          done: false,
        },
        {
          text: "Frutta",
          done: true,
        },
        {
          text: "Verdura",
          done: false,
        },
        {
          text: "Birra",
          done: true,
        },
        {
            text: "Patatine",
            done: true,
          },
          {
            text: "Cioccolato",
            done: false,
          },
          {
            text: "Salsicce",
            done: true,
          },
      ],
      nuovoProdotto: {
        text: '',
        done: false,
      },
   
    };
  },

  


  methods:{

    deleteProduct(indexRemove){
      console.log(indexRemove);
      this.prodotti.splice(indexRemove,1)
  },

    aggiungiProdotto() {
      // Controllo se il campo di input è vuoto
      if (this.nuovoProdotto.text.trim() === '') {
        return;
      }

      // Assegna un nuovo ID univoco al todo
      const nuovoTodoConId = { ...this.nuovoProdotto, id: Date.now() };

      // Aggiungi il nuovo todo alla lista
      this. prodotti = [...this. prodotti, nuovoTodoConId];

      // Resetta il campo di input
      this.nuovoProdotto.text = '';
    },


    deleteProduct(indexRemove){
        console.log(indexRemove);
        this.prodotti.splice(indexRemove,1)
    }
  },
}).mount("#app");
