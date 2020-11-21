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
                @keyup.enter="changeTodo"
                @focusout="changeTodo"
            >
        </span>
            
        <div class="buttons">
            <button class="delete-todo" v-on:click="$emit('remove-todo', todo.id)">
                <font icon="times" />
            </button>
        </div>
    </li>
</template>

<script>
export default {
    data: () => ({
        focused: false,
        newTitle: '',
    }),
    props: {
        todo: {
            type: Object,
            required: true
        }
    },
    methods: {
        clearData() {
                let allElems = document.querySelectorAll('.todo-item');
                allElems.forEach(i => i.classList.remove('text-focus'));
            
                let allTextElems = document.querySelectorAll('.todo-text');
                allTextElems.forEach(i => i.setAttribute('readonly', 'readonly'));
        },
        editTodoText: function(e) {

            this.clearData();

            // Изменяем выбранный елемент
            let elem = e.target;
            elem.removeAttribute("readonly");

            function findAncestor (el, cls) {
                while ((el = el.parentElement) && !el.classList.contains(cls));
                return el;
            }

            let liElem = findAncestor(elem,'todo-item');
            liElem.classList.add('text-focus');
       
        }, 
        changeTodo(e) {
            this.clearData();
            const currentElem = e.target.value;
            this.$emit('change-todo', { title: currentElem, id: this.todo.id, completed: this.todo.completed })
        }
    }
}
</script>

<style>

.done input {
    text-decoration: line-through;
    color: #bebebe;
}
.text-focus .done input {
    text-decoration: none;
    color: black;
}
li.todo-item {
    display: flex;
    justify-content: space-between;
    /* margin-bottom:2px; */
    font-size: 1.1rem;
    border-bottom: 1px solid #cccc;
    padding: 12px 8px;
}
li.text-focus {
    box-shadow: 0 0 7px 0 #a8a8a8;
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
    font-size: 12px;
    cursor: pointer;
}

li.todo-item .done .btn-checkbox {
    border: 1px solid #5dc682;
    background: #fff;
    color: #5dc682;
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
    color: #ff8c97;
    border-radius: 50%;
    font-size: 17px;
    margin-right: 5px;
    cursor: pointer;
    width: 27px;
    height: 27px;
}
li.todo-item button.delete-todo {
    background: transparent;
    border: 1px solid transparent;
    padding: 0 5px;
}
li.todo-item button.priority-todo {
    background: #5dc682;
    border: 1px solid #5dc682;
    padding: 0px 8px;
}

</style>