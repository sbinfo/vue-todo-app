<template>
    <li class="todo-item">
        <span>
            <input type="checkbox">
            <strong>{{ todo.title }}</strong>
        </span>
        <div class="buttons">
            <button class="priority-todo">!</button>
            <button class="delete-todo">&times;</button>
        </div>
    </li>
</template>

<script>
export default {
    props: {
        todo: {
            type: Object,
            required: true
        }
    }
}
</script>

<style>
li.todo-item {
    display: flex;
    justify-content: space-between;
    margin-bottom:2px;
    font-size: 1.1rem;
    border-bottom: 1px solid #cccc;
    padding: 12px 8px;
}

li.todo-item strong {
    margin-left: 10px;
}
li.todo-item .buttons button {
    color: #fff;
    border-radius: 5px;
    font-size: 20px;
    margin-right: 8px;
    cursor: pointer;
}
li.todo-item button.delete-todo {
    background: #c65d5d;
    border: 1px solid #c65d5d;
    padding: 0 5px;
}
li.todo-item button.priority-todo {
        background: #5d96c6;
    border: 1px solid #5d96c6;
    padding: 0px 8px;
}
</style>