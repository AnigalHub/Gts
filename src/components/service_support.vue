<template>
    <div id="service_support">
        <b-container>
            <b-row class="import_row">
                <b-col cols="5">
                    <svgService rel="preload"></svgService>
                </b-col>
                <b-col class="support">
                    <h2>{{heading}}</h2>
                    <b-row v-for="(prf,index) in ServiceSupport" :key="index">
                        <b-col class="text" v-for="value in prf.SupportRow" :key="value.paragraph">
                            {{value.paragraph}}
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
                ServiceSupport:[
                    {
                        SupportRow:[
                            {paragraph:"Разработка и поставка решений, соответствующих требованиям именно вашей компании даже в минимальных количествах"},
                            {paragraph:"Проведение пусконаладочных работ и дальнейшего гарантийного и постгарантийного обслуживания"},
                        ]
                    },
                    {
                        SupportRow:[
                            {paragraph:"Огромный опыт работы с госзаказами, множество успешно закрытых поставок"},
                            {paragraph:"Если наше оборудование сломалось, а гарантийный срок не прошел, мы заберем его и предоставим замену"},
                        ]
                    },
                    {
                        SupportRow:[
                            {paragraph:"Разработка аппаратных комплексов по ТУ Заказчика"},
                            {paragraph:"Стоимость нашего оборудования ниже, чем у конкурентов"},
                        ]
                    },
                ],
            }
        },

    }
</script>

<style scoped lang="scss">

</style>