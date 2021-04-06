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
    h3{
        padding-bottom: 1%;
        cursor: default;
        text-decoration: underline;
        font-weight: 600;
        text-shadow: 0 0.063rem 0 #2e3b5c, 0 0.125rem 0 #2e3b5c, 0 0.188rem 0 #2e3b5c;
    }
    @media screen and (min-width: 992px)and (max-width: 1200px) {
        .text{
            line-height: 1.125rem !important;
        }
    }
    @media screen and (min-width: 1200px)and (max-width: 1400px) {
        .text{
            line-height: 1.25rem;
        }
    }
</style>