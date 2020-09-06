<template>
    <div>
        <slot :slotColor="color"></slot>
        <h4 :style="pickColor" >{{name_solutions}}</h4>
        <div class="text">{{description_solutions}}</div>
    </div>
</template>

<script>
    export default {
        name: "Solutions",
        props:{
            name_solutions: String,
            description_solutions: String,
            color: String,
            borderBottomColor:String,
        },
        computed:{
            pickColor(){
                if(this.borderBottomColor === '#FFE4A7'){
                    return {textDecorationColor: "#FFE4A7" }
                } else if(this.borderBottomColor === '#F49587'){
                    return {textDecorationColor: '#F49587'}
                }
                else if(this.borderBottomColor === '#922cd3'){
                    return {textDecorationColor: "#922cd3"}
                } else{
                    return {textDecorationColor: "#32E1FA"}
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    h4{
        font-weight: 900;
        text-decoration: underline;
        text-decoration-color: #922cd3;
        cursor: default;
    }
</style>