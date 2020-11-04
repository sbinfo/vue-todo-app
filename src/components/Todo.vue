<template>
    <ul>
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