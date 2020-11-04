<template>
  <div id="app">

    <h1>todos</h1>

    <div class="app-body">
      <AppHeader />

      <Todo v-bind:todos="todos" />

      <AppFooter />
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
import AppHeader from './components/AppHeader';

export default {
  name: "App",
  data: function () {
    return {
      todos: [
        { id: 1, title: "Learn Vue.js", completed: true },
        { id: 2, title: "Make Coffee", completed: true },
        { id: 3, title: "Create Awesome Apps", completed: true },
      ],
    };
  },
  components: {
    Todo, AppFooter, AppHeader
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
