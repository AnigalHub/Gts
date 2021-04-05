<template>
    <div id="principal">
        <b-container>
			<div id="gts">Гостехносервис</div>
			<div id="gts_description">IT-Технологии и Оборудование</div>
			<svgCity></svgCity>
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
    #principal {
		background: linear-gradient(to top,#1d0d34,#2b1149,#180b2d);
		padding:0 4% 0 4% ;
		.container{
			background: url("../../public/images/glav.webp");
			background-size: 100% 100%;
		}
	}
	#gts{
		font-size:5.313rem;
		color: #71c1db;
		text-shadow: 0 5px 0 #5050a0,
		0 14px 10px rgba(0,0,0,0.15),
		0 24px 2px rgba(0,0,0,0.1),
		0 34px 30px rgba(0,0,0,0.1);
		position: absolute;
		top:9.063rem;
		left: 50%;
		margin-right: -50%;
		transform: translate(-50%, -50%)
	}
	#gts_description{
		font-size:35px;
		color: #6199c1;
		text-shadow: 0 1px 0 #5050a0,
		0 14px 10px rgba(0,0,0,0.15),
		0 24px 2px rgba(0,0,0,0.1),
		0 34px 30px rgba(0,0,0,0.1);
		position: absolute;
		top: 13.75rem;
		left: 50%;
		margin-right: -50%;
		transform: translate(-50%, -50%)
	}
	#gts,#gts_description{
		font-family: 'Play', sans-serif;
		text-align:center;
	}
	@media screen and (max-width: 500px) {
		#principal{
			padding:0 !important;
		}
		#gts{
			font-size:1.563rem;
			top: 3.5rem;
			text-shadow: 0px 1.5px 0px #5050a0,
			0px 14px 10px rgba(0,0,0,0.15),
			0px 24px 2px rgba(0,0,0,0.1),
			0px 34px 30px rgba(0,0,0,0.1);
		}
		#gts_description{
			color: #61a7c1;
			font-size:1rem;
			top: 5rem;
		}
	}
	@media screen and (min-width: 500px)and (max-width: 768px) {
		#gts{
			font-size:2.188rem;
			top: 5.313rem;
			text-shadow: 0px 2px 0px #5050a0,
			0px 14px 10px rgba(0,0,0,0.15),
			0px 24px 2px rgba(0,0,0,0.1),
			0px 34px 30px rgba(0,0,0,0.1);
		}
		#gts_description{
			color: #61a7c1;
			font-size:1rem;
			top: 7.188rem;
		}
	}
	@media screen and (min-width: 768px)and (max-width: 992px) {
		#gts{
			font-size:3.438rem;
			top: 5.313rem;
			text-shadow: 0px 2px 0px #5050a0,
			0px 14px 10px rgba(0,0,0,0.15),
			0px 24px 2px rgba(0,0,0,0.1),
			0px 34px 30px rgba(0,0,0,0.1);
		}
		#gts_description{
			font-size:1.125rem;
			top: 8.125rem;
		}
	}
	@media screen and (min-width: 992px)and (max-width: 1200px) {
		#gts{
			font-size:3.438rem;
			top: 6.25rem;
		}
		#gts_description{
			font-size:1.125rem;
			top: 9.688rem;
		}
	}
	@media screen and (min-width: 1200px)and (max-width: 1400px) {
		#gts{
			font-size:3.438rem;
			top: 6.563rem;
		}
		#gts_description{
			font-size:1.125rem;
			top: 10.625rem;
		}
	}
	@media screen and (min-width: 1400px)and (max-width: 1600px) {
		#gts{
			font-size:4.063rem;
			top: 7.813rem;
		}
		#gts_description{
			font-size:1.25rem;
			top: 12.5rem;
		}
	}
</style>