<template>
    <div class="app-header">
        <input type="checkbox" class="select-all">
        <input type="text" placeholder="What needs to be done?" class="text-form">    
    </div>   
</template>

<style scoped>
 .app-header {
    border-bottom: 1px solid #ccc;
    padding: 12px;
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
input.text-form::placeholder {
    font-style: italic;
    color: #ccc;
}
</style>
