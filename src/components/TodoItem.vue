<template>
    <li class="todo-item">      
        <span v-bind:class="{done: todo.completed}">
            <button 
                class="btn-checkbox"
                v-on:click="todo.completed = !todo.completed"
            >
                <font icon="check" />
            </button>

            <input 
                type="text" readonly 
                class="todo-text" 
                v-bind:value="todo.title"
                @dblclick="editTodoText"
            >
        </span>
            
        <div class="buttons">
            <!-- <button class="priority-todo">
                <font icon="info" />
            </button> -->
            <button class="delete-todo" v-on:click="$emit('remove-todo', todo.id)">
                <font icon="times" />
            </button>
        </div>
    </li>
</template>

<script>
export default {
    data: () => ({
        focused: false
    }),
    props: {
        todo: {
            type: Object,
            required: true
        }
    },
    methods: {
        editTodoText: function(e) {

            // сброс всех данных (елементы списка) перед изменений 
            function clearData() {
                let allElems = document.querySelectorAll('.todo-item');
                allElems.forEach(i => i.classList.remove('text-focus'));
            
                let allTextElems = document.querySelectorAll('.todo-text');
                allTextElems.forEach(i => i.setAttribute('readonly', 'readonly'));
            }
            
            clearData();

            // Изменяем выбранный елемент
            let elem = e.target;
            elem.removeAttribute("readonly");

            function findAncestor (el, cls) {
                while ((el = el.parentElement) && !el.classList.contains(cls));
                return el;
            }

            let liElem = findAncestor(elem,'todo-item');
            liElem.classList.add('text-focus');
        }     
    }
}
</script>

<style>
.done input {
    text-decoration: line-through;
    color: #bebebe;
}
li.todo-item {
    display: flex;
    justify-content: space-between;
    margin-bottom:2px;
    font-size: 1.1rem;
    border-bottom: 1px solid #cccc;
    padding: 12px 8px;
}
li.text-focus {
    box-shadow: 0 0 8px 2px #a8a8a8;
    /* border: 1px solid gray; */
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

li.todo-item .done .btn-checkbox {
    border: 1px solid green;
    background: #fff;
    color: green;
}
li.todo-item span {
    width: 80%;
}
li.todo-item .todo-text {
    font-size: 1.1rem;
    margin-left: 15px;
    border: none;
    width: 80%;
    -webkit-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	-o-user-select: none;
	user-select: none;
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
    width: 27px;
    height: 27px;
}
li.todo-item button.delete-todo {
    background: #c65d5d;
    border: 1px solid #c65d5d;
    padding: 0 5px;
}
li.todo-item button.priority-todo {
    background: #5dc682;
    border: 1px solid #5dc682;
    padding: 0px 8px;
}

</style>