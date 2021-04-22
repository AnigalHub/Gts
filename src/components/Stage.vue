<template>
    <div>
        <slot></slot>
        <h3>{{stage_name}}</h3>
        <div class="text">{{stage_description}}</div>
    </div>
</template>
<script>
    export default {
        name: 'stage',
        props:{
            stage_name: String,
            stage_description: String,
        },
    }
</script>
<style  lang="scss" scoped>

</style>