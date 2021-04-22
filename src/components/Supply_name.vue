<template>
<div>
    <slot></slot>
    <p class="text">{{name_supply}}</p>
</div>

</template>

<script>
    export default {
        name: "Supply_name",
        props:{
            name_supply: String,
        },
    }
</script>

<style scoped lang="scss">

</style>

