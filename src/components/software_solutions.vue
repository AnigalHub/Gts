<template>
    <div id="software_solutions">
        <b-container>
            <b-row class="import_row">
                <b-col class="program_solutions">
                    <h2>{{heading}}</h2>
                    <b-row v-for="solutions in  RowSolutions" :key="solutions.name_solutions">
                        <Solutions :borderBottomColor="solutions.color" :name_solutions="solutions.name_solutions" :color="solutions.color" :description_solutions="solutions.description_solutions">
                            <component :is="solutions.svg" :slotColor="solutions.color"/>
                        </Solutions>
                    </b-row>
                </b-col>
                <b-col class="program_svg">
                    <svgSolutions></svgSolutions>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
    import Solutions from "./Solutions";
    import svgSolutions from './svgs/software_solutions/svg_solutions';
    import svgParagraph from './svgs/software_solutions/svg_paragraph';
    export default {
        components: {Solutions, svgSolutions,svgParagraph },
        name: "software_solutions",
        data(){
            return {
                heading: 'Программные решения',
                RowSolutions:[
                    {
                        name_solutions:'Виртуализация',
                        description_solutions:'Бесплатные и платные решения от ведущих разработчиков в мире виртуализации.',
                        svg:'svgParagraph',
                        color: '#FFE4A7',
                    },
                    {
                        name_solutions:'Отказоустойчивость',
                        description_solutions:'Резервные контура, репликация данных, устойчивость к потере данных и катастрофам любого рода.',
                        svg:'svgParagraph',
                        color: '#F49587',

                    },
                    {
                        name_solutions:'Резервное копирование',
                        description_solutions:'Собственные разработки позволяющие обеспечить гарантированную сохранность данных.',
                        svg:'svgParagraph',
                        color: '#922cd3',

                    },
                    {
                        name_solutions:'Консолидация ресурсов',
                        description_solutions:'Оптимальное использование аппаратных ресурсов Заказчика, сокращение издержек, повышение производительности, планирование затрат.',
                        svg:'svgParagraph',
                        color: '#32E1FA',
                    },
                ],
            }
        }
    }
</script>

<style scoped lang="scss">

    #software_solutions{
        background: linear-gradient(to top,#1d0d34,#2b1149,#180b2d);
        padding:3% 2% 2% 2% ;
        svg{
            width: 100% !important;
        }

        .program_solutions{
            background: url("../../public/background.png");
            background-size: 100% 100%;
        }

        .col .row{
            margin-top: 2% !important;
            padding-bottom:1.5%;
        }

    }
    @media screen and (max-width: 500px) {
       #software_solutions{
            .import_row{
                flex-direction: column;
            }
            .col{
                flex: 0 0 100% !important;
                max-width: 100% !important;
                padding-right: 0 !important;
                padding-left: 0 !important;
            }
            h4{
                letter-spacing: -0.05rem;
            }

            .program_svg,.program_solutions{
                flex: 0 0 100% !important;
                max-width: 100% !important;
                padding-right: 0 !important;
                padding-left: 0 !important;
            }
            .col .row{
                margin-bottom:1% !important;
                margin-top: .5% !important;
            }
            .text {
                height: 1.563rem;
                padding-left: 0.5rem !important;
            }
            svg{
                margin-left: auto;
                margin-right: auto;
                width: 90% !important;
                display:block;
                margin-top: 0 !important;
            }
        }
    }
    @media screen and (min-width: 500px)and (max-width: 768px) {
        #software_solutions{
            .import_row{
                flex-direction: column;
            }
            .col .row{
                margin-bottom:1% !important;
                margin-top: .5% !important;
            }
            .text {
                line-height: 0.938rem;
                height: 2.188rem;
            }
            svg{
                margin-left: auto;
                margin-right: auto;
                width: 55% !important;
                display:block;
                margin-top: 0 !important;
            }
        }
    }
    @media screen and (min-width: 768px)and (max-width: 992px) {

        #software_solutions{
            .import_row{
                flex-direction: column;
            }

            .text {
                line-height: 0.938rem;
                height: 2.813rem;
            }
            svg{
                margin-left: auto;
                margin-right: auto;
                width: 55% !important;
                display:block;
                margin-top: 0 !important;
            }
            .col .row{
                margin-bottom:1% !important;
                margin-top: .5% !important;
            }
        }
    }
    @media screen and (min-width: 992px)and (max-width: 1200px){
        #software_solutions{
            .text {
                line-height: 0.938rem;
                height: 3.438rem;
            }
            .col .row{
                margin-top: 0 !important;
                padding-bottom:0;
            }
        }
    }
    @media screen and (min-width: 1200px)and (max-width: 1400px) {
        #software_solutions{
            .text {
                line-height: 1.25rem;
                height: 4.063rem;
            }
            .col .row{
                margin-top: 0 !important;
                padding-bottom:0;
            }
        }
    }
    @media screen and (min-width: 1400px)and (max-width: 1600px) {
        #software_solutions{
            .text {
                height: 6.25rem;
                line-height: 1.25rem;
            }
        }
    }

</style>