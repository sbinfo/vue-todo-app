<template>
    <ul class="todo">
        <TodoItem
            v-for="todo in todos"
            :key="todo.id"
            v-bind:todo="todo"
            v-on:remove-todo="removeTodo"
            v-on:change-todo="changeTodo"
        />   
    </ul> 
</template>

<script>
import TodoItem from './TodoItem';

export default {
    props: ['todos'],
    methods: {
        removeTodo(id) {
            this.$emit('remove-todo', id);
        },  
        changeTodo(todo) {
            this.$emit('change-todo', todo);
        }
    },
    components: { TodoItem }
}
</script>

<style>
    ul.todo {
        list-style: none;
        text-align: initial;
        margin: 0;
        padding: 0;
    }
</style>