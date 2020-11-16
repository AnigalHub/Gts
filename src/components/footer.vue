<template>
    <div class="footer">
        <b-container>
            <b-row>
                <b-col>
                    <div class="text">
                        <i class="fa fa-train" aria-hidden="true"></i>{{metro}}
                    </div>
                    <div class="text">
                        <i class="fa fa-clock-o" aria-hidden="true"></i> {{working_hours}}
                    </div>
                </b-col>
                <b-col>
                    <div class="text">
                        <div v-html="address"></div>
                    </div>
                </b-col>
                <b-col>
                    <div class="text">
                        <a :href="link_phone">
                            <i class="fa fa-phone"></i>{{phone}}
                        </a>
                    </div>
                    <div class="text">
                        <a :href="link_mail">
                            <i class="fa fa-envelope-o" aria-hidden="true"></i>{{mail}}
                        </a>
                    </div>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
    export default {
        name: "MyFooter",
        data(){
            return {
                heading: 'Контакты',
                metro:' Метро Котельники',
                working_hours:'Пн. – Пт.: с 9:00 до 17:00',
                address:`<i class="fa fa-map-marker" aria-hidden="true"></i>  Московская область,</br> г. Котельники, </br>территория Новорязанское шоссе 6,</br> офис 9-10, этаж 2`,
                phone:'+7 (495) 369-26-73',
                link_phone:'tel:+74953692673',
                mail:'info@gtekhno.ru',
                link_mail:'mailto:info@gtekhno.ru'
            }
        }
    }
</script>

<style lang="scss" scoped>
.footer{
    background: #100a21;
    padding:2% 2% 2% 2% ;
    height: auto;
    color: white;
    max-height: 100%;

    .fa-map-marker{
        float: left;
        text-align: center;
    }
    .text{
        margin-top: 3%;
        text-align: center;
    }
    .col{
        text-align: center;
        padding-right: 0.313rem !important;
        padding-left: 0.313rem !important;
    }
    i{
        color:#8bcdf5;
        width: 1.875rem;
    }
    a{
        color: #8bcdf5;
    }
}
@media screen and (max-width: 500px) {
    .row{
        flex-direction: column;
    }
}
</style>