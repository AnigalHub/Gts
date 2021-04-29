<template>
    <div id="footer">
        <b-container>
            <b-row>
                <b-col>
                    <div class="text">{{address.metro}}</div>
                    <div class="text">{{address.working_hours}}</div>
                </b-col>
                <b-col>
                    <div class="text" v-html="address.address"></div>
                </b-col>
                <b-col>
                    <div class="text"><a :href="'tel:' + address.phone"><i class="fa fa-phone"></i>{{address.phone}}</a></div>
                    <div class="text"><a :href="'mailto:'+ address.mail"><i class="fa fa-envelope-o" aria-hidden="true"></i>{{address.mail}}</a></div>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
    import address from '../../public/documents/address';
    export default {
        name: "MyFooter",
        data(){
            return {
                heading: 'Контакты',
                address:address,
            }
        }
    }
</script>

<style lang="scss" scoped>
#footer{
    background: #100a21;
    padding:2% 2% 2% 2% ;
    height: auto;
    color: white;
    max-height: 100%;
    /*текст по компоненту - футеру*/
    .text{
        margin-top: 3%;
        text-align: center;
    }
    /*параметры сетки бутстрап (пункт информации в футере)*/
    .col{
        text-align: center;
        padding-right: 0.313rem !important;
        padding-left: 0.313rem !important;
    }
    /*ссылки*/
    a{color: #8bcdf5;}
}
@media screen and (max-width: 500px) {
    #footer {
        /*параметры сетки бутстрап (пункты информации в футере)*/
        .row {flex-direction: column;}
    }
}
</style>