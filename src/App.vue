<template>
  <div id="app">

    <h1>todos</h1>

    <div class="app-body">
      <AddTodo 
        @add-todo="addTodo"
        @select-all="selectAll"
        v-bind:isSelectedAll="isSelectedAll"
      />

      <Todo 
        v-bind:todos="changeFilter(filter)"
        @remove-todo="removeTodo"
      />

      <AppFooter
        v-bind:style="{display: !Object.keys(this.todos).length ? 'none': ''}" 
        v-bind:completedCount="completedCount"
        v-bind:clearAll="clearAll"
        v-bind:filter="filter"
        @clear-completed-todos="clearCompletedTodos"
        @change-filter="changeFilter"
      />
    </div>

    <div class="footer">
        <span>Double-click to edit a todo</span><br>
        <span>Written by <a href="https://www.saidbabaev.com" target="_blank">Said Babaev</a></span><br>
        <span>Todo App with Vue.js</span>
    </div>

  </div>
</template>

<script>
import Todo from "./components/Todo";
import AppFooter from './components/AppFooter';
import AddTodo from './components/AddTodo';

export default {
  name: "App",
  data: function () {
    return {
      todos: [
        { id: 1, title: "Learn Vue.js", completed: false },
        { id: 2, title: "Make Coffee", completed: true },
        { id: 3, title: "Create Awesome Apps", completed: false },
      ],
      clearAll: false,
      filter: 'all' // filter для показа елементов по выбору  (all, active, completed)
    };
  },
  methods: {
    selectAll() {
      // снрачало получаем сделаанные задачи
      let items = this.todos.filter(item => item.completed);
      let items_count = Object.keys(items).length; // получаем их количество

      // если большо или равно нулю то устанавливаем всем задачам completed: true
      if(items_count >= 0) {
        for(let item in this.todos) {
          this.todos[item].completed = true;
        }
      }
      // если количество выполненных задач равно количество всех елементов в списке то 
      // всем елементам устанавливаем обратное значение completed: false
      if(items_count === Object.keys(this.todos).length) {     
        for(let item in this.todos) {
          this.todos[item].completed = false;
        }
      }
    },
    removeTodo(id) {
      this.todos = this.todos.filter(item => item.id !== id);
    },
    clearCompletedTodos() {
      this.todos = this.todos.filter(item => !item.completed);
    },
    addTodo(newTodo) {
      this.todos.push(newTodo);
    },
    // с помошью флага можно переключится . есть два режима у функции
    // 1 считает оставшиееся задачи (left) а другой считает сделанные задачи (надо передать что то кроме left)
    completedCount(flag = 'left') {

      let count = 0;
      this.todos.forEach(item => {
        
        if(flag === 'left') {

          if(!item.completed) {
            count++;
          }

        } else {

          if(item.completed) {
            count++;
          }

        }    
      });

      return count;
    },
    isSelectedAll() {
      if(Object.keys(this.todos).length != 0 && this.completedCount('done') === Object.keys(this.todos).length) {
        return '#5dc682';
      }

      return '';
    },
    changeFilter(text) {
      this.filter = text;

      if (text === 'active') {
        return this.todos.filter(item => !item.completed)
      } 
      else if (text === 'completed') {
        return this.todos.filter(item => item.completed);
      }

      return this.todos;
    }
  },
  components: {
    Todo, AppFooter, AddTodo
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@300&display=swap");
body {
  background: #cccccc29;
  color: #2c3e50;
}
#app {
  font-family: "Quicksand",  sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
  max-width: 550px;
  margin: 0 auto;
}
#app h1 {
    color: #d267678c;
    font-size: 4rem;
    margin: 20px 0px 10px 0;
}
.app-body {
  box-shadow: 0 0 12px -5px #71808d;
  background: #fff;
}
.footer {
      margin-top: 50px;
    font-size: 12px;
    font-weight: bold;
    color: #cecccc
}
.footer a {
  color: #b7b7b7; 
}
</style>
