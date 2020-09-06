<template>
    <div id="development">
        <b-container>
            <b-row>
                <b-col cols="6">
                    <h2>{{heading}}</h2>
                  <b-carousel v-model="slide" ref="myCarousel" :interval="4000" background="transparent" img-width="400" img-height="205">
                        <b-carousel-slide  v-for="item in myArray" :key="item.id"  img-blank>
                            <h4>{{item.name}}</h4>
                            <div class="text">{{item.descr}}</div>
                        </b-carousel-slide>
                    </b-carousel>
                    <a class="carousel-control-prev" @click="prevSlide()" data-slide="prev">
                        <span class="carousel-control-prev-icon"></span>
                    </a>
                    <a class="carousel-control-next" @click="nextSlide()" data-slide="next">
                        <span class="carousel-control-next-icon"></span>
                    </a>
                </b-col>
                <b-col>
                    <svgDesigning></svgDesigning>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
    import svgDesigning from './svgs/development/svg_designing';
    export default {
        components: { svgDesigning },
        name: "development",
        data(){
            return {

                heading: 'Разработка и проектирование',
                slide: 0,
                myArray: [
                    {id:1,name:'Разработка вычислительных средств и комплексов', descr:'Предоставляем разработку вычислительных средств и комплексов различной мощности,' +
                        ' ориентированных на решение различных задач. Осуществляем все этапы - от анализа требований к технике до технической поддержки.', style: false},
                    {id:2,name:'Проектирование ЛВС и офисной инфраструктуры', descr:'Правильно построенная ЛВС позволяет получать доступ к необходимой информации, обеспечивает защиту' +
                        ' от несанкционированного доступа к данным. Также наша компания может предложить любое офисное оборудование, подходящее для Вашей инфраструктуры.', style: false},
                    {id:3,name:'Производство вычислительных средств', descr:' Мы видим свою миссию в обеспечении доступности современных серверных' +
                        ' решений для широкого круга потребителей. Мы за то, чтобы любой заказчик смог получить самое современное оборудование по самой доступной цене.', style: false},
                    {id:4,name:'Проектирование систем безопасности', descr:' Создание «концепции безопасности» - самая главная часть создания любых' +
                        ' систем безопасности, выполняется всегда сугубо индивидуально под Заказчика, невзирая на размеры и «бюджет объекта».', style: false},
                    {id:5,name:'Производство специализированных средств', descr:'Разработка и конструирование необходимых деталей, а также металлообработка и моделирование.', style: true}
                ]
            }
        },
        methods: {
            prevSlide(){
                this.$refs.myCarousel.prev();
            },
            nextSlide(){
                this.$refs.myCarousel.next();
            },
        }
    }
</script>
<style>
    .carousel-caption{
        top: 0 !important;
        left: 0 !important;
        right: 0 !important;
        bottom: auto;
    }
</style>
<style lang="scss" scoped>
    #development{
        background: linear-gradient(to top,#1d0d34,#2b1149,#180b2d);
        padding:3% 2% 2% 2% ;
        .col-6{
            background: url("../../public/background.png");
            background-size: 100% 100%;
        }
        h4 {
            font-weight: 600;
            cursor: default;
            text-decoration: underline;
            text-shadow: 0 0.063rem 0 #1f0b30, 0 0.063rem 0 #a6a6a6, 0 0.125rem 0 #1f0b30;
        }

        h4,.text{
            text-align:left;
        }

        .carousel-control-prev {
            float: left !important;
        }
        .carousel-control-prev, .carousel-control-next {
            position: relative !important;
            width: 10% !important;
            margin-left: 70%;
            border: 0.063rem solid white;
            border-radius: 0.313rem;
            padding: 0.313rem;
        }

    }
    @media screen and (max-width: 500px) {
        #development{
            .row{
                flex-direction: column;
                .col-6,.col{
                    flex: 0 0 100% !important;
                    max-width: 100% !important;
                    padding-right: 0 !important;
                    padding-left: 0 !important;
                }
                svg{
                    margin-left: auto;
                    margin-right: auto;
                    display:block;
                    width: 90% !important;
                }
            }
        }
    }
    @media screen and (min-width: 500px)and (max-width: 768px) {
        #development{
            .row{
                flex-direction: column;
                .col-6{
                    flex: 0 0 100% !important;
                    max-width: 100% !important;
                }
                svg{
                    margin-left: auto;
                    margin-right: auto;
                    display:block;
                    width: 60% !important;
                }
            }
        }
    }
    @media screen and (min-width: 768px)and (max-width: 992px) {
        #development{
            .row{
                flex-direction: column;
                .col-6{
                    flex: 0 0 100% !important;
                    max-width: 100% !important;
                }
                svg{
                    margin-left: auto;
                    margin-right: auto;
                    display:block;
                    width: 60% !important;
                }
            }
        }
    }
</style>