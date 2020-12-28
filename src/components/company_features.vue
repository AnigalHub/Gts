<template>
    <div id="company_features">
        <b-container>
            <b-row class="import_row">
                <b-col class="place_for_svg">
                    <svgFeatures></svgFeatures>
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
                            {
                                name_features:'Оборудование рабочего места',
                                svg:'svg_computer',
                            },
                            {
                                name_features:'Видеонаблюдение',
                                svg:'svg_videomonitoring',
                            },
                            {
                                name_features:'Сервера, системы хранения и обработки данных',
                                svg:'svg_server',
                            },
                        ],
                    },
                    {
                        RowFeatures:[
                            {
                                name_features:'Расходные материалы',
                                svg:'svg_materials',
                            },
                            {
                                name_features:'Контроль доступа',
                                svg:'svg_accesscontrol',
                            },

                            {
                                name_features:'Телекоммуникационные системы, локальные сети',
                                svg:'svg_telecommunications',
                            }
                        ],
                    }
                ],
            }
        }
    }
</script>

<style lang="scss" scoped>
    #company_features {
        background: linear-gradient(to top,#180b2d, #2b1149,#1d0d34);
        padding:3% 2% 2% 2% ;
        .col-7{
            background: url("../../public/images/background_2.png");
            background-size: 100% 100%;
        }
        .text{
            font-weight: 700 !important;
        }
        .col-7 .row{
            padding-top: 5%;
            padding-right: 7%;
            padding-left: 7%;
            padding-bottom: 5%;
        }
        svg {
            display: block;
            width: 100%;
            height: 100%;
        }
        .place_for_facilities{
            padding-bottom: 2%;
        }
        #computer, #materials,#video_monitoring,
        #access_control,#server,#telecommunications{
            width: 100% ;
            height: 5.625rem ;
        }
    }
    @media screen and (max-width: 500px) {
        #company_features{
            .place_for_svg,.col-7{
                flex: 0 0 100% !important;
                max-width: 100% !important;
                padding-right: 0 !important;
                padding-left: 0 !important;
            }
            .parts_facilities{
                .col{
                    padding-right: 0.313rem !important;
                    padding-left: 0.313rem !important;
                }
            }
            #features{
                margin-left: auto;
                margin-right: auto;
                width: 75% !important;
            }
            .import_row{
                flex-direction: column-reverse;
            }
            .col-7 .row{
                padding-left: 0 !important;
                padding-top: 2%;
                padding-right: 0 !important;
            }
            .possibility{
                .col-8{
                    flex: 0 0 75% !important;
                    max-width: 75% !important;
                    padding-right: 0 !important;
                    padding-left: 0 !important;
                }
            }
            #computer,#materials,#video_monitoring,
            #access_control,#server,#telecommunications{
                height: auto !important;
            }
        }
    }
    @media screen and (min-width: 500px)and (max-width: 768px) {
        #company_features{
            .col-7{
                flex: 0 0 100% !important;
                max-width: 100% !important;
            }
            .parts_facilities{
                .col{
                    padding-right: 0.625rem !important;
                    padding-left: 0.625rem !important;
                }
            }
            #features{
                margin-left: auto;
                margin-right: auto;
                width: 45% !important;
            }
            .import_row{
                flex-direction: column-reverse;
            }
            .col-7 .row{
                padding-left: 0 !important;
                padding-top: 2%;
                padding-right: 0 !important;
            }
            .possibility{
                .col-8{
                    padding-right: 0 !important;
                    padding-left: 0 !important;
                }
            }
            #computer,#materials,#video_monitoring,
            #access_control,#server,#telecommunications{
                height: 2.813rem !important;
            }
        }
    }
    @media screen and (min-width: 768px)and (max-width: 992px) {
        #company_features{
            .col-7{
                flex: 0 0 100% !important;
                max-width: 100% !important;
            }
            #features{
                margin-left: auto;
                margin-right: auto;
                width: 45% !important;
            }
            .import_row{
                flex-direction: column-reverse;
            }
            .col-7 .row{
                padding-left: 0 !important;
                padding-top: 2%;
                padding-right: 0 !important;
            }
            .possibility{
                .col-8{
                    padding-right: 0 !important;
                    padding-left: 0 !important;
                }
            }
            #computer,#materials,#video_monitoring,
            #access_control,#server,#telecommunications{
                height: 3.438rem !important;
            }
        }
    }
    @media screen and (min-width: 992px)and (max-width: 1200px) {
        #company_features{
            .col-7{
                flex: 0 0 66.666667% !important;
                max-width: 66.666667% !important;
            }
            .col-7 .row{
                padding-left: 0 !important;
                padding-top: 2%;
                padding-right: 0 !important;
            }
            .possibility{
                .col-8{
                    padding-right: 0 !important;
                    padding-left: 0 !important;
                }
            }
            #computer,#materials,#video_monitoring,
            #access_control,#server,#telecommunications{
                height: 5.625rem !important;
            }
        }
    }
    @media screen and (min-width: 1200px)and (max-width: 1400px) {
        #company_features{
            .col-7{
                flex: 0 0 66.666667% !important;
                max-width: 66.666667% !important;
            }
            .col-7 .row{
                padding-left: 0 !important;
            }
            #computer,#materials,#video_monitoring,
            #access_control,#server,#telecommunications{
                height: 5rem !important;
            }
        }
    }
    @media screen and (min-width: 1400px)and (max-width: 1600px) {
        #company_features{
            .col-7{
                flex: 0 0 66.666667% !important;
                max-width: 66.666667% !important;
            }
            .col-7 .row{
                padding-left: 0 !important;
            }
            #computer,#materials,#video_monitoring,
            #access_control,#server,#telecommunications{
                height: 3.75rem !important;
            }
        }
    }
</style>