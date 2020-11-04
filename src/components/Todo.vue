<template>
    <ul class="todo">
        <TodoItem
            v-for="todo in todos"
            :key="todo.id"
            v-bind:todo="todo"
        />   
    </ul> 
</template>

<script>
import TodoItem from './TodoItem';

export default {
    props: ['todos'],
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