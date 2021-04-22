<template>
    <div id="company_features">
        <b-container>
            <b-row class="import_row">
                <b-col class="place_for_svg">
                    <svgFeatures rel="preload"></svgFeatures>
                </b-col>
                <b-col cols="7">
                    <h2>{{heading}}</h2>
                    <div class="place_for_facilities">
                        <b-row class="parts_facilities">
                            <b-col  v-for="(features,index) in Features" :key="index">
                                <b-row class="possibility" v-for="value in features.RowFeatures" :key="value.name_features">
                                    <b-col class="place_for_possibility">
                                        <component :is="value.svg"/>
                                    </b-col>
                                    <b-col cols="8" class="text">
                                        <features :name_features="value.name_features"></features>
                                    </b-col>
                                </b-row>
                            </b-col>
                        </b-row>
                    </div>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
    import Features from "./Features";
    import svgFeatures from './svgs/company_features/svg_features';
    import svg_computer from './svgs/company_features/svg_computer';
    import svg_materials from './svgs/company_features/svg_materials';
    import svg_videomonitoring from './svgs/company_features/svg_videomonitoring';
    import svg_accesscontrol from './svgs/company_features/svg_accesscontrol';
    import svg_server from './svgs/company_features/svg_server';
    import svg_telecommunications from './svgs/company_features/svg_telecommunications';
    export default {
        components: { Features, svgFeatures,svg_computer,svg_materials, svg_videomonitoring,svg_accesscontrol,svg_server, svg_telecommunications },
        name: "company_features",
        data(){
            return {
                heading: 'Наши возможности',
                Features:[
                    {
                        RowFeatures:[
                            {name_features:'Оборудование рабочего места', svg:'svg_computer',},
                            {name_features:'Видеонаблюдение', svg:'svg_videomonitoring',},
                            {name_features:'Сервера, системы хранения и обработки данных', svg:'svg_server',},
                        ],
                    },
                    {
                        RowFeatures:[
                            {name_features:'Расходные материалы', svg:'svg_materials',},
                            {name_features:'Контроль доступа', svg:'svg_accesscontrol',},
                            {name_features:'Телекоммуникационные системы, локальные сети', svg:'svg_telecommunications',}
                        ],
                    }
                ],
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>