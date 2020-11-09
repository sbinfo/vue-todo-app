<template>
    <div class="app-footer">

        <div class="info-block" >
          <span>{{ completedCount() }} item left</span>
        </div>

        <div class="toggle-buttons">
          <button class="active">All</button>
          <button>Active</button>
          <button>Completed</button>
        </div>

        <div class="clear-all-button">
          <!-- если не выбран ни один елемент то эту кнопку скрываем -->
          <span 
            v-on:click="$emit('clear-completed-todos')"
            v-bind:style="{display: completedCount('done') == 0  ? 'none' : ''}">
            Clear completed {{ completedCount('done') }} 
          </span>
        </div>

      </div>
</template>

<script>
export default {
  props: ['completedCount']
}
</script>


<style>
.app-footer {
  display: flex;
  justify-content: space-between;
  padding: 10px 15px;
}

.app-footer button, .app-footer span {
    color: #737373;
    font-weight: bold;
    font-family: 'Quicksand';
    font-size: 14px;
}
.toggle-buttons button {
    background: transparent;
    border: none;
    outline: none;
    cursor: pointer;
    margin: 0 5px 0 5px;
    border: 1px solid transparent;
    padding: 2px 8px;
}
.toggle-buttons .active {
    border: 1px solid #7373736b;
    border-radius: 5px;
}

.clear-all-button span{
    cursor: pointer;
}
.clear-all-button span:hover{
    text-decoration: underline;
}

.toggle-buttons button:not(.active):hover {
    border: 1px solid #e2a8a880;
    border-radius: 5px;
}

.app-footer .toggle-buttons {
  width: 50%;
}

.app-footer .info-block {
  text-align: left;
}

.app-footer .clear-all-button,
.app-footer .info-block {
  width: 25%;
}

</style>