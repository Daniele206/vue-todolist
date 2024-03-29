const {createApp} = Vue;

createApp({

  data(){
    return{
      todoList: [
        {
          text: 'Portare l\'auto dal meccanico',
          done: true,
        },
        {
          text: 'Annaffiare le piante',
          done: false,
        },
        {
          text: 'Comprare pane',
          done: false,
        },
        {
          text: 'Ripassare CSS',
          done: true,
        },
      ],
      input: '',
      erroreImput: '',
      emptyList: 'La lista é vuota.'
    }
  },

  methods:{
    taskDone(done){
      if(done === true){
        return 'task-done'
      }else{
        return ''
      }
    },

    deleteTask(i, done){
      if(done === true){
        this.todoList.splice(i, 1);
        this.erroreImput = '';
      }else{
        this.erroreImput = 'Errore! Questa task non é stata completata, quindi non puó essere eliminata.';
      };
    },

    addTask(){
      if(this.input.length > 3){
        this.todoList.unshift(
          {
            text: this.input,
            done: false,
          }
        );
        this.input = '';
        this.erroreImput = '';
      }else{
        this.erroreImput = 'Errore! Devi inserier almeno 4 caratteri.'
      }
    }
  },

  mounted(){
    
  },
}).mount('#app');