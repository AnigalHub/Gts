<template>
    <div id="service_support">
        <b-container>
            <b-row class="import_row">
                <b-col  cols="5">
                    <svgService></svgService>
                </b-col>
                <b-col class="support">
                    <h2>{{heading}}</h2>
                    <b-row id="v-for-object">
                        <b-col id="v-for-object" :key="value" class="text" v-for="value in object">{{ value }}
                        </b-col>
                    </b-row>
                    <b-row id="v-for-object_2">
                        <b-col id="v-for-object_2" :key="value_2" class="text" v-for="value_2 in object_2">{{ value_2 }}
                        </b-col>
                    </b-row>
                    <b-row id="v-for-object_3">
                        <b-col id="v-for-object_3" :key="value_3" class="text" v-for="value_3 in object_3">{{ value_3 }}
                        </b-col>
                    </b-row>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
    import svgService from './svgs/service_support/svg_service';
    export default {
        components:{ svgService },
        name: "service_support",
        data() {
            return {
                heading: 'Сервисная поддержка 24/7',
                el:'v-for-object',
                object:{
                    paragraph_1:'Разработка и поставка решений, соответствующих требованиям именно вашей компании даже в минимальных количествах',
                    paragraph_2:'Проведение пусконаладочных работ и дальнейшего гарантийного и постгарантийного обслуживания'
                },
                el:'v-for-object_2',
                object_2:{
                    paragraph_3:'Огромный опыт работы с госзаказами, множество успешно закрытых поставок',
                    paragraph_4:'Если наше оборудование сломалось, а гарантийный срок не прошел, мы заберем его и предоставим замену'
                },
                el:'v-for-object_3',
                object_3:{
                    paragraph_5:'Разработка аппаратных комплексов по ТУ Заказчика',
                    paragraph_6:'Стоимость нашего оборудования ниже, чем у конкурентов'
                },
            }
        },

    }
</script>

<style scoped lang="scss">
    #service_support{
        background: linear-gradient(to top,#180b2d, #2b1149,#1d0d34);
        padding:3% 2% 2% 2% ;

        .col{
            border-radius: 0.938rem;
            box-shadow: 0 0 0.313rem rgba(130, 149, 198, 0.62);
            border: 0.125rem solid  rgba(130, 149, 198, 0.62);
            background: rgba(221, 221, 234, 0.1);
        }
        .support {
            padding: 0 !important;
            background: url("../../public/background_2.png");
            background-size: 100% 100%;
            border: none !important;
            box-shadow: none !important;
            margin: 0 !important;

            .col {
                padding: 1.563rem;
                margin: 0.75rem;
            }
        }
        svg{
            padding-top: 15%;
        }

    }
    @media screen and (max-width: 500px) {
       #service_support{
            .import_row{
                flex-direction: column-reverse;
            }
            .col-5{
                flex: 0 0 100% !important;
                max-width: 100% !important;
                padding-right: 0 !important;
                padding-left: 0 !important;
            }
            .support {
                .col {
                    border-radius: 0.5rem;
                    padding: 0.313rem !important;
                    margin:0.5rem;
                }
            }

            svg{
                margin-left: auto;
                margin-right: auto;
                width: 90% !important;
                display:block;
                padding-top: 0;
            }
        }
    }
    @media screen and (min-width: 500px)and (max-width: 768px) {
        #service_support{
            .import_row{
                flex-direction: column-reverse;
            }
            .col-5{
                flex: 0 0 100% !important;
                max-width: 100% !important;
            }
            .support {
                .col {
                    border-radius: 0.625rem;
                    padding: 0.625rem !important;
                    margin: 0.5rem;
                }
            }
            .text {
                line-height: 0.938rem;
            }
            svg{
                margin-left: auto;
                margin-right: auto;
                width: 45% !important;
                display:block;
                padding-top: 0;
            }
        }
    }
    @media screen and (min-width: 768px)and (max-width: 992px) {
        #service_support{
            .import_row{
                flex-direction: column-reverse;
            }
            .col-5{
                flex: 0 0 100% !important;
                max-width: 100% !important;
            }
            .support {
                .col {
                    border-radius: 0.625rem;
                    padding: 0.625rem;
                }
            }

            .text {
                line-height: 0.938rem;
            }
            svg{
                margin-left: auto;
                margin-right: auto;
                width: 55% !important;
                display:block;
                padding-top: 0;
            }
        }
    }
    @media screen and (min-width: 992px)and (max-width: 1200px) {
        #service_support{
            .text {
                line-height: 0.938rem;
            }
            .col{
                padding: 0.938rem !important;
            }
        }
    }
    @media screen and (min-width: 1200px)and (max-width: 1400px) {
        #service_support{
            .text {
                line-height:1.25rem;
            }
            .col{
                padding: 1.25rem !important;
            }
        }
    }
    @media screen and (min-width: 1400px)and (max-width: 1600px) {
        #service_support{
            .text {
                line-height: 1.25rem;
            }
        }
    }

</style>