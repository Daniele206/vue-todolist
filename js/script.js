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
      ]
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

    deleteTask(i){
      this.todoList.splice(i, 1);
    }
  },

  mounted(){
    
  },
}).mount('#app');