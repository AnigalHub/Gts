<template>
    <div>
        <svg version="1.1" id="square" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 54 54" style="enable-background:new 0 0 54 54;" xml:space="preserve">
            <rect x="0" y="0" :style="pickColor" width="54" height="54"/>
        </svg>
    </div>
</template>

<script>
    export default {
        name: "svg_paragraph",
        props: {
            slotColor: String,
        },
        computed:{
            pickColor(){
                if(this.slotColor === '#FFE4A7'){
                    return {fill: "#FFE4A7" }
                } else if(this.slotColor === '#F49587'){
                  return {fill: '#F49587'}
                }
                else if(this.slotColor === '#922cd3'){
                    return {fill: "#922cd3"}
                } else{
                    return {fill: "#32E1FA"}
                }
            }
        }
    }
</script>

<style scoped>
    #square{
        height: 100% ;
        width: 30px !important;
        padding: 5px;
        float:left;
        margin:0 !important;
    }

    @media screen and (max-width: 500px) {
        #square{
            width: 15px !important;
        }
    }
    @media screen and (min-width: 500px)and (max-width: 768px) {
        #square{
            width: 20px !important;
        }
    }
    @media screen and (min-width: 768px)and (max-width: 992px) {
        #square{
            width: 25px !important;
        }
    }

</style>