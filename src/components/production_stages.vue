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
                <svgProduction></svgProduction>
            </b-col>
        </b-row>
    </b-container>
    </div>
</template>

<script>
    import Stage from "./Stage";
    import svg_proektirovanie from './svgs/production_stages/svg_proektirovanie';
    import svg_delivery from './svgs/production_stages/svg_delivery';
    import svg_intoduction from './svgs/production_stages/svg_introduction';
    import svg_support from './svgs/production_stages/svg_support';
    import svg_guarantee from './svgs/production_stages/svg_guarantee';
    import svgProduction from './svgs/production_stages/svg_production';
    export default {
        name: "production_stages",
        components: {Stage, svg_proektirovanie, svg_delivery, svg_intoduction,svg_support,svg_guarantee,svgProduction},
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
                        svg: 'svg_proektirovanie',
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
                        svg: 'svg_intoduction',
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
    #production_stages{
        background: linear-gradient(to top,#1d0d34,#2b1149,#180b2d);
        padding:3% 2% 2% 2% ;
        .container{
            background: url("../../public/images/glav.webp");
            background-size: 100% 100%;
        }
        .col{
            border-radius: 1%;
            margin: 1% 1.5%;
            padding: 0.313rem !important;
            box-shadow: 0 0 0.313rem rgba(130, 149, 198, 0.62);
            border:0.125rem solid  rgba(130, 149, 198, 0.62);
            background: rgba(221, 221, 234, 0.05);
            height:auto !important;
        }
        .col_svg{
            box-shadow: none !important;
            padding:0.938rem !important;
            border: none !important;
            background: transparent !important;
            height: 17.813rem !important;
        }
    }
    @media screen and (max-width: 500px) {
        #production_stages{
            .container{
                background: url("../../public/images/mob.webp");
                background-size: 100% 100%;
            }
            .row{
                flex-direction:column;
            }
            #proekt,#delivery,#introduction,#support,#guarantee{
                width:2.188rem !important;
                height:1.75rem !important;
                padding: 0 1% !important;
            }
            .col_svg{
                svg{
                    width: 50% !important;
                    margin-left:auto;
                    margin-right:auto;
                    display:block;
                }
                height:auto !important;
            }
            .col{
                padding-left:0.313rem !important;
                padding-right:0.313rem !important;
                margin: 1% 1% !important;
            }
        }
    }
    @media screen and (min-width: 500px)and (max-width: 768px) {
        #production_stages{
            .container{
                background: url("../../public/images/mob.webp");
                background-size: 100% 100%;
            }
            .row{
                flex-direction:column;
            }
            #proekt,#delivery,#introduction,#support,#guarantee{
                width: 1.563rem !important;
                height:1.875rem !important;
            }
            .col_svg{
                height:auto !important;
            }
            .col{
                padding-left:0.313rem !important;
                padding-right: 0.313rem !important;
                margin: .5% .5% !important;
            }
            #production{
                margin-left: auto;
                margin-right: auto;
                width: 45% !important;
                display:block;
                padding-top: 0;
            }
        }
    }
    @media screen and (min-width: 768px)and (max-width: 992px) {
        #production_stages{
            .container{
                background: url("../../public/images/mob.webp");
                background-size: 100% 100%;
            }
            .row{
                flex-direction:column;
            }
            #proekt,#delivery,#introduction,#support,#guarantee{
                width: 2.813rem!important;
                height:2.813rem !important;
            }
            .col_svg{
                height:auto !important;
            }
            #production{
                margin-left: auto;
                margin-right: auto;
                width: 45% !important;
                display:block;
                padding-top: 0;
            }
        }
    }
    @media screen and (min-width: 992px)and (max-width: 1200px) {
        #production_stages{
            .container{
                background: url("../../public/images/mob.webp");
                background-size: 100% 100%;
            }
            .row{
                flex-direction:column;
            }
            #proekt,#delivery,#introduction,#support,#guarantee{
                width: 3.438rem !important;
                height:3.438rem !important;
            }
            .col_svg{
                height:auto !important;
            }
            #production{
                margin-left: auto;
                margin-right: auto;
                width: 45% !important;
                display:block;
                padding-top: 0;
            }
        }
    }
    @media screen and (min-width: 1200px)and (max-width: 1400px) {
        #production_stages{
            #proekt,#delivery,#introduction,#support,#guarantee{
                width: 6.25rem !important;
                height:3.438rem !important;
            }
            .col_svg{
                height: 1.563rem !important;;
            }
        }
    }
    @media screen and (min-width: 1400px)and (max-width: 1600px) {
        #production_stages{
           .text {
                line-height: 1.25rem;
            }
            #proekt,#delivery,#introduction,#support,#guarantee{
                width: 6.875rem !important;
                height:3.438rem;
            }
        }
    }
</style>