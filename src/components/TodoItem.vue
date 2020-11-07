<template>
    <li class="todo-item">      
        <span>
            <button class="btn-checkbox">
                <font icon="check" />
            </button>
            <input type="text" readonly 
                class="todo-text" 
                v-bind:value="todo.title"
                @dblclick="editTodoText"
            >
        </span>
            
        <div class="buttons">
            <button class="priority-todo">
                <font icon="info" />
            </button>
            <button class="delete-todo">
                <font icon="times" />
            </button>
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
    },
    methods: {
        editTodoText: function(e) {
            let elem = e.target;
            elem.removeAttribute("readonly")
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
li.todo-item button:focus,
li.todo-item button:active {
    outline: none;
}
li.todo-item .btn-checkbox {
    border: 1px solid #e1e1e1;
    background: #fff;
    color: transparent;
    border-radius: 50%;
    width: 27px;
    height: 27px;
    font-size: 13px;
    cursor: pointer;
}
li.todo-item .btn-checkbox-selected {
    border: 1px solid green;
    background: #fff;
    color: green;
}

li.todo-item .todo-text {
    font-size: 1.1rem;
    margin-left: 15px;
    border: none;
}
li.todo-item .todo-text:focus,
li.todo-item .todo-text:active {
    border: none;
    outline: none;
}
li.todo-item .buttons button {
    color: #fff;
    border-radius: 50%;
    font-size: 13px;
    margin-right: 5px;
    cursor: pointer;
    width: 26px;
    height: 26px;
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