<template>
    <div id="about_company">
        <b-container>
            <b-row>
                <b-col cols="5">
                    <svgCompany rel="preload"></svgCompany>
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

</style>