<template>
    <div id="principal">
        <b-container>
			<div id="gts">Гостехносервис</div>
			<div id="gts_description">IT-Технологии и Оборудование</div>
			<svgCity rel="preload" ></svgCity>
		</b-container>
    </div>

</template>

<script>
    import svgCity from './svgs/principal/svg_city';
    export default {
        components: { svgCity },
        name: "principal"
    }
</script>

<style scoped lang="scss">

</style>