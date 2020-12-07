<template>
    <div class="footer">
        <b-container>
            <b-row>
                <b-col>
                    <div class="text"><i class="fa fa-train" aria-hidden="true"></i>{{address.metro}}</div>
                    <div class="text"><i class="fa fa-clock-o" aria-hidden="true"></i> {{address.working_hours}}</div>
                </b-col>
                <b-col>
                    <div class="text"><div><i class="fa fa-map-marker" aria-hidden="true"></i><span v-html="address.address"></span></div></div>
                </b-col>
                <b-col>
                    <div class="text"><a :href="'tel:' + address.phone"><i class="fa fa-phone"></i>{{address.phone}}</a></div>
                    <div class="text"><a :href="'mailto:'+ address.mail"><i class="fa fa-envelope-o" aria-hidden="true"></i>{{address.mail}}</a></div>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
    import address from '../../public/documents/address';
    export default {
        name: "MyFooter",
        data(){
            return {
                heading: 'Контакты',
                address:address,
            }
        }
    }
</script>

<style lang="scss" scoped>
.footer{
    background: #100a21;
    padding:2% 2% 2% 2% ;
    height: auto;
    color: white;
    max-height: 100%;

    .text{
        margin-top: 3%;
        text-align: center;
    }
    .col{
        text-align: center;
        padding-right: 0.313rem !important;
        padding-left: 0.313rem !important;
    }
    i{
        color:#8bcdf5;
        width: 1.875rem;
    }
    a{
        color: #8bcdf5;
    }
}
@media screen and (max-width: 500px) {
    .row{
        flex-direction: column;
    }
}
</style>