<template>
    <div>
        <slot></slot>
        {{name_features}}
    </div>
</template>

<script>
    export default {
        name: 'Features',
        props:{
            name_features: String,
        },
    }
</script>

<style scoped>
</style>>