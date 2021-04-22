<template>
    <div id="supply">
        <b-container>
            <b-row class="import_row">
                <b-col>
                    <svgCarSupply rel="preload"></svgCarSupply>
                </b-col>
                <b-col class="list_supply">
                    <h2>{{heading}}</h2>
                    <div v-for="supply in  RowSupply" :key="supply.name_supply">
                        <component :is="supply.svg"/>
                        <SupplyName :name_supply="supply.name_supply" />
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
                    {name_supply:'Сервера, системы хранения данных', svg:'svgStorageSystem',},
                    {name_supply:'Рабочие станции', svg:'svgWorkstations',},
                    {name_supply:'Печатающая техника, картриджи', svg:'svgPrinter',},
                    {name_supply:'Программное обеспечение', svg:'svgSoftware',},
                    {name_supply:'ЖК-панели, проекторы, интерактивные доски', svg:'svgProjectors',},
                    {name_supply:'Оборудование для видеонаблюдения и контроля доступа', svg:'svgVideoSurveillanceEquipment',},
                    {name_supply:'Оборудование для СКС', svg:'svgSCS',},
                ],
            }
        }
    }
</script>

<style scoped lang="scss">

</style>