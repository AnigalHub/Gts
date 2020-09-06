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
    .text{
        padding-left: 4.375rem;
    }
    @media screen and (max-width: 768px) {
        .text{
            padding-left: 1.875rem;
        }
    }
    @media screen and (min-width: 768px)and (max-width: 992px) {
        .text{
            padding-left: 2.5rem;
        }
    }
    @media screen and (min-width: 992px)and (max-width: 1200px) {
        .text{
            padding-left: 2.5rem;
        }
    }
    @media screen and (min-width: 1200px)and (max-width: 1400px) {
        .text{
            padding-left: 3.125rem;
        }
    }
    @media screen and (min-width: 1400px)and (max-width: 1600px) {
        .text{
            padding-left:3.75rem;
        }
    }
</style>

