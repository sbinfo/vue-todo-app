<template>
    <div class="app-footer">

        <div class="info-block">
          <span>1 item left</span>
        </div>

        <div class="toggle-buttons">
          <button class="active">All</button>
          <button>Active</button>
          <button>Completed</button>
        </div>

        <div class="clear-all-button">
          <span>Clear completed</span>
        </div>

      </div>
</template>


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

</style>