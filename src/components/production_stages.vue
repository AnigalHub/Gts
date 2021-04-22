<template>
    <div id="production_stages">
    <b-container>
        <h2>{{heading}}</h2>
        <b-row>
            <b-col v-for="stage in firstRow" :key="stage.stage_name">
                <stage :stage_name="stage.stage_name" :stage_description="stage.stage_description">
                    <component :is="stage.svg"/>
                </stage>
            </b-col>
        </b-row>
        <b-row>
            <b-col v-for="stage in secondRow" :key="stage.stage_name">
                <stage :stage_name="stage.stage_name" :stage_description="stage.stage_description">
                    <component :is="stage.svg"/>
                </stage>
            </b-col>
            <b-col class="col_svg">
                <svgProduction rel="preload"></svgProduction>
            </b-col>
        </b-row>
    </b-container>
    </div>
</template>

<script>
    import Stage from "./Stage";
    import svg_design from './svgs/production_stages/svg_design';
    import svg_delivery from './svgs/production_stages/svg_delivery';
    import svg_introduction from './svgs/production_stages/svg_introduction';
    import svg_support from './svgs/production_stages/svg_support';
    import svg_guarantee from './svgs/production_stages/svg_guarantee';
    import svgProduction from './svgs/production_stages/svg_production';
    export default {
        name: "production_stages",
        components: {Stage, svg_design, svg_delivery, svg_introduction,svg_support,svg_guarantee,svgProduction},
        data(){
            return {
                heading: 'Этапы производства',
                firstRow: [
                    {
                        stage_name:'Проектирование',
                        stage_description:'На этапе проектирования наша команда помогает ' +
                        'Заказчику определиться с задачей, учитывая все\n' +
                        'особенности работы: площадь помещения, окружающая среда' +
                        ' в помещении, электропитание, нормы пожарной безопасности.',
                        svg: 'svg_design',
                    },
                    {
                        stage_name:'Поставка',
                        stage_description:'Компания осуществляет безопасную' +
                        ' целевую и комплексную поставку IT-оборудования по всей России. \n' +
                        'Поставляемое оборудование обладает всеми необходимыми' +
                        ' сертификатами и стандартами качества.',
                        svg: 'svg_delivery',
                    },
                    {
                        stage_name:'Внедрение',
                        stage_description:'Согласовывается ТЗ, происходит выбор нового' +
                        ' оборудования, рассчитывается стоимость\n' +
                        ' внедрения, выполняется комплектация IT-оборудования, ' +
                        ' отладка внедренной системы и передача оборудования в промышленную эксплуатацию.',
                        svg: 'svg_introduction',
                    },
                ],
                secondRow: [
                    {
                        stage_name:'Техническая поддержка',
                        stage_description:'Специалисты компании оказывают помощь по вопросам' +
                        ' установки настройки, эксплуатации и обновления. Наша компания настроена' +
                        ' на быстрое устранение неисправностей – в случае необходимости производится\n' +
                        ' ремонт и краткосрочная доставка запасных компонентов и устройств.',
                        svg: 'svg_support',
                    },
                    {
                        stage_name:'Гарантийное обслуживание',
                        stage_description:'Наше оборудование имеет минимальную гарантию 12 месяцев.\n' +
                        'На время ремонта возможно предоставление подменного оборудования,\n' +
                        'а так же расширенные программы гарантийного и пост-гарантийного обслуживания. Все общение\n' +
                        'с сервисными центрами по ремонту и замене мы берем на себя.',
                        svg: 'svg_guarantee',
                    }
                ],
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>