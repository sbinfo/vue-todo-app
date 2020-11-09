<template>
    <form class="app-header" @submit.prevent="onSubmit">
        <span class="select-all" 
            v-bind:style="{color: isSelectedAll()}"
            v-on:click="$emit('select-all')">
            <font icon="check" />
        </span>
        <input type="text" placeholder="What needs to be done?" class="text-form" v-model="title">    
    </form>   
</template>

<script>
export default {
    props: ['isSelectedAll'],
    data() {
        return {
            title: ''
        }
    },
    methods: {
        onSubmit() {
            if(this.title.trim()) {
                const newTodo = {
                    id: Date.now(),
                    title: this.title,
                    completed: false
                }

                this.$emit('add-todo', newTodo);
                this.title = '';
            }
        }
    }
}
</script>


<style>
 .app-header {
    border-bottom: 1px solid #ccc;
    padding: 20px 15px;
    overflow: hidden;
    display: flex;
    align-items: center;
 }
 .text-form {
    width: 100%;
    border: none;
    font-size: 1.1rem;
    margin-left: 10px;;
 }
 .select-all {
     margin: 0;
     position: relative;
 }
 input.text-form:focus { 
     outline: none;     
 }
 .select-all {
    color: #e1e1e1;
    font-size: 15px;
    cursor: pointer;
}
 
input.text-form::placeholder {
    font-style: italic;
    color: #ccc;
}
</style>
