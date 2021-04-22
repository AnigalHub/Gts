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
                    <svgSolutions rel="preload"></svgSolutions>
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

</style>