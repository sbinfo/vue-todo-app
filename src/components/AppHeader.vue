<template>
    <div class="app-header">
        <span class="select-all">
            <font icon="check" />
        </span>
        <input type="text" placeholder="What needs to be done?" class="text-form">    
    </div>   
</template>

<style scoped>
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
