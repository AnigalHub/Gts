<template>
    <b-navbar id="Nav" class="navbar-expand-xl navbar-dark sticky-top" toggleable>
        <b-container>
            <b-navbar-brand href="#principal" class="test" @click.prevent="scrollToTop()">
                <svgNavbar></svgNavbar>
            </b-navbar-brand>
            <b-navbar-toggle target="navbar-toggle-collapse">
                <template v-slot:default="{ expanded }">
                    <b-icon v-if="expanded" icon="chevron-bar-up"></b-icon>
                    <b-icon v-else icon="chevron-bar-down"></b-icon>
                </template>
            </b-navbar-toggle>
            <b-collapse id="navbar-toggle-collapse" is-nav v-model="isExpanded">
                <b-navbar-nav>
                        <b-nav-item @click="scrollToId" href="#about_company">О нас</b-nav-item>
                        <b-nav-item href="#production_stages" @click="scrollToId">Производство</b-nav-item>
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
    import svgNavbar from './svgs/navbar/svg_brand';
    export default {
        components: {svgNavbar },
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
                let offsetY = 15;
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
    /*меню (которое будет и складываться на маленьких экранах и раскрываться на больших)*/
    .navbar{
        box-sizing: border-box;
        width: 100%;
        overflow: hidden;
        background: #1f0b35;
        padding: 0 !important;
    }
    /*ссылки - пункты меню*/
    #navbar-toggle-collapse a {
        margin-bottom: 0 !important;
        font-size: 1.25rem;
        float: left;
        display: block;
        color: #9aaecf;
        text-align: center;
        text-shadow: 0.031rem 0.031rem #68759c;
        &:hover{ /*при наведении*/
            text-shadow: 0.031rem 0.031rem #eeedf5;
            color: #90d4fd;
        }
    }

    /**********АДАПТИВНОСТЬ********/
    @media screen and (max-width: 500px) {
        /*ссылки - пункты меню*/
        #navbar-toggle-collapse a {padding-left: 6.5% !important;}
        /*svg в логотипе*/
        #emblem{
            height: 1.75rem;
            width: 1.75rem;
        }
        /*пункты меню на маленьком экране (collapse)*/
        .navbar-toggler {
            padding: 0.25rem 0.5rem !important;
            margin-right: 4%;
        }
        /*блок под логотип*/
        .navbar-brand {
            padding-top: 0 !important;
            margin-left: 1rem !important;
        }
    }
    @media screen and (min-width: 500px)and (max-width: 768px) {
        /*svg в логотипе*/
        #emblem{
            height: 1.875rem;
            width: 1.875rem;
        }
    }
    @media screen and (min-width: 768px)and (max-width: 992px) {
        /*svg в логотипе*/
        #emblem{
            height: 2.188rem;
            width: 2.188rem;
        }
    }
    @media screen and (min-width: 992px)and (max-width: 1200px) {
        /*svg в логотипе*/
        #emblem{
            height: 2.5rem;
            width: 2.5rem;
        }
    }
    @media (min-width: 1200px){
        /*пункты меню*/
        .navbar-expand-xl .navbar-nav .nav-link {
            padding-right: 0;
            padding-left: 0;
        }
        .navbar-nav {/*список меню*/
            width: 95%;
            height: 3.125rem;
            position: relative;
            display: table;
            left: 2%;
            margin: 0;
            padding: 0;
            .nav-item{ /*пункт списка в меню*/
                display: table-cell;
                position: relative;
                a { /*ссылки - пункты меню*/
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
    @media screen and (min-width: 1350px)and (max-width: 1400px) {
        /*ссылки - пункты меню*/
        #navbar-toggle-collapse a {
            font-size: 1.15rem;
            letter-spacing: -.5px
        }
    }
    @media screen and (min-width: 1400px)and (max-width: 1600px) {
        /*ссылки - пункты меню*/
        #navbar-toggle-collapse a {font-size: 1.125rem;}
    }
    @media screen and (max-width: 1350px) {
        /*ссылки - пункты меню*/
        #navbar-toggle-collapse a {
            font-size: 1.05rem;
            letter-spacing: -.5px;
            padding-left: 2%;
        }
        /*svg в логотипе*/
        #emblem{padding-left: 2%;}
    }

</style>