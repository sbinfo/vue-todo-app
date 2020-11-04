<template>
  <div id="app">
    <h1>Todo</h1>
    <Todo v-bind:todos="todos"/>
  </div>
</template>

<script>
import Todo from './components/Todo';

export default {
  name: 'App',
  data: function() {
    return {
      todos: [
        { id: 1, title: 'Learn Vue.js', completed: true },
        { id: 2, title: 'Make Coffee', completed: true },
        { id: 3, title: 'Create Awesome Apps', completed: true }
      ]
    }
  },
  components: {
    Todo
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
