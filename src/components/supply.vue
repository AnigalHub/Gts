<template>
    <div id="supply">
        <b-container>
            <b-row class="import_row">
                <b-col>
                    <svgCarSupply></svgCarSupply>
                </b-col>
                <b-col class="list_supply">
                    <h2>{{heading}}</h2>
                    <div v-for="supply in  RowSupply" :key="supply.name_supply">
                        <component :is="supply.svg"/>
                        <SupplyName :name_supply="supply.name_supply" >
                        </SupplyName>
                    </div>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
    import SupplyName from "./Supply_name";
    import svgCarSupply from './svgs/supply/svg_carsupply';
    import svgStorageSystem from './svgs/supply/svg_storagesystem';
    import svgWorkstations from './svgs/supply/svg_workstations';
    import svgPrinter from './svgs/supply/svg_printer';
    import svgSoftware from './svgs/supply/svg_software';
    import svgProjectors from './svgs/supply/svg_projectors';
    import svgVideoSurveillanceEquipment from './svgs/supply/svg_videosurveillanceequipment';
    import svgSCS from './svgs/supply/svg_scs';
    export default {
        components: {SupplyName, svgCarSupply,svgStorageSystem,svgWorkstations,svgPrinter,svgSoftware,svgProjectors,svgVideoSurveillanceEquipment,svgSCS},
        name: "supply",
        data() {
            return {
                heading: 'Мы поставляем',
                RowSupply:[
                    {
                        name_supply:'Сервера, системы хранения данных',
                        svg:'svgStorageSystem',
                    },
                    {
                        name_supply:'Рабочие станции',
                        svg:'svgWorkstations',
                    },
                    {
                        name_supply:'Печатающая техника, картриджи',
                        svg:'svgPrinter',
                    },
                    {
                        name_supply:'Программное обеспечение',
                        svg:'svgSoftware',
                    },
                    {
                        name_supply:'ЖК-панели, проекторы, интерактивные доски',
                        svg:'svgProjectors',
                    },
                    {
                        name_supply:'Оборудование для видеонаблюдения и контроля доступа',
                        svg:'svgVideoSurveillanceEquipment',
                    },
                    {
                        name_supply:'Оборудование для СКС',
                        svg:'svgSCS',
                    },

                ],
            }
        }
    }
</script>

<style scoped lang="scss">
    #supply{
        background: linear-gradient(to top,#180b2d, #2b1149,#1d0d34);
        padding:3% 2% 2% 2% ;
    }
    .row{
        padding-bottom: 2%;
    }
    #storage_system,#printer,#projectors,#workstations,
    #video_surveillance_equipment,#software,#scs{
        height: 3.75rem ; float:left;
    }
    .list_supply{
        padding: 0 !important;
        background: url("../../public/images/background_2.png");
        background-size: 100% 100%;
    }
    .col{
        .col{
            max-width: 20%;
            padding-left: 0 !important;
            padding-right: 0 !important;
        }
    }
	@media screen and (max-width: 500px) {
		.import_row{
			flex-direction: column-reverse;
		}
		.col-6,.list_supply{
			flex: 0 0 100% !important;
			max-width: 100% !important;
			padding-right: 0 !important;
			padding-left: 0 !important;
		}
        #car_supply{
			margin-left: auto;
			margin-right: auto;
			display:block;
			width: 90% !important;
		}
		#storage_system,#printer,#projectors,#workstations,
        #video_surveillance_equipment,#software,#scs{
			height: 1.5625rem ;
		}
		.list_supply{
			.col{
				max-width: 5%;
				padding-left: 0 !important;
				padding-right: 0 !important;
			}
		}
	}
    @media screen and (min-width: 500px)and (max-width: 768px) {
		.import_row{
			flex-direction: column-reverse;
		}
		.col-5,.col-6{
			flex: 0 0 100% !important;
			max-width: 100% !important;
		}
        #car_supply{
			margin-left: auto;
			margin-right: auto;
			display:block;
			width: 60% !important;
		}
		#storage_system,#printer,#projectors,#workstations,
        #video_surveillance_equipment,#software,#scs{
			height: 1.5625rem ;
		}
		.list_supply{
			.col{
				max-width: 5%;
				padding-left: 0 !important;
				padding-right: 0 !important;
			}
		}
    }
    @media screen and (min-width: 768px)and (max-width: 992px) {
        .import_row{
            flex-direction: column-reverse;
        }
        .col-5,.col-6{
            flex: 0 0 100% !important;
            max-width: 100% !important;
        }
        #car_supply{
			margin-left: auto;
			margin-right: auto;
			display:block;
			width: 60% !important;
		}
		#storage_system,#printer,#projectors,#workstations,
        #video_surveillance_equipment,#software,#scs{
			height: 2.1875rem ;
		}
    }
    @media screen and (min-width: 992px)and (max-width: 1200px) {
		#storage_system,#printer,#projectors,#workstations,
        #video_surveillance_equipment,#software,#scs{
			height: 1.875rem ;
		}
    }
    @media screen and (min-width: 1200px)and (max-width: 1400px) {
        #storage_system,#printer,#projectors,#workstations,
        #video_surveillance_equipment,#software,#scs{
            height: 2.5rem ;
        }
    }
    @media screen and (min-width: 1400px)and (max-width: 1600px) {
        #storage_system,#printer,#projectors,#workstations,
        #video_surveillance_equipment,#software,#scs{
            height: 3.125rem ;
        }
    }
</style>