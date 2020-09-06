<template>
    <b-navbar id="Nav" class="navbar-expand-xl navbar-dark sticky-top" toggleable>
        <b-container>
            <b-navbar-brand href="#principal" class="test" @click.prevent="scrollToTop()">
                <svg version="1.1" id="emblem" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 50 50" style="enable-background:new 0 0 50 50;" xml:space="preserve">
                    <g>
                        <path class="st0" d="M43.7,4.6c0,0-19.1-10.3-31.8,1.8C-2.6,20.1,6.9,63,43.7,45.1V24.8H27v5.1h10.8V42c0,0-23.6,9.4-25.6-16.7 c0.1-6.4-0.6-15.4,13-18.9c0.1,0,0.2,0,0.3-0.1c4.6-0.6,10.3-1.5,17.6,5.4h0.5V4.6z"/>
                        <g>
                            <polygon class="st0" points="16.7,20.1 16.7,15.8 15,15.8 15,15.1 19.1,15.1 19.1,15.8 17.4,15.8 17.4,20.1"/>
                            <polygon class="st0" points="22.9,15.1 19.7,15.1 19.7,20.1 22.9,20.1 22.9,19.4 20.7,19.4 20.4,19.4 20.4,17.7 22.9,17.7 22.9,17 21.7,17 20.4,17 20.4,15.8 22.9,15.8"/>
                            <polygon class="st1" points="24.7,15.2 24.2,15.2 24.2,20 24.7,20 24.7,17.8 25.2,17.8 26.9,20 27.6,20 25.7,17.6 25.7,17.4 27.6,15.2 26.9,15.2 25.2,17.1 24.7,17.1"/>
                            <polygon class="st1" points="29.2,15.2 29.2,20 29.9,20 29.9,17.8 32.1,17.8 32.1,20 32.8,20 32.8,15.2 32.1,15.2 32.1,17.1 29.9,17.1 29.9,15.2"/>
                            <polygon class="st2" points="34.5,15.2 34.5,20 35,20 35,15.9 37.1,20 37.9,20 37.9,15.2 37.4,15.2 37.4,18.8 37.1,18.8 35.2,15.2"/>
                            <path class="st1" d="M41.3,14.9c-1.2,0-2.2,1.2-2.2,2.7s1,2.7,2.2,2.7c1.2,0,2.2-1.2,2.2-2.7S42.5,14.9,41.3,14.9z M41.3,19.6 c-0.9,0-1.6-0.9-1.6-2s0.7-2,1.6-2s1.6,0.9,1.6,2S42.2,19.6,41.3,19.6z"/>
                        </g>
                    </g>
                    </svg>
            </b-navbar-brand>
            <b-navbar-toggle target="navbar-toggle-collapse">
                <template v-slot:default="{ expanded }">
                    <b-icon v-if="expanded" icon="chevron-bar-up"></b-icon>
                    <b-icon v-else icon="chevron-bar-down"></b-icon>
                </template>
            </b-navbar-toggle>
            <b-collapse id="navbar-toggle-collapse" is-nav v-model="isExpanded">
                <b-navbar-nav>
                        <b-nav-item @click="scrollToId" href="#about_company">О компании</b-nav-item>
                        <b-nav-item href="#production_stages" @click="scrollToId">Этапы производства</b-nav-item>
                        <b-nav-item href="#company_features" @click="scrollToId">Наши возможности</b-nav-item>
                        <b-nav-item href="#development" @click="scrollToId">Разработка и проектирование</b-nav-item>
                        <b-nav-item href="#supply" @click="scrollToId">Поставка</b-nav-item>
                        <b-nav-item href="#software_solutions" @click="scrollToId">Программные решения</b-nav-item>
                        <b-nav-item href="#service_support" @click="scrollToId">Сервисная поддержка</b-nav-item>
                        <b-nav-item href="#contacts" @click="scrollToId">Контакты</b-nav-item>
                </b-navbar-nav>
            </b-collapse>
        </b-container>
    </b-navbar>
</template>

<script>

    export default {
        name: "navbar",
        data(){
            return {
                isExpanded: false,
            }
        },
        methods:{
            scrollToTop(){
                window.scrollTo({top: 0, left: 0, behavior: 'smooth' });
            },
            scrollToId(event){
                let offsetY = 0;
                if(this.isExpanded){
                    let nav = document.getElementById(("Nav"));
                    let bounds =  nav.getBoundingClientRect();
                    offsetY = bounds.height;
                }
                let element = document.getElementById(event.target.hash.replace("#", ""));
                window.scrollTo({top: element.offsetTop - offsetY, left: 0, behavior: 'smooth'});
                event.preventDefault();
            }
        }
    }
</script>


<style lang="scss" scoped >
    #emblem{
        height: 3.125rem;
        width: 3.125rem;
        .st0{fill:#9aaecf;}
        .st1{fill:#9aaecf;stroke:#9aaecf;stroke-width:0.2415;stroke-miterlimit:10;}
        .st2{
            fill: #cf5443;
        }
    }
    #emblem:hover .st0{
        fill: #90d4fd;
    }
    #emblem:hover .st1{
        fill: #90d4fd;
        stroke:#90d4fd;
    }
    .navbar{
        box-sizing: border-box;
        width: 100%;
        overflow: hidden;
        background: #1f0b35;
        padding: 0 !important;
        .active{
            border:0.125rem solid #8b7eb6;
            background: #8b7eb6;
            box-shadow: 0 2px 8px rgba(92, 84, 124, 0.4), /* Exterior Shadow */
            inset 0 -15px 30px rgba(66, 55, 110, 0.3); /* Dark Background */
            -webkit-box-shadow: 0 2px 8px rgba(66, 55, 110, 0.3),
            inset 0 10px 20px rgba(66, 55, 110, 0.3),
            inset 0 -15px 30px rgba(66, 55, 110, 0.1);
            -moz-box-shadow: 0 2px 8px rgba(66, 55, 110, 0.3),
            inset 0 1px rgba(66, 55, 110, 0.3),
            inset 0 10px rgba(66, 55, 110, 0.2),
            inset 0 10px 20px rgba(66, 55, 110, 0.25),
            inset 0 -15px 30px rgba(66, 55, 110, 0.3);
            color: white;
        }
        a{
            margin-bottom: 0 !important;
        }
    }
    #navbar-toggle-collapse a {
        font-size: 1.25rem;
        float: left;
        display: block;
        color: #9aaecf;
        text-align: center;
        text-shadow: 0.031rem 0.031rem #68759c;
        &:hover{
            text-shadow: 0.031rem 0.031rem #eeedf5;
            color: #90d4fd;
        }
    }

    @media screen and  (min-width: 1200px) {
        .navbar-nav {
            width: 95%;
            height: 3.125rem;
            position: relative;
            display: table;
            left: 2%;
            margin: 0;
            padding: 0;
            .nav-item{
                display: table-cell;
                position: relative;
                a {
                    display: block;
                    position: relative;
                    width: 100%;
                    height: 100%;
                    text-align: center;
                    line-height: 3.125rem;
                }
            }
        }
    }
    @media (min-width: 1200px){
        .navbar-expand-xl .navbar-nav .nav-link {
            padding-right: 0;
            padding-left: 0;
        }
    }
    @media screen and (max-width: 500px) {
        #navbar-toggle-collapse a {
            padding-left: 6.5% !important;
        }
    }
    @media screen and (max-width: 1350px) {
        #navbar-toggle-collapse a {
            font-size: 0.875rem;
            padding-left: 2%;
        }
        #emblem{
            padding-left: 2%;
        }
    }
    @media screen and (min-width: 1350px)and (max-width: 1400px) {
        #navbar-toggle-collapse a {
            font-size: 1rem;
        }
    }
    @media screen and (min-width: 1400px)and (max-width: 1600px) {
        #navbar-toggle-collapse a {
            font-size: 1.125rem;
        }
    }
    @media screen and (max-width: 500px) {
        #emblem{
            height: 1.75rem;
            width: 1.75rem;
        }
        .navbar-toggler {
            padding: 0.25rem 0.5rem !important;
            margin-right: 4%;
        }
        .navbar-brand {
            padding-top: 0 !important;
            margin-left: 1rem !important;
        }
    }
    @media screen and (min-width: 500px)and (max-width: 768px) {
        #emblem{
            height: 1.875rem;
            width: 1.875rem;
        }
    }
    @media screen and (min-width: 768px)and (max-width: 992px) {
        #emblem{
            height: 2.188rem;
            width: 2.188rem;
        }
    }
    @media screen and (min-width: 992px)and (max-width: 1200px) {
        #emblem{
            height: 2.5rem;
            width: 2.5rem;
        }
    }

</style>