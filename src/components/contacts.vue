<template>
    <div id="contacts">
        <b-container>
            <b-row>
                <b-col>
                    <h2>{{heading}}</h2>
                    <div class="text" v-html="address.descr_address"></div>
                </b-col>
                <b-col cols="7">
                    <div class="map">
                        <iframe :src="address.map" title="Адрес_компании"></iframe>
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

</style>