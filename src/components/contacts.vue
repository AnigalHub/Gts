<template>
    <div id="contacts">
        <b-container>
            <b-row>
                <b-col >
                    <h2>{{heading}}</h2>
                    <div class="text" v-html="how_to_get_there"></div>
                </b-col>
                <b-col cols="7">
                    <div class="feature map" id="map-wrap">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2250.3635206939343!2d37.872211516086224!3d55.665278506206185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x414ab7cdc3b33969%3A0xa749f6d233ab0d29!2z0JPQvtGB0KLQtdGF0L3QvtCh0LXRgNCy0LjRgQ!5e0!3m2!1sru!2sru!4v1588940539751!5m2!1sru!2sru"  frameborder="0" allowfullscreen="" aria-hidden="false" ></iframe>
                    </div>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
    export default {
        name: "contacts",
        data(){
            return {
                heading: 'Контакты',
                how_to_get_there:`Приходите к нам в офис, обсудим Ваши проекты и предложим варианты их решения. Мы рады каждому Клиенту! </br></br> Наш офис находится в 15 минутах от метро.
               </br></br> Новорязанское шоссе, дом 6. Длинное кирпичное здание, подъезд 9-10, этаж 2.`
            }
        }
    }
</script>

<style lang="scss" scoped>
    #contacts{
        background: linear-gradient(to top,#1d0d34,#2b1149,#180b2d);
        padding:3% 2% 2% 2% ;
        .col{
            background: url("../../public/background.png");
            background-size: 100% 100%;
        }
        .feature.map {
            padding-top: 3%;
            iframe {
                min-height: 600px;
                height: auto;
                width:100%;
                border:0;
                filter: opacity(50%) brightness(95%);
                border-radius: 1.875rem;
            }
        }
    }
    @media screen and (max-width: 500px) {
        .row{
            flex-direction: column;
            .col,.col-7{
                flex: 0 0 100% !important;
                max-width: 100% !important;
                padding-right: 0 !important;
                padding-left: 0 !important;
            }
        }
        .feature.map {
            iframe {
                min-height: 300px !important;
                border-radius: 0.625rem !important;
            }
        }
    }
    @media screen and (min-width: 500px)and (max-width: 768px) {
        .row{
            flex-direction: column;
            .col-7{
                flex: 0 0 100% !important;
                max-width: 100% !important;
            }
        }
        .feature.map {
            iframe {
                min-height: 350px !important;
                border-radius: 0.625rem !important;
            }
        }
    }
    @media screen and (min-width: 768px)and (max-width: 992px) {
        .row{
            flex-direction: column;
            .col-7{
                flex: 0 0 100% !important;
                max-width: 100% !important;
            }
        }
        .feature.map {
            iframe {
                min-height: 400px !important;
                border-radius: 0.625rem !important;
            }
        }
    }
    @media screen and (min-width: 992px)and (max-width: 1200px) {
        .feature.map {
            iframe {
                min-height: 400px !important;
                border-radius: 0.938rem !important;
            }
        }
    }
    @media screen and (min-width: 1200px)and (max-width: 1400px) {
        .feature.map {
            iframe {
                min-height: 500px !important;
                border-radius: 1.25rem !important;
            }
        }
    }
    @media screen and (min-width: 1400px)and (max-width: 1600px) {
        .feature.map {
            iframe {
                min-height: 550px !important;
                border-radius: 1.563rem !important;
            }
        }
    }

</style>