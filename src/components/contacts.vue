<template>
    <div id="contacts">
        <b-container>
            <b-row>
                <b-col>
                    <h2>{{heading}}</h2>
                    <div class="text" v-html="address.descr_address"></div>
                </b-col>
                <b-col cols="7">
                    <div class="feature map">
                        <iframe :src="address.map"></iframe>
                    </div>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
    import address from '../../public/documents/address';
    export default {
        name: "contacts",
        data(){
            return {
                heading: 'Контакты',
                address:address,
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