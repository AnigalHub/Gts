<template>
    <div id="about_company">
        <b-container>
            <b-row>
                <b-col cols="5">
                    <svgCompany></svgCompany>
                </b-col>
                <b-col>
                    <h2>{{heading}}</h2>
                    <div class="text" id="v-for-object" v-for="value in object" >{{ value }}</div>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
    import svgCompany from './svgs/about_company/svg_company';

    export default {
        components: { svgCompany },
        name: "about_company",
        data(){
            return {
                heading: 'О компании',
                el: '#v-for-object',
                object: {
                    history: 'Компания ООО «ГосТехноСервис» была основана в октябре 2017 года.',
                    description:'Российский производитель и поставщик оборудования, осуществляющий\n' +
                    'проектирование, внедрение, гарантийное обслуживание и техническую\n' +
                    ' поддержку ИТ‒решений для государственных и бизнес-структур.',
                    specification:'Компания является системным интегратором, поставщиком\n' +
                    ' ИТ - оборудования, конструкторским бюро,\n' +
                    'производителем аксессуаров и вычислительных комплексов.',
                    certification:' Аккредитованный участник большинства торговых площадок по 44 и 223-ФЗ.'
                }
            }
        }
    }
</script>

<style scoped lang="scss">
    #about_company{
        background: linear-gradient(to top,#180b2d, #2b1149,#1d0d34);
        padding:3% 2% 2% 2% ;
        .col{
            background: url("../../public/images/background_2.webp");
            background-size: 100% 100%;
        }
        svg{
            height: 100% !important;
            width: 110% !important;
        }
    }
    @media screen and (max-width: 500px) {
        #about_company{
            .col,.col-5{
                padding-left: 0 !important;
                padding-right: 0 !important;
            }
            .row{
                flex-direction: column-reverse;

                .col-5{
                    max-width: 100% !important;
                }
                svg{
                    width: 90% !important;
                    display:block;
                    margin-right: auto;
                    margin-left: auto;
                }
            }
        }
    }
    @media screen and (min-width: 500px)and (max-width: 768px) {
        #about_company{
            .row{
                flex-direction: column-reverse;
                .col-5{
                    max-width: 100% !important;
                }

                svg{
                    width: 60% !important;
                    display:block;
                    margin-right: auto;
                    margin-left: auto;
                }
            }
        }
    }
    @media screen and (min-width: 768px)and (max-width: 992px) {
        #about_company{
            .row{
                flex-direction: column-reverse;
                .col-5{
                    max-width: 90% !important;
                }
                svg{
                    width: 70% !important;
                    display:block;
                    margin-right: auto;
                    margin-left: auto;
                }
            }
        }
    }

</style>