<template>

  <div id="app">
    <b-container fluid class="myContainer">
      <navbar/>
      <principal/>
      <about_company/>
      <production_stages/>
      <company_features/>
      <development/>
      <supply />
      <software_solutions/>
      <service_support/>
      <contacts/>
      <MyFooter/>
    </b-container>


  </div>
</template>

<script>
import Principal from "./components/principal";
import About_company from "./components/about_company";
import Navbar from "./components/navbar";
import Production_stages from "./components/production_stages";
import Company_features from "./components/company_features";
import Development from "./components/development";
import Supply from "./components/supply";
import Software_solutions from "./components/software_solutions";
import Service_support from "./components/service_support";
import Contacts from "./components/contacts";
import MyFooter from "./components/footer";


export default {
  name: 'App',
  components: {
      MyFooter,
      Contacts,
      Service_support,
      Software_solutions,
      Supply,
      Development,
      Company_features,
      Production_stages,
      Navbar,
      About_company,
      Principal
  }
}
</script>
<style>
  /*карусь в компоненте "Разработка и проектирование"*/
  .carousel-caption{
    top: 0 !important;
    left: 0 !important;
    right: 0 !important;
    bottom: auto;
  }
</style>
<style lang="scss">
/*вся страница*/
#app{
  margin: 0 !important;
  padding: 0 !important;
}
/*вся страница*/
body{background: linear-gradient(to top,#180b2d, #2b1149,#1d0d34);}
/*контейнер на блоки на всю площадь экрана*/
.container-fluid{
  padding-left: 0 !important;
  padding-right: 0 !important;
}
/*параметры сетки бутстрап*/
.row {margin: 0 !important;}
/*текст по всему сайту*/
.text{
  font-size:1.375rem;
  padding-bottom: 2%;
}
/*заголовки*/
h2{
  padding-top: 4%;
  font-weight: 700;
  padding-bottom: 1%;
  cursor: default;
  text-align: center;
  text-shadow: 0 .5px 0 #CCCCCC, 0 .5px 0 #a6a6a6, 0 1px 0 #a6a6a6;
}
h3{font-size: 1.5rem !important;}
h2,h3,.text{
  color: #8bcdf5;
  font-family: 'Roboto', sans-serif;
}
/*Компонент с названием и svg (самый первый)*/
#principal {
  background: linear-gradient(to top,#1d0d34,#2b1149,#180b2d);
  padding:0 4% 0 4% ;
  /*контейнер (посередине экрана)*/
  .container {
    background: url("../public/images/glav.webp");
    background-size: 100% 100%;
  }
  /*название компании - "Гостехносервис"*/
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
  /*фраза - "IT-Технологии и Оборудование"*/
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
  /*название компании - "Гостехносервис",фраза - "IT-Технологии и Оборудование"*/
  #gts,#gts_description{
      font-family: 'Play', sans-serif;
      text-align:center;
  }
}
/*Компонент - "О компании"*/
#about_company{
  background: linear-gradient(to top,#180b2d, #2b1149,#1d0d34);
  padding:3% 2% 2% 2% ;
  /*параметры сетки бутстрап (блок под текст и заголовок)*/
  .col{
    background: url("../public/images/background_2.webp");
    background-size: 100% 100%;
  }
  /*svg компонента (О компании)*/
  svg{
    height: 100% !important;
    width: 110% !important;
  }
}
/*Компонент - "Этапы производства"*/
#production_stages{
  background: linear-gradient(to top,#1d0d34,#2b1149,#180b2d);
  padding:3% 2% 2% 2%;
  /*контейнер (посередине экрана)*/
  .container{
    background: url("../public/images/glav.webp");
    background-size: 100% 100%;
  }
  /*заголовок (название этапа)*/
  h3{
    padding-bottom: 1%;
    cursor: default;
    text-decoration: underline;
    font-weight: 600;
    text-shadow: 0 0.063rem 0 #2e3b5c, 0 0.125rem 0 #2e3b5c, 0 0.188rem 0 #2e3b5c;
  }
  /*параметры сетки бутстрап (блоки под этапы и svg)*/
  .col{
    border-radius: 1%;
    margin: 1% 1.5%;
    padding: 0.313rem !important;
    box-shadow: 0 0 0.313rem rgba(130, 149, 198, 0.62);
    border:0.125rem solid  rgba(130, 149, 198, 0.62);
    background: rgba(221, 221, 234, 0.05);
    height:auto !important;
  }
  /*параметры сетки бутстрап (блок под svg)*/
  .col_svg{
    box-shadow: none !important;
    padding:0.938rem !important;
    border: none !important;
    background: transparent !important;
    height: 17.813rem !important;
  }
}
/*Компонент - "Наши возможности"*/
#company_features {
  background: linear-gradient(to top,#180b2d, #2b1149,#1d0d34);
  padding:3% 2% 2% 2% ;
  /*параметры сетки бутстрап (блок под текст с svg и заголовок)*/
  .col-7{
    background: url("../public/images/background_2.webp");
    background-size: 100% 100%;
  }
  /*текст по всему компоненту (Наши возможности)*/
  .text{font-weight: 700 !important;}
  /*параметры сетки бутстрап (блок под каждую возможность)*/
  .col-7 .row{padding: 5% 7% 5% 7%;}
  /*svg компонента (Наши возможности)*/
  svg {
    display: block;
    width: 100%;
    height: 100%;
  }
  /*блок под svg для каждой возможности*/
  .place_for_facilities{padding-bottom: 2%;}
  /*svg компонента (маленькие svg под каждую возможность)*/
  #computer, #materials,#video_monitoring,
  #access_control,#server,#telecommunications{
    width: 100% ;
    height: 5.625rem ;
  }
}
/*Компонент - "Разработка и проектирование"*/
#development{
  background: linear-gradient(to top,#1d0d34,#2b1149,#180b2d);
  padding:3% 2% 2% 2% ;
  /*параметры сетки бутстрап (блок под текст и заголовок)*/
  .col-6{
    background: url("../public/images/background.webp");
    background-size: 100% 100%;
  }
  /*заголовок (название пункта)*/
  h3 {
    font-weight: 600;
    cursor: default;
    text-decoration: underline;
    text-shadow: 0 0.063rem 0 #1f0b30, 0 0.063rem 0 #a6a6a6, 0 0.125rem 0 #1f0b30;
  }
  /*заголовок (название пункта), текст*/
  h3,.text{text-align:left;}
  /*левая кнопка карусели*/
  .carousel-control-prev {float: left !important;}
  /*кнопки карусели*/
  .carousel-control-prev, .carousel-control-next {
    position: relative !important;
    width: 10% !important;
    margin-left: 70%;
    border: 0.063rem solid white;
    border-radius: 0.313rem;
    padding: 0.313rem;
  }
}
/*Компонент - "Мы поставляем"*/
#supply{
  background: linear-gradient(to top,#180b2d, #2b1149,#1d0d34);
  padding:3% 2% 2% 2%;
  /*текст по всему компоненту (Мы поставляем)*/
  .text{padding-left: 4.375rem;}
  /*параметры сетки бутстрап (блок под поставку (текст, svg и заголовок) и svg)*/
  .import_row{padding-bottom: 2%;}
  /*svg компонента (маленькие svg под каждую позицию поставки)*/
  #storage_system,#printer,#projectors,#workstations,
  #video_surveillance_equipment,#software,#scs{
    height: 3.75rem ;
    float:left;
  }
  /*параметры сетки бутстрап (блок под поставку (текст, svg и заголовок))*/
  .list_supply{
    padding: 0 !important;
    background: url("../public/images/background_2.webp");
    background-size: 100% 100%;
  }
}
/*Компонент - "Программныее решения"*/
#software_solutions{
  background: linear-gradient(to top,#1d0d34,#2b1149,#180b2d);
  padding:3% 2% 2% 2% ;
  /*заголовок (названия программных решений)*/
  h3{
    font-weight: 900;
    text-decoration: underline;
    text-decoration-color: #922cd3;
    cursor: default;
  }
  /*svg компонента (Программные решения)*/
  svg{width: 100% !important;}
  /*блок под программные решения и заголовок*/
  .program_solutions{
    background: url("../public/images/background.webp");
    background-size: 100% 100%;
  }
  /*параметры сетки бутстрап (блок под каждое программное решение)*/
  .col .row{
    margin-top: 2% !important;
    padding-bottom:1.5%;
  }
}
/*Компонент - "Сервисная поддержка"*/
#service_support{
  background: linear-gradient(to top,#180b2d, #2b1149,#1d0d34);
  padding:3% 2% 2% 2%;
  /*блок под пункты сервисной поддежки*/
  .support {
    padding: 0 !important;
    background: url("../public/images/background_2.webp");
    background-size: 100% 100%;
    border: none !important;
    box-shadow: none !important;
    margin: 0 !important;
    /*параметры сетки бутстрап (пункты сервисной поддержки)*/
    .col {
      padding: 1.563rem;
      border-radius: 0.938rem;
      box-shadow: 0 0 0.313rem rgba(130, 149, 198, 0.62);
      border: 0.125rem solid  rgba(130, 149, 198, 0.62);
      background: rgba(221, 221, 234, 0.1);
      margin: 0.75rem;
    }
  }
  /*svg компонента (Сервисная поддержка)*/
  svg{padding-top: 15%;}
}
/*Компонент - "Контакты"*/
#contacts{
  background: linear-gradient(to top,#1d0d34,#2b1149,#180b2d);
  padding:3% 2% 2% 2%;
  /*параметры сетки бутстрап (блок под информацию)*/
  .col{
    background: url("../public/images/background.webp");
    background-size: 100% 100%;
  }
  /*место под карту*/
  .map{
    padding-top: 3%;
    /*карта с гугл-карт*/
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


/**********АДАПТИВНОСТЬ********/
@media (min-width: 1200px){
  /*контейнер (посередине экрана)*/
  .container, .container-lg, .container-md, .container-sm, .container-xl {
    max-width: 1920px !important;
    max-height: 100%;
  }
}
@media screen and (max-width: 500px) {
  /*заголовки*/
  h2{font-size: 1.2rem !important;}
  h3{font-size: 1rem !important;}
  /*текст по всему сайту*/
  .text{font-size:0.7rem !important;}
  /*Компонент с названием и svg (самый первый)*/
  #principal{
    padding:0 !important;
    /*название компании - "Гостехносервис"*/
    #gts{
      font-size:1.563rem;
      top: 3.5rem;
      text-shadow: 0 1.5px 0 #5050a0,
      0 14px 10px rgba(0,0,0,0.15),
      0 24px 2px rgba(0,0,0,0.1),
      0 34px 30px rgba(0,0,0,0.1);
    }
    /*фраза - "IT-Технологии и Оборудование"*/
    #gts_description{
      color: #61a7c1;
      font-size:1rem;
      top: 5rem;
    }
  }
  /*Компонент - "О компании"*/
  #about_company{
    /*параметры сетки бутстрап (блок под svg, текст и заголовок)*/
    .row{
      flex-direction: column-reverse;
      /*параметры сетки бутстрап (блоки под svg, текст и заголовок)*/
      .col,.col-5{
        padding-left: 0 !important;
        padding-right: 0 !important;
      }
      /*параметры сетки бутстрап (блок под svg)*/
      .col-5{max-width: 100% !important;}
      /*svg компонента (О компании)*/
      svg{
        width: 90% !important;
        display:block;
        margin-right: auto;
        margin-left: auto;
      }
    }
  }
  /*Компонент - "Этапы производства"*/
  #production_stages{
    /*контейнер (посередине экрана)*/
    .container{
      background: url("../public/images/mob.webp");
      background-size: 100% 100%;
    }
    /*параметры сетки бутстрап (блок под этапы и svg)*/
    .row{flex-direction:column;}
    /*svg компонента (маленькие svg в этапах)*/
    #design,#delivery,#introduction,#support,#guarantee{
      width:2.188rem !important;
      height:1.75rem !important;
      padding: 0 1% !important;
    }
    /*параметры сетки бутстрап (блок под svg)*/
    .col_svg{
      height:auto !important;
      /*svg компонента (Этапы производства (большая svg)*/
      svg{
        width: 50% !important;
        margin-left:auto;
        margin-right:auto;
        display:block;
      }
    }
    /*параметры сетки бутстрап (блоки под этапы и svg)*/
    .col{
      padding-left:0.313rem !important;
      padding-right:0.313rem !important;
      margin: 1% 1% !important;
    }
  }
  /*Компонент - "Наши возможности"*/
  #company_features{
    /*параметры сетки бутстрап (блок под svg, блок под текст с svg и заголовок)*/
    .place_for_svg,.col-7{
      flex: 0 0 100% !important;
      max-width: 100% !important;
      padding-right: 0 !important;
      padding-left: 0 !important;
    }
    /*параметры сетки бутстрап (блок под большую svg)*/
    .parts_facilities .col{
        padding-right: 0.313rem !important;
        padding-left: 0.313rem !important;
    }
    /*svg компонента (Наши возможности (большая svg))*/
    #features{
      margin-left: auto;
      margin-right: auto;
      width: 75% !important;
    }
    /*блок под возможности (текст, svg и заголовок) и svg*/
    .import_row{flex-direction: column-reverse;}
    /*параметры сетки бутстрап (блок под каждую возможность)*/
    .col-7 .row{
      padding-left: 0 !important;
      padding-top: 2%;
      padding-right: 0 !important;
    }
    /*параметры сетки бутстрап (блок под возможность (текст))*/
    .possibility .col-8{
        flex: 0 0 75% !important;
        max-width: 75% !important;
        padding-right: 0 !important;
        padding-left: 0 !important;
    }
    /*svg компонента (маленькие svg под каждую возможность)*/
    #computer,#materials,#video_monitoring,
    #access_control,#server,#telecommunications{
      height: auto !important;
    }
  }
  /*Компонент - "Разработка и проектирование"*/
  #development{
    /*параметры сетки бутстрап (блок под текст, заголовок и svg)*/
    .row{
      flex-direction: column;
      /*параметры сетки бутстрап (блок под текст и заголовок, блок под svg)*/
      .col-6,.col{
        flex: 0 0 100% !important;
        max-width: 100% !important;
        padding-right: 0 !important;
        padding-left: 0 !important;
      }
      /*svg компонента (Разработка и проектирование)*/
      svg{
        margin-left: auto;
        margin-right: auto;
        display:block;
        width: 90% !important;
      }
    }
  }
  /*Компонент - "Мы поставляем"*/
  #supply {
    /*текст по всему компоненту (Мы поставляем)*/
    .text{padding-left: 1.875rem;}
    /*параметры сетки бутстрап (блок под поставку (текст, svg и заголовок) и svg)*/
    .import_row {flex-direction: column-reverse;}
    /*параметры сетки бутстрап (блок под поставку (текст, svg и заголовок) и блок svg)*/
    .col {
      flex: 0 0 100% !important;
      max-width: 100% !important;
      padding-right: 0 !important;
      padding-left: 0 !important;
    }
    /*svg компонента (Мы поставляем (большая svg))*/
    #car_supply {
      margin-left: auto;
      margin-right: auto;
      display: block;
      width: 90% !important;
    }
    /*svg компонента (маленькие svg под каждую позицию поставки)*/
    #storage_system, #printer, #projectors, #workstations,
    #video_surveillance_equipment, #software, #scs {
      height: 1.5625rem;
    }
  }
  /*Компонент - "Программныее решения"*/
  #software_solutions{
    /*параметры сетки бутстрап (блок под программные решения (текст и заголовок) и svg)*/
    .import_row{flex-direction: column;}
    /*параметры сетки бутстрап (блок под программные решения (текст и заголовок) и блок svg)*/
    .col{
      flex: 0 0 100% !important;
      max-width: 100% !important;
      padding-right: 0 !important;
      padding-left: 0 !important;
    }
    /*заголовок (названия программных решений)*/
    h3{letter-spacing: -0.05rem;}
    /*блок под большую svg, блок под программные решения и заголовок*/
    .program_svg,.program_solutions{
      flex: 0 0 100% !important;
      max-width: 100% !important;
      padding-right: 0 !important;
      padding-left: 0 !important;
    }
    /*параметры сетки бутстрап (блок под каждое программное решение)*/
    .col .row{
      margin-bottom:1% !important;
      margin-top: .5% !important;
    }
    /*текст по всему компоненту (Программные решения)*/
    .text {
      height: 1.563rem;
      padding-left: 0.5rem !important;
    }
    /*svg компонента (Программные решения)*/
    svg{
      margin-left: auto;
      margin-right: auto;
      width: 90% !important;
      display:block;
      margin-top: 0 !important;
    }
  }
  /*Компонент - "Сервисная поддержка"*/
  #service_support{
    /*параметры сетки бутстрап (блок под сервисную поддержку svg и (текст и заголовок))*/
    .import_row{flex-direction: column-reverse;}
    /*параметры сетки бутстрап (блок под svg)*/
    .col-5{
      flex: 0 0 100% !important;
      max-width: 100% !important;
      padding-right: 0 !important;
      padding-left: 0 !important;
    }
    /*параметры сетки бутстрап (пункты сервисной поддержки)*/
    .support .col {
        border-radius: 0.5rem;
        padding: 0.313rem !important;
        margin:0.5rem;
    }
    /*svg компонента (Сервисная поддержка)*/
    svg{
      margin-left: auto;
      margin-right: auto;
      width: 90% !important;
      display:block;
      padding-top: 0;
    }
  }
  /*Компонент - "Контакты"*/
  #contacts {
    /*параметры сетки бутстрап (блок под информацию и карту)*/
    .row {
      flex-direction: column;
      /*параметры сетки бутстрап (блок под информацию, блок под карту)*/
      .col, .col-7 {
        flex: 0 0 100% !important;
        max-width: 100% !important;
        padding-right: 0 !important;
        padding-left: 0 !important;
      }
    }
    /*место под карту*/
    .map{
      /*карта с гугл-карт*/
      iframe {
        min-height: 300px !important;
        border-radius: 0.625rem !important;
      }
    }
  }
}
@media screen and (min-width: 500px)and (max-width: 768px) {
  /*заголовки*/
  h2{font-size: 1.2rem !important;}
  h3{font-size: 1rem !important;}
  /*текст по всему сайту*/
  .text{font-size: 0.9375rem !important;}
  /*Компонент с названием и svg (самый первый)*/
  #principal {
    /*название компании - "Гостехносервис"*/
    #gts {
      font-size: 2.188rem;
      top: 5.313rem;
      text-shadow: 0 2px 0 #5050a0,
      0 14px 10px rgba(0, 0, 0, 0.15),
      0 24px 2px rgba(0, 0, 0, 0.1),
      0 34px 30px rgba(0, 0, 0, 0.1);
    }
    /*фраза - "IT-Технологии и Оборудование"*/
    #gts_description {
      color: #61a7c1;
      font-size: 1rem;
      top: 7.188rem;
    }
  }
  /*Компонент - "О компании"*/
  #about_company{
    /*параметры сетки бутстрап (блок под svg, текст и заголовок)*/
    .row{
      flex-direction: column-reverse;
      /*параметры сетки бутстрап (блок под svg)*/
      .col-5{max-width: 100% !important;}
      /*svg компонента (О компании)*/
      svg{
        width: 60% !important;
        display:block;
        margin-right: auto;
        margin-left: auto;
      }
    }
  }
  /*Компонент - "Этапы производства"*/
  #production_stages{
    /*контейнер (посередине экрана)*/
    .container{
      background: url("../public/images/mob.webp");
      background-size: 100% 100%;
    }
    /*параметры сетки бутстрап (блок под этапы и svg)*/
    .row{flex-direction:column;}
    /*svg компонента (маленькие svg в этапах)*/
    #design,#delivery,#introduction,#support,#guarantee{
      width: 1.563rem !important;
      height:1.875rem !important;
    }
    /*параметры сетки бутстрап (блок под svg)*/
    .col_svg{height:auto !important;}
    /*параметры сетки бутстрап (блоки под этапы и svg)*/
    .col{
      padding-left:0.313rem !important;
      padding-right: 0.313rem !important;
      margin: .5% .5% !important;
    }
    /*svg компонента (Этапы производства (большая svg)*/
    #production{
      margin-left: auto;
      margin-right: auto;
      width: 45% !important;
      display:block;
      padding-top: 0;
    }
  }
  /*Компонент - "Наши возможности"*/
  #company_features{
    /*параметры сетки бутстрап (блок под текст с svg и заголовок)*/
    .col-7{
      flex: 0 0 100% !important;
      max-width: 100% !important;
    }
    /*параметры сетки бутстрап (блок под большую svg)*/
    .parts_facilities .col{
        padding-right: 0.625rem !important;
        padding-left: 0.625rem !important;
    }
    /*svg компонента (Наши возможности (большая svg))*/
    #features{
      margin-left: auto;
      margin-right: auto;
      width: 45% !important;
    }
    /*параметры сетки бутстрап (блок под возможности (текст, svg и заголовок) и svg)*/
    .import_row{flex-direction: column-reverse;}
    /*параметры сетки бутстрап (блок под каждую возможность)*/
    .col-7 .row{
      padding-left: 0 !important;
      padding-top: 2%;
      padding-right: 0 !important;
    }
    /*параметры сетки бутстрап (блок под возможность (текст))*/
    .possibility .col-8{
        padding-right: 0 !important;
        padding-left: 0 !important;
    }
    /*svg компонента (маленькие svg под каждую возможность)*/
    #computer,#materials,#video_monitoring,
    #access_control,#server,#telecommunications{
      height: 2.813rem !important;
    }
  }
  /*Компонент - "Разработка и проектирование"*/
  #development{
    /*параметры сетки бутстрап (блок под текст, заголовок и svg)*/
    .row{
      flex-direction: column;
      /*параметры сетки бутстрап (блок под текст и заголовок)*/
      .col-6{
        flex: 0 0 100% !important;
        max-width: 100% !important;
      }
      /*svg компонента (Разработка и проектирование)*/
      svg{
        margin-left: auto;
        margin-right: auto;
        display:block;
        width: 60% !important;
      }
    }
  }
  /*Компонент - "Мы поставляем"*/
  #supply {
    /*текст по всему компоненту (Мы поставляем)*/
    .text{padding-left: 1.875rem;}
    /*параметры сетки бутстрап (блок под поставку (текст, svg и заголовок) и svg)*/
    .import_row {flex-direction: column-reverse;}
    /*параметры сетки бутстрап (блок под поставку (текст, svg и заголовок) и блок svg)*/
    .col {
      flex: 0 0 100% !important;
      max-width: 100% !important;
    }
    /*svg компонента (Мы поставляем (большая svg))*/
    #car_supply {
      margin-left: auto;
      margin-right: auto;
      display: block;
      width: 60% !important;
    }
    /*svg компонента (маленькие svg под каждую позицию поставки)*/
    #storage_system, #printer, #projectors, #workstations,
    #video_surveillance_equipment, #software, #scs {
      height: 1.5625rem;
    }
  }
  /*Компонент - "Программныее решения"*/
  #software_solutions{
    /*параметры сетки бутстрап (блок под программные решения (текст и заголовок) и svg)*/
    .import_row{flex-direction: column;}
    /*параметры сетки бутстрап (блок под каждое программное решение)*/
    .col .row{
      margin-bottom:1% !important;
      margin-top: .5% !important;
    }
    /*текст по всему компоненту (Программные решения)*/
    .text {
      line-height: 0.938rem;
      height: 2.188rem;
    }
    /*svg компонента (Программные решения)*/
    svg{
      margin-left: auto;
      margin-right: auto;
      width: 55% !important;
      display:block;
      margin-top: 0 !important;
    }
  }
  /*Компонент - "Сервисная поддержка"*/
  #service_support{
    /*параметры сетки бутстрап (блок под сервисную поддержку svg и (текст и заголовок))*/
    .import_row{flex-direction: column-reverse;}
    /*параметры сетки бутстрап (блок под svg)*/
    .col-5{
      flex: 0 0 100% !important;
      max-width: 100% !important;
    }
    /*параметры сетки бутстрап (пункты сервисной поддержки)*/
    .support .col {
        border-radius: 0.625rem;
        padding: 0.625rem !important;
        margin: 0.5rem;
    }
    /*текст по всему компоненту (Сервисная поддержка)*/
    .text {line-height: 0.938rem;}
    /*svg компонента (Сервисная поддержка)*/
    svg{
      margin-left: auto;
      margin-right: auto;
      width: 45% !important;
      display:block;
      padding-top: 0;
    }
  }
  /*Компонент - "Контакты"*/
  #contacts {
    /*параметры сетки бутстрап (блок под информацию и карту)*/
    .row {
      flex-direction: column;
      /*параметры сетки бутстрап (блок под карту)*/
      .col-7 {
        flex: 0 0 100% !important;
        max-width: 100% !important;
      }
    }
    /*место под карту*/
    .map{
      /*карта с гугл-карт*/
      iframe {
        min-height: 350px !important;
        border-radius: 0.625rem !important;
      }
    }
  }
}
@media screen and (min-width: 768px)and (max-width: 992px) {
  /*заголовки*/
  h2{font-size: 1.2rem !important;}
  h3{font-size: 1rem !important;}
  /*текст по всему сайту*/
  .text,td{
    font-size:1rem !important;
    line-height: 1rem;
  }
  /*Компонент с названием и svg (самый первый)*/
  #principal {
    /*название компании - "Гостехносервис"*/
    #gts {
      font-size: 3.438rem;
      top: 5.313rem;
      text-shadow: 0 2px 0 #5050a0,
      0 14px 10px rgba(0, 0, 0, 0.15),
      0 24px 2px rgba(0, 0, 0, 0.1),
      0 34px 30px rgba(0, 0, 0, 0.1);
    }
    /*фраза - "IT-Технологии и Оборудование"*/
    #gts_description {
      font-size: 1.125rem;
      top: 8.125rem;
    }
  }
  /*Компонент - "О компании"*/
  #about_company{
    /*параметры сетки бутстрап (блок под svg, текст и заголовок)*/
    .row{
      flex-direction: column-reverse;
      /*параметры сетки бутстрап (блок под svg)*/
      .col-5{max-width: 90% !important;}
      /*svg компонента (О компании)*/
      svg{
        width: 70% !important;
        display:block;
        margin-right: auto;
        margin-left: auto;
      }
    }
  }
  /*Компонент - "Этапы производства"*/
  #production_stages{
    /*контейнер (посередине экрана)*/
    .container{
      background: url("../public/images/mob.webp");
      background-size: 100% 100%;
    }
    /*текст по всему компоненту (Этапы производства)*/
    .text{line-height: 1.125rem !important;}
    /*параметры сетки бутстрап (блок под этапы и svg)*/
    .row{flex-direction:column;}
    /*svg компонента (маленькие svg в этапах)*/
    #design,#delivery,#introduction,#support,#guarantee{
      width: 2.813rem!important;
      height:2.813rem !important;
    }
    /*параметры сетки бутстрап (блок под svg)*/
    .col_svg{height:auto !important;}
    /*svg компонента (Этапы производства (большая svg))*/
    #production{
      margin-left: auto;
      margin-right: auto;
      width: 45% !important;
      display:block;
      padding-top: 0;
    }
  }
  /*Компонент - "Наши возможности"*/
  #company_features{
    /*параметры сетки бутстрап (блок под текст с svg и заголовок)*/
    .col-7{
      flex: 0 0 100% !important;
      max-width: 100% !important;
    }
    /*svg компонента (Наши возможности (большая svg))*/
    #features{
      margin-left: auto;
      margin-right: auto;
      width: 45% !important;
    }
    /*параметры сетки бутстрап (блок под возможности (текст, svg и заголовок) и svg)*/
    .import_row{flex-direction: column-reverse;}
    /*параметры сетки бутстрап (блок под каждую возможность)*/
    .col-7 .row{
      padding-left: 0 !important;
      padding-top: 2%;
      padding-right: 0 !important;
    }
    /*параметры сетки бутстрап (блок под возможность (текст))*/
    .possibility .col-8{
        padding-right: 0 !important;
        padding-left: 0 !important;
    }
    /*svg компонента (маленькие svg под каждую возможность)*/
    #computer,#materials,#video_monitoring,
    #access_control,#server,#telecommunications{
      height: 3.438rem !important;
    }
  }
  /*Компонент - "Разработка и проектирование"*/
  #development{
    /*параметры сетки бутстрап (блок под текст, заголовок и svg)*/
    .row{
      flex-direction: column;
      /*параметры сетки бутстрап (блок под текст и заголовок)*/
      .col-6{
        flex: 0 0 100% !important;
        max-width: 100% !important;
      }
      /*svg компонента (Разработка и проектирование)*/
      svg{
        margin-left: auto;
        margin-right: auto;
        display:block;
        width: 60% !important;
      }
    }
  }
  /*Компонент - "Мы поставляем"*/
  #supply{
    /*текст по всему компоненту (Мы поставляем)*/
    .text{padding-left: 2.5rem;}
    /*параметры сетки бутстрап (блок под поставку (текст, svg и заголовок) и svg)*/
    .import_row{flex-direction: column-reverse;}
    /*параметры сетки бутстрап (блок под поставку (текст, svg и заголовок) и блок svg)*/
    .col{
      flex: 0 0 100% !important;
      max-width: 100% !important;
    }
    /*svg компонента (Мы поставляем (большая svg))*/
    #car_supply{
      margin-left: auto;
      margin-right: auto;
      display:block;
      width: 60% !important;
    }
    /*svg компонента (маленькие svg под каждую позицию поставки)*/
    #storage_system,#printer, #projectors, #workstations,
    #video_surveillance_equipment, #software, #scs{
      height: 2.1875rem ;
    }
  }
  /*Компонент - "Программныее решения"*/
  #software_solutions{
    /*параметры сетки бутстрап (блок под программные решения (текст и заголовок) и svg)*/
    .import_row{flex-direction: column;}
    /*текст по всему компоненту (Программные решения)*/
    .text {
      line-height: 0.938rem;
      height: 2.813rem;
    }
    /*svg компонента (Программные решения)*/
    svg{
      margin-left: auto;
      margin-right: auto;
      width: 55% !important;
      display:block;
      margin-top: 0 !important;
    }
    /*параметры сетки бутстрап (блок под каждое программное решение)*/
    .col .row{
      margin-bottom:1% !important;
      margin-top: .5% !important;
    }
  }
  /*Компонент - "Сервисная поддержка"*/
  #service_support{
    .import_row{flex-direction: column-reverse;} /*параметры сетки бутстрап (блок под сервисную поддержку svg и (текст и заголовок))*/
    .col-5{ /*параметры сетки бутстрап (блок под svg)*/
      flex: 0 0 100% !important;
      max-width: 100% !important;
    }
    .support .col {/*параметры сетки бутстрап (пункты сервисной поддержки)*/
        border-radius: 0.625rem;
        padding: 0.625rem;
    }
    .text {line-height: 0.938rem;} /*текст по всему компоненту (Сервисная поддержка)*/
    svg{ /*svg компонента (Сервисная поддержка)*/
      margin-left: auto;
      margin-right: auto;
      width: 55% !important;
      display:block;
      padding-top: 0;
    }
  }
  /*Компонент - "Контакты"*/
  #contacts {
    /*параметры сетки бутстрап (блок под информацию и карту)*/
    .row {
      flex-direction: column;
      /*параметры сетки бутстрап (блок под карту)*/
      .col-7 {
        flex: 0 0 100% !important;
        max-width: 100% !important;
      }
    }
    /*место под карту*/
    .map{
      /*карта с гугл-карт*/
      iframe {
        min-height: 400px !important;
        border-radius: 0.625rem !important;
      }
    }
  }
}
@media screen and (min-width: 992px)and (max-width: 1200px) {
  /*заголовки*/
  h2{font-size: 1.4rem !important;}
  h3{font-size: 1.2rem !important;}
  /*текст по всему сайту*/
  .text{font-size: 1.0625rem !important;}
  /*Компонент с названием и svg (самый первый)*/
  #principal {
    /*название компании - "Гостехносервис"*/
    #gts {
      font-size: 3.438rem;
      top: 6.25rem;
    }
    /*фраза - "IT-Технологии и Оборудование"*/
    #gts_description {
      font-size: 1.125rem;
      top: 9.688rem;
    }
  }
  /*Компонент - "Этапы производства"*/
  #production_stages{
    /*контейнер (посередине экрана)*/
    .container{
      background: url("../public/images/mob.webp");
      background-size: 100% 100%;
    }
    /*параметры сетки бутстрап (блок под этапы и svg)*/
    .row{flex-direction:column;}
    /*svg компонента (маленькие svg в этапах)*/
    #design,#delivery,#introduction,#support,#guarantee{
      width: 3.438rem !important;
      height:3.438rem !important;
    }
    /*параметры сетки бутстрап (блок под svg)*/
    .col_svg{height:auto !important;}
    /*svg компонента (Этапы производства (большая svg)*/
    #production{
      margin-left: auto;
      margin-right: auto;
      width: 45% !important;
      display:block;
      padding-top: 0;
    }
  }
  /*Компонент - "Наши возможности"*/
  #company_features{
    /*параметры сетки бутстрап (блок под текст с svg и заголовок)*/
    .col-7{
      flex: 0 0 66.666667% !important;
      max-width: 66.666667% !important;
    }
    /*параметры сетки бутстрап (блок под каждую возможность)*/
    .col-7 .row{
      padding-left: 0 !important;
      padding-top: 2%;
      padding-right: 0 !important;
    }
    /*параметры сетки бутстрап (блок под возможность (текст))*/
    .possibility .col-8{
        padding-right: 0 !important;
        padding-left: 0 !important;
    }
    /*svg компонента (маленькие svg под каждую возможность)*/
    #computer,#materials,#video_monitoring,
    #access_control,#server,#telecommunications{
      height: 5.625rem !important;
    }
  }
  /*Компонент - "Мы поставляем"*/
  #supply{
    /*текст по всему компоненту (Мы поставляем)*/
    .text{padding-left: 2.5rem;}
    /*svg компонента (маленькие svg под каждую позицию поставки)*/
    #storage_system,#printer,#projectors,#workstations,
    #video_surveillance_equipment,#software,#scs{
      height: 1.875rem ;
    }
  }
  /*Компонент - "Программныее решения"*/
  #software_solutions{
    /*текст по всему компоненту (Программные решения)*/
    .text {
      line-height: 0.938rem;
      height: 3.438rem;
    }
    /*параметры сетки бутстрап (блок под каждое программное решение)*/
    .col .row{
      margin-top: 0 !important;
      padding-bottom:0;
    }
  }
  /*Компонент - "Сервисная поддержка"*/
  #service_support{
    /*текст по всему компоненту (Сервисная поддержка)*/
    .text {line-height: 0.938rem;}
    /*параметры сетки бутстрап (пункты сервисной поддержки)*/
    .support .col{padding: 0.938rem !important;}
  }
  /*Компонент - "Контакты"*/
  #contacts {
    /*место под карту*/
    .map {
      /*карта с гугл-карт*/
      iframe {
        min-height: 400px !important;
        border-radius: 0.938rem !important;
      }
    }
  }
}
@media screen and (min-width: 1200px)and (max-width: 1400px) {
  /*заголовки*/
  h2{font-size: 1.4rem !important;}
  h3{font-size: 1.2rem !important;}
  /*текст по всему сайту*/
  .text,td{font-size: 1.125rem !important;}
  /*Компонент с названием и svg (самый первый)*/
  #principal {
    /*название компании - "Гостехносервис"*/
    #gts {
      font-size: 3.438rem;
      top: 6.563rem;
    }
    /*фраза - "IT-Технологии и Оборудование"*/
    #gts_description {
      font-size: 1.125rem;
      top: 10.625rem;
    }
  }
  /*Компонент - "Этапы производства"*/
  #production_stages{
    /*текст по всему компоненту (Этапы производства)*/
    .text{line-height: 1.25rem;}
    /*svg компонента (маленькие svg в этапах)*/
    #design,#delivery,#introduction,#support,#guarantee{
      width: 6.25rem !important;
      height:3.438rem !important;
    }
    /*параметры сетки бутстрап (блок под svg)*/
    .col_svg{height: 1.563rem !important;}
  }
  /*Компонент - "Наши возможности"*/
  #company_features{
    /*параметры сетки бутстрап (блок под текст с svg и заголовок)*/
    .col-7{
      flex: 0 0 66.666667% !important;
      max-width: 66.666667% !important;
    }
    /*параметры сетки бутстрап (блок под каждую возможность)*/
    .col-7 .row{padding-left: 0 !important;}
    /*svg компонента (маленькие svg под каждую возможность)*/
    #computer,#materials,#video_monitoring,
    #access_control,#server,#telecommunications{
      height: 5rem !important;
    }
  }
  /*Компонент - "Мы поставляем"*/
  #supply{
    /*текст по всему компоненту (Мы поставляем)*/
    .text{padding-left: 3.125rem;}
    /*svg компонента (маленькие svg под каждую позицию поставки)*/
    #storage_system,#printer,#projectors,#workstations,
    #video_surveillance_equipment,#software,#scs{
      height: 2.5rem ;
    }
  }
  /*Компонент - "Программныее решения"*/
  #software_solutions{
    /*текст по всему компоненту (Программные решения)*/
    .text {
      line-height: 1.25rem;
      height: 4.063rem;
    }
    /*параметры сетки бутстрап (блок под каждое программное решение)*/
    .col .row{
      margin-top: 0 !important;
      padding-bottom:0;
    }
  }
  /*Компонент - "Сервисная поддержка"*/
  #service_support{
    /*текст по всему компоненту (Сервисная поддержка)*/
    .text {line-height:1.25rem;}
    /*параметры сетки бутстрап (пункты сервисной поддержки)*/
    .support .col{padding: 1.25rem !important;}
  }
  /*Компонент - "Контакты"*/
  #contacts {
    /*место под карту*/
    .map {
      /*карта с гугл-карт*/
      iframe {
        min-height: 500px !important;
        border-radius: 1.25rem !important;
      }
    }
  }
}
@media screen and (min-width: 1400px)and (max-width: 1600px) {
  /*заголовки*/
  h2{font-size: 1.4rem !important;}
  h3{font-size: 1.2rem !important;}
  /*текст по всему сайту*/
  .text{font-size: 1.25rem !important;}
  /*Компонент с названием и svg (самый первый)*/
  #principal {
    /*название компании - "Гостехносервис"*/
    #gts {
      font-size: 4.063rem;
      top: 7.813rem;
    }
    /*фраза - "IT-Технологии и Оборудование"*/
    #gts_description {
      font-size: 1.25rem;
      top: 12.5rem;
    }
  }
  /*Компонент - "Этапы производства"*/
  #production_stages{
    /*текст по всему компоненту (Этапы производства)*/
    .text {line-height: 1.25rem;}
    /*svg компонента (маленькие svg в этапах)*/
    #design,#delivery,#introduction,#support,#guarantee{
      width: 6.875rem !important;
      height:3.438rem;
    }
  }
  /*Компонент - "Наши возможности"*/
  #company_features{
    /*параметры сетки бутстрап (блок под текст с svg и заголовок)*/
    .col-7{
      flex: 0 0 66.666667% !important;
      max-width: 66.666667% !important;
    }
    /*параметры сетки бутстрап (блок под каждую возможность)*/
    .col-7 .row{padding-left: 0 !important;}
    /*svg компонента (маленькие svg под каждую возможность)*/
    #computer,#materials,#video_monitoring,
    #access_control,#server,#telecommunications{
      height: 3.75rem !important;
    }
  }
  /*Компонент - "Мы поставляем"*/
  #supply{
    /*текст по всему компоненту (Мы поставляем)*/
    .text{padding-left:3.75rem;}
    /*svg компонента (маленькие svg под каждую позицию поставки)*/
    #storage_system,#printer,#projectors,#workstations,
    #video_surveillance_equipment,#software,#scs{
      height: 3.125rem ;
    }
  }
  /*Компонент - "Программныее решения"*/
  #software_solutions{
    /*текст по всему компоненту (Программные решения)*/
    .text {
      height: 6.25rem;
      line-height: 1.25rem;
    }
  }
  /*Компонент - "Сервисная поддержка"*/
  #service_support{
    /*текст по всему компоненту (Сервисная поддержка)*/
    .text {line-height: 1.25rem;}
  }
  /*Компонент - "Контакты"*/
  #contacts {
    /*место под карту*/
    .map {
      /*карта с гугл-карт*/
      iframe {
        min-height: 550px !important;
        border-radius: 1.563rem !important;
      }
    }
  }
}
</style>
