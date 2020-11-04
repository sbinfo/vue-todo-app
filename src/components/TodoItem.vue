<template>
    <li>
        <span>
            <input type="checkbox">
            <strong>{{ todo.title }}</strong>
        </span>
        <button>&times;</button>
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
li {
    display: flex;
    justify-content: space-between;
    margin-bottom:2px;
    font-size: 1.1rem;
    border-bottom: 1px solid #cccc;
    padding: 12px 8px;
}

li strong {
    margin-left: 10px;
}
</style>