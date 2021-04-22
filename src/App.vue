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
  .container {   /*контейнер (посередине экрана)*/
    background: url("../public/images/glav.webp");
    background-size: 100% 100%;
  }
  #gts{ /*название компании - "Гостехносервис"*/
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
  #gts_description{/*фраза - "IT-Технологии и Оборудование"*/
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
  #gts,#gts_description{ /*название компании - "Гостехносервис",фраза - "IT-Технологии и Оборудование"*/
      font-family: 'Play', sans-serif;
      text-align:center;
    }
}
/*Компонент - "О компании"*/
#about_company{
  background: linear-gradient(to top,#180b2d, #2b1149,#1d0d34);
  padding:3% 2% 2% 2% ;
  .col{ /*параметры сетки бутстрап (блок под текст и заголовок)*/
    background: url("../public/images/background_2.webp");
    background-size: 100% 100%;
  }
  svg{ /*svg компонента (О компании)*/
    height: 100% !important;
    width: 110% !important;
  }
}
/*Компонент - "Этапы производства"*/
#production_stages{
  background: linear-gradient(to top,#1d0d34,#2b1149,#180b2d);
  padding:3% 2% 2% 2% ;
  .container{  /*контейнер (посередине экрана)*/
    background: url("../public/images/glav.webp");
    background-size: 100% 100%;
  }
  h3{ /*заголовок (название этапа)*/
    padding-bottom: 1%;
    cursor: default;
    text-decoration: underline;
    font-weight: 600;
    text-shadow: 0 0.063rem 0 #2e3b5c, 0 0.125rem 0 #2e3b5c, 0 0.188rem 0 #2e3b5c;
  }
  .col{ /*параметры сетки бутстрап (блоки под этапы и svg)*/
    border-radius: 1%;
    margin: 1% 1.5%;
    padding: 0.313rem !important;
    box-shadow: 0 0 0.313rem rgba(130, 149, 198, 0.62);
    border:0.125rem solid  rgba(130, 149, 198, 0.62);
    background: rgba(221, 221, 234, 0.05);
    height:auto !important;
  }
  .col_svg{ /*параметры сетки бутстрап (блок под svg)*/
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
  .col-7{ /*параметры сетки бутстрап (блок под текст с svg и заголовок)*/
    background: url("../public/images/background_2.webp");
    background-size: 100% 100%;
  }
  .text{font-weight: 700 !important;} /*текст по всему компоненту (Наши возможности)*/
  .col-7 .row{padding: 5% 7% 5% 7%;} /*параметры сетки бутстрап (блок под каждую возможность)*/
  svg { /*svg компонента (Наши возможности)*/
    display: block;
    width: 100%;
    height: 100%;
  }
  .place_for_facilities{padding-bottom: 2%;}/*блок под svg для каждой возможности*/
  #computer, #materials,#video_monitoring,
  #access_control,#server,#telecommunications{ /*svg компонента (маленькие svg под каждую возможность)*/
    width: 100% ;
    height: 5.625rem ;
  }
}
/*Компонент - "Разработка и проектирование"*/
#development{
  background: linear-gradient(to top,#1d0d34,#2b1149,#180b2d);
  padding:3% 2% 2% 2% ;
  .col-6{ /*параметры сетки бутстрап (блок под текст и заголовок)*/
    background: url("../public/images/background.webp");
    background-size: 100% 100%;
  }
  h3 {/*заголовок (название пункта)*/
    font-weight: 600;
    cursor: default;
    text-decoration: underline;
    text-shadow: 0 0.063rem 0 #1f0b30, 0 0.063rem 0 #a6a6a6, 0 0.125rem 0 #1f0b30;
  }
  h3,.text{text-align:left;}  /*заголовок (название пункта), текст*/
  .carousel-control-prev {float: left !important;} /*левая кнопка карусели*/
  .carousel-control-prev, .carousel-control-next { /*кнопки карусели*/
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
  .text{padding-left: 4.375rem;} /*текст по всему компоненту (Мы поставляем)*/
  .import_row{padding-bottom: 2%;} /*параметры сетки бутстрап (блок под поставку (текст, svg и заголовок) и svg)*/
  #storage_system,#printer,#projectors,#workstations,
  #video_surveillance_equipment,#software,#scs{ /*svg компонента (маленькие svg под каждую позицию поставки)*/
    height: 3.75rem ;
    float:left;
  }
  .list_supply{ /*параметры сетки бутстрап (блок под поставку (текст, svg и заголовок))*/
    padding: 0 !important;
    background: url("../public/images/background_2.webp");
    background-size: 100% 100%;
  }
}
/*Компонент - "Программныее решения"*/
#software_solutions{
  background: linear-gradient(to top,#1d0d34,#2b1149,#180b2d);
  padding:3% 2% 2% 2% ;
  h3{ /*заголовок (названия программных решений)*/
    font-weight: 900;
    text-decoration: underline;
    text-decoration-color: #922cd3;
    cursor: default;
  }
  svg{width: 100% !important;}  /*svg компонента (Программные решения)*/
  .program_solutions{ /*блок под программные решения и заголовок*/
    background: url("../public/images/background.webp");
    background-size: 100% 100%;
  }
  .col .row{ /*параметры сетки бутстрап (блок под каждое программное решение)*/
    margin-top: 2% !important;
    padding-bottom:1.5%;
  }
}
/*Компонент - "Сервисная поддержка"*/
#service_support{
  background: linear-gradient(to top,#180b2d, #2b1149,#1d0d34);
  padding:3% 2% 2% 2% ;
  .support { /*блок под пункты сервисной поддежки*/
    padding: 0 !important;
    background: url("../public/images/background_2.webp");
    background-size: 100% 100%;
    border: none !important;
    box-shadow: none !important;
    margin: 0 !important;
    .col { /*параметры сетки бутстрап (пункты сервисной поддержки)*/
      padding: 1.563rem;
      border-radius: 0.938rem;
      box-shadow: 0 0 0.313rem rgba(130, 149, 198, 0.62);
      border: 0.125rem solid  rgba(130, 149, 198, 0.62);
      background: rgba(221, 221, 234, 0.1);
      margin: 0.75rem;
    }
  }
  svg{padding-top: 15%;} /*svg компонента (Сервисная поддержка)*/
}
/*Компонент - "Контакты"*/
#contacts{
  background: linear-gradient(to top,#1d0d34,#2b1149,#180b2d);
  padding:3% 2% 2% 2% ;
  .col{ /*параметры сетки бутстрап (блок под информацию)*/
    background: url("../public/images/background.webp");
    background-size: 100% 100%;
  }
  .map{/*место под карту*/
    padding-top: 3%;
    iframe { /*карта с гугл-карт*/
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
    #gts{/*название компании - "Гостехносервис"*/
      font-size:1.563rem;
      top: 3.5rem;
      text-shadow: 0 1.5px 0 #5050a0,
      0 14px 10px rgba(0,0,0,0.15),
      0 24px 2px rgba(0,0,0,0.1),
      0 34px 30px rgba(0,0,0,0.1);
    }
    #gts_description{ /*фраза - "IT-Технологии и Оборудование"*/
      color: #61a7c1;
      font-size:1rem;
      top: 5rem;
    }
  }
  /*Компонент - "О компании"*/
  #about_company{
    .row{ /*параметры сетки бутстрап (блок под svg, текст и заголовок)*/
      flex-direction: column-reverse;
      .col,.col-5{ /*параметры сетки бутстрап (блоки под svg, текст и заголовок)*/
        padding-left: 0 !important;
        padding-right: 0 !important;
      }
      .col-5{max-width: 100% !important;} /*параметры сетки бутстрап (блок под svg)*/
      svg{ /*svg компонента (О компании)*/
        width: 90% !important;
        display:block;
        margin-right: auto;
        margin-left: auto;
      }
    }
  }
  /*Компонент - "Этапы производства"*/
  #production_stages{
    .container{  /*контейнер (посередине экрана)*/
      background: url("../public/images/mob.webp");
      background-size: 100% 100%;
    }
    .row{flex-direction:column;}/*параметры сетки бутстрап (блок под этапы и svg)*/
    #design,#delivery,#introduction,#support,#guarantee{ /*svg компонента (маленькие svg в этапах)*/
      width:2.188rem !important;
      height:1.75rem !important;
      padding: 0 1% !important;
    }
    .col_svg{ /*параметры сетки бутстрап (блок под svg)*/
      height:auto !important;
      svg{ /*svg компонента (Этапы производства (большая svg)*/
        width: 50% !important;
        margin-left:auto;
        margin-right:auto;
        display:block;
      }
    }
    .col{ /*параметры сетки бутстрап (блоки под этапы и svg)*/
      padding-left:0.313rem !important;
      padding-right:0.313rem !important;
      margin: 1% 1% !important;
    }
  }
  /*Компонент - "Наши возможности"*/
  #company_features{
    .place_for_svg,.col-7{ /*параметры сетки бутстрап (блок под svg, блок под текст с svg и заголовок)*/
      flex: 0 0 100% !important;
      max-width: 100% !important;
      padding-right: 0 !important;
      padding-left: 0 !important;
    }
    .parts_facilities .col{  /*параметры сетки бутстрап (блок под большую svg)*/
        padding-right: 0.313rem !important;
        padding-left: 0.313rem !important;
    }
    #features{  /*svg компонента (Наши возможности (большая svg))*/
      margin-left: auto;
      margin-right: auto;
      width: 75% !important;
    }
    .import_row{flex-direction: column-reverse;}
    .col-7 .row{ /*параметры сетки бутстрап (блок под каждую возможность)*/
      padding-left: 0 !important;
      padding-top: 2%;
      padding-right: 0 !important;
    }
    .possibility .col-8{ /*параметры сетки бутстрап (блок под возможность (текст))*/
        flex: 0 0 75% !important;
        max-width: 75% !important;
        padding-right: 0 !important;
        padding-left: 0 !important;
    }
    #computer,#materials,#video_monitoring,
    #access_control,#server,#telecommunications{  /*svg компонента (маленькие svg под каждую возможность)*/
      height: auto !important;
    }
  }
  /*Компонент - "Разработка и проектирование"*/
  #development{
    .row{ /*параметры сетки бутстрап (блок под текст, заголовок и svg)*/
      flex-direction: column;
      .col-6,.col{ /*параметры сетки бутстрап (блок под текст и заголовок, блок под svg)*/
        flex: 0 0 100% !important;
        max-width: 100% !important;
        padding-right: 0 !important;
        padding-left: 0 !important;
      }
      svg{ /*svg компонента (Разработка и проектирование)*/
        margin-left: auto;
        margin-right: auto;
        display:block;
        width: 90% !important;
      }
    }
  }
  /*Компонент - "Мы поставляем"*/
  #supply {
    .text{padding-left: 1.875rem;} /*текст по всему компоненту (Мы поставляем)*/
    .import_row {flex-direction: column-reverse;} /*параметры сетки бутстрап (блок под поставку (текст, svg и заголовок) и svg)*/
    .col { /*параметры сетки бутстрап (блок под поставку (текст, svg и заголовок) и блок svg)*/
      flex: 0 0 100% !important;
      max-width: 100% !important;
      padding-right: 0 !important;
      padding-left: 0 !important;
    }
    #car_supply {/*svg компонента (Мы поставляем (большая svg))*/
      margin-left: auto;
      margin-right: auto;
      display: block;
      width: 90% !important;
    }
    #storage_system, #printer, #projectors, #workstations,
    #video_surveillance_equipment, #software, #scs { /*svg компонента (маленькие svg под каждую позицию поставки)*/
      height: 1.5625rem;
    }
  }
  /*Компонент - "Программныее решения"*/
  #software_solutions{
    .import_row{flex-direction: column;} /*параметры сетки бутстрап (блок под программные решения (текст и заголовок) и svg)*/
    .col{ /*параметры сетки бутстрап (блок под программные решения (текст и заголовок) и блок svg)*/
      flex: 0 0 100% !important;
      max-width: 100% !important;
      padding-right: 0 !important;
      padding-left: 0 !important;
    }
    h3{letter-spacing: -0.05rem;} /*заголовок (названия программных решений)*/
    .program_svg,.program_solutions{ /*блок под большую svg, блок под программные решения и заголовок*/
      flex: 0 0 100% !important;
      max-width: 100% !important;
      padding-right: 0 !important;
      padding-left: 0 !important;
    }
    .col .row{  /*параметры сетки бутстрап (блок под каждое программное решение)*/
      margin-bottom:1% !important;
      margin-top: .5% !important;
    }
    .text { /*текст по всему компоненту (Программные решения)*/
      height: 1.563rem;
      padding-left: 0.5rem !important;
    }
    svg{ /*svg компонента (Программные решения)*/
      margin-left: auto;
      margin-right: auto;
      width: 90% !important;
      display:block;
      margin-top: 0 !important;
    }
  }
  /*Компонент - "Сервисная поддержка"*/
  #service_support{
    .import_row{flex-direction: column-reverse;} /*параметры сетки бутстрап (блок под сервисную поддержку svg и (текст и заголовок))*/
    .col-5{ /*параметры сетки бутстрап (блок под svg)*/
      flex: 0 0 100% !important;
      max-width: 100% !important;
      padding-right: 0 !important;
      padding-left: 0 !important;
    }
    .support .col {/*параметры сетки бутстрап (пункты сервисной поддержки)*/
        border-radius: 0.5rem;
        padding: 0.313rem !important;
        margin:0.5rem;
    }
    svg{ /*svg компонента (Сервисная поддержка)*/
      margin-left: auto;
      margin-right: auto;
      width: 90% !important;
      display:block;
      padding-top: 0;
    }
  }
  /*Компонент - "Контакты"*/
  #contacts {
    .row {/*параметры сетки бутстрап (блок под информацию и карту)*/
      flex-direction: column;
      .col, .col-7 {/*параметры сетки бутстрап (блок под информацию, блок под карту)*/
        flex: 0 0 100% !important;
        max-width: 100% !important;
        padding-right: 0 !important;
        padding-left: 0 !important;
      }
    }
    .map{/*место под карту*/
      iframe { /*карта с гугл-карт*/
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
    #gts {/*название компании - "Гостехносервис"*/
      font-size: 2.188rem;
      top: 5.313rem;
      text-shadow: 0 2px 0 #5050a0,
      0 14px 10px rgba(0, 0, 0, 0.15),
      0 24px 2px rgba(0, 0, 0, 0.1),
      0 34px 30px rgba(0, 0, 0, 0.1);
    }
    #gts_description { /*фраза - "IT-Технологии и Оборудование"*/
      color: #61a7c1;
      font-size: 1rem;
      top: 7.188rem;
    }
  }
  /*Компонент - "О компании"*/
  #about_company{
    .row{/*параметры сетки бутстрап (блок под svg, текст и заголовок)*/
      flex-direction: column-reverse;
      .col-5{max-width: 100% !important;} /*параметры сетки бутстрап (блок под svg)*/
      svg{ /*svg компонента (О компании)*/
        width: 60% !important;
        display:block;
        margin-right: auto;
        margin-left: auto;
      }
    }
  }
  /*Компонент - "Этапы производства"*/
  #production_stages{
    .container{ /*контейнер (посередине экрана)*/
      background: url("../public/images/mob.webp");
      background-size: 100% 100%;
    }
    .row{flex-direction:column;}/*параметры сетки бутстрап (блок под этапы и svg)*/
    #design,#delivery,#introduction,#support,#guarantee{ /*svg компонента (маленькие svg в этапах)*/
      width: 1.563rem !important;
      height:1.875rem !important;
    }
    .col_svg{height:auto !important;}/*параметры сетки бутстрап (блок под svg)*/
    .col{/*параметры сетки бутстрап (блоки под этапы и svg)*/
      padding-left:0.313rem !important;
      padding-right: 0.313rem !important;
      margin: .5% .5% !important;
    }
    #production{  /*svg компонента (Этапы производства (большая svg)*/
      margin-left: auto;
      margin-right: auto;
      width: 45% !important;
      display:block;
      padding-top: 0;
    }
  }
  /*Компонент - "Наши возможности"*/
  #company_features{
    .col-7{ /*параметры сетки бутстрап (блок под текст с svg и заголовок)*/
      flex: 0 0 100% !important;
      max-width: 100% !important;
    }
    .parts_facilities .col{ /*параметры сетки бутстрап (блок под большую svg)*/
        padding-right: 0.625rem !important;
        padding-left: 0.625rem !important;
    }
    #features{  /*svg компонента (Наши возможности (большая svg))*/
      margin-left: auto;
      margin-right: auto;
      width: 45% !important;
    }
    .import_row{flex-direction: column-reverse;} /*параметры сетки бутстрап (блок под возможности (текст, svg и заголовок) и svg)*/
    .col-7 .row{ /*параметры сетки бутстрап (блок под каждую возможность)*/
      padding-left: 0 !important;
      padding-top: 2%;
      padding-right: 0 !important;
    }
    .possibility .col-8{ /*параметры сетки бутстрап (блок под возможность (текст))*/
        padding-right: 0 !important;
        padding-left: 0 !important;
    }
    #computer,#materials,#video_monitoring,
    #access_control,#server,#telecommunications{  /*svg компонента (маленькие svg под каждую возможность)*/
      height: 2.813rem !important;
    }
  }
  /*Компонент - "Разработка и проектирование"*/
  #development{
    .row{ /*параметры сетки бутстрап (блок под текст, заголовок и svg)*/
      flex-direction: column;
      .col-6{ /*параметры сетки бутстрап (блок под текст и заголовок)*/
        flex: 0 0 100% !important;
        max-width: 100% !important;
      }
      svg{ /*svg компонента (Разработка и проектирование)*/
        margin-left: auto;
        margin-right: auto;
        display:block;
        width: 60% !important;
      }
    }
  }
  /*Компонент - "Мы поставляем"*/
  #supply {
    .text{padding-left: 1.875rem;} /*текст по всему компоненту (Мы поставляем)*/
    .import_row {flex-direction: column-reverse;} /*параметры сетки бутстрап (блок под поставку (текст, svg и заголовок) и svg)*/
    .col {  /*параметры сетки бутстрап (блок под поставку (текст, svg и заголовок) и блок svg)*/
      flex: 0 0 100% !important;
      max-width: 100% !important;
    }
    #car_supply {  /*svg компонента (Мы поставляем (большая svg))*/
      margin-left: auto;
      margin-right: auto;
      display: block;
      width: 60% !important;
    }
    #storage_system, #printer, #projectors, #workstations,
    #video_surveillance_equipment, #software, #scs { /*svg компонента (маленькие svg под каждую позицию поставки)*/
      height: 1.5625rem;
    }
  }
  /*Компонент - "Программныее решения"*/
  #software_solutions{
    .import_row{flex-direction: column;} /*параметры сетки бутстрап (блок под программные решения (текст и заголовок) и svg)*/
    .col .row{  /*параметры сетки бутстрап (блок под каждое программное решение)*/
      margin-bottom:1% !important;
      margin-top: .5% !important;
    }
    .text { /*текст по всему компоненту (Программные решения)*/
      line-height: 0.938rem;
      height: 2.188rem;
    }
    svg{ /*svg компонента (Программные решения)*/
      margin-left: auto;
      margin-right: auto;
      width: 55% !important;
      display:block;
      margin-top: 0 !important;
    }
  }
  /*Компонент - "Сервисная поддержка"*/
  #service_support{
    .import_row{flex-direction: column-reverse;} /*параметры сетки бутстрап (блок под сервисную поддержку svg и (текст и заголовок))*/
    .col-5{ /*параметры сетки бутстрап (блок под svg)*/
      flex: 0 0 100% !important;
      max-width: 100% !important;
    }
    .support .col { /*параметры сетки бутстрап (пункты сервисной поддержки)*/
        border-radius: 0.625rem;
        padding: 0.625rem !important;
        margin: 0.5rem;
    }
    .text {line-height: 0.938rem;} /*текст по всему компоненту (Сервисная поддержка)*/
    svg{ /*svg компонента (Сервисная поддержка)*/
      margin-left: auto;
      margin-right: auto;
      width: 45% !important;
      display:block;
      padding-top: 0;
    }
  }
  /*Компонент - "Контакты"*/
  #contacts {
    .row { /*параметры сетки бутстрап (блок под информацию и карту)*/
      flex-direction: column;
      .col-7 {/*параметры сетки бутстрап (блок под карту)*/
        flex: 0 0 100% !important;
        max-width: 100% !important;
      }
    }
    .map{/*место под карту*/
      iframe { /*карта с гугл-карт*/
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
    #gts { /*название компании - "Гостехносервис"*/
      font-size: 3.438rem;
      top: 5.313rem;
      text-shadow: 0 2px 0 #5050a0,
      0 14px 10px rgba(0, 0, 0, 0.15),
      0 24px 2px rgba(0, 0, 0, 0.1),
      0 34px 30px rgba(0, 0, 0, 0.1);
    }
    #gts_description { /*фраза - "IT-Технологии и Оборудование"*/
      font-size: 1.125rem;
      top: 8.125rem;
    }
  }
  /*Компонент - "О компании"*/
  #about_company{
    .row{/*параметры сетки бутстрап (блок под svg, текст и заголовок)*/
      flex-direction: column-reverse;
      .col-5{max-width: 90% !important;} /*параметры сетки бутстрап (блок под svg)*/
      svg{ /*svg компонента (О компании)*/
        width: 70% !important;
        display:block;
        margin-right: auto;
        margin-left: auto;
      }
    }
  }
  /*Компонент - "Этапы производства"*/
  #production_stages{
    .container{ /*контейнер (посередине экрана)*/
      background: url("../public/images/mob.webp");
      background-size: 100% 100%;
    }
    .text{line-height: 1.125rem !important;}  /*текст по всему компоненту (Этапы производства)*/
    .row{flex-direction:column;}/*параметры сетки бутстрап (блок под этапы и svg)*/
    #design,#delivery,#introduction,#support,#guarantee{/*svg компонента (маленькие svg в этапах)*/
      width: 2.813rem!important;
      height:2.813rem !important;
    }
    .col_svg{height:auto !important;}/*параметры сетки бутстрап (блок под svg)*/
    #production{   /*svg компонента (Этапы производства (большая svg))*/
      margin-left: auto;
      margin-right: auto;
      width: 45% !important;
      display:block;
      padding-top: 0;
    }
  }
  /*Компонент - "Наши возможности"*/
  #company_features{
    .col-7{ /*параметры сетки бутстрап (блок под текст с svg и заголовок)*/
      flex: 0 0 100% !important;
      max-width: 100% !important;
    }
    #features{  /*svg компонента (Наши возможности (большая svg))*/
      margin-left: auto;
      margin-right: auto;
      width: 45% !important;
    }
    .import_row{flex-direction: column-reverse;} /*параметры сетки бутстрап (блок под возможности (текст, svg и заголовок) и svg)*/
    .col-7 .row{ /*параметры сетки бутстрап (блок под каждую возможность)*/
      padding-left: 0 !important;
      padding-top: 2%;
      padding-right: 0 !important;
    }
    .possibility .col-8{ /*параметры сетки бутстрап (блок под возможность (текст))*/
        padding-right: 0 !important;
        padding-left: 0 !important;
    }
    #computer,#materials,#video_monitoring,
    #access_control,#server,#telecommunications{  /*svg компонента (маленькие svg под каждую возможность)*/
      height: 3.438rem !important;
    }
  }
  /*Компонент - "Разработка и проектирование"*/
  #development{
    .row{ /*параметры сетки бутстрап (блок под текст, заголовок и svg)*/
      flex-direction: column;
      .col-6{ /*параметры сетки бутстрап (блок под текст и заголовок)*/
        flex: 0 0 100% !important;
        max-width: 100% !important;
      }
      svg{ /*svg компонента (Разработка и проектирование)*/
        margin-left: auto;
        margin-right: auto;
        display:block;
        width: 60% !important;
      }
    }
  }
  /*Компонент - "Мы поставляем"*/
  #supply{
    .text{padding-left: 2.5rem;} /*текст по всему компоненту (Мы поставляем)*/
    .import_row{flex-direction: column-reverse;}  /*параметры сетки бутстрап (блок под поставку (текст, svg и заголовок) и svg)*/
    .col{ /*параметры сетки бутстрап (блок под поставку (текст, svg и заголовок) и блок svg)*/
      flex: 0 0 100% !important;
      max-width: 100% !important;
    }
    #car_supply{  /*svg компонента (Мы поставляем (большая svg))*/
      margin-left: auto;
      margin-right: auto;
      display:block;
      width: 60% !important;
    }
    #storage_system,#printer, #projectors, #workstations,
    #video_surveillance_equipment, #software, #scs{/*svg компонента (маленькие svg под каждую позицию поставки)*/
      height: 2.1875rem ;
    }
  }
  /*Компонент - "Программныее решения"*/
  #software_solutions{
    .import_row{flex-direction: column;} /*параметры сетки бутстрап (блок под программные решения (текст и заголовок) и svg)*/
    .text { /*текст по всему компоненту (Программные решения)*/
      line-height: 0.938rem;
      height: 2.813rem;
    }
    svg{ /*svg компонента (Программные решения)*/
      margin-left: auto;
      margin-right: auto;
      width: 55% !important;
      display:block;
      margin-top: 0 !important;
    }
    .col .row{  /*параметры сетки бутстрап (блок под каждое программное решение)*/
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
    .row { /*параметры сетки бутстрап (блок под информацию и карту)*/
      flex-direction: column;
      .col-7 { /*параметры сетки бутстрап (блок под карту)*/
        flex: 0 0 100% !important;
        max-width: 100% !important;
      }
    }
    .map{/*место под карту*/
      iframe { /*карта с гугл-карт*/
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
    #gts {/*название компании - "Гостехносервис"*/
      font-size: 3.438rem;
      top: 6.25rem;
    }
    #gts_description {/*фраза - "IT-Технологии и Оборудование"*/
      font-size: 1.125rem;
      top: 9.688rem;
    }
  }
  /*Компонент - "Этапы производства"*/
  #production_stages{
    .container{ /*контейнер (посередине экрана)*/
      background: url("../public/images/mob.webp");
      background-size: 100% 100%;
    }
    .row{flex-direction:column;}/*параметры сетки бутстрап (блок под этапы и svg)*/
    #design,#delivery,#introduction,#support,#guarantee{/*svg компонента (маленькие svg в этапах)*/
      width: 3.438rem !important;
      height:3.438rem !important;
    }
    .col_svg{height:auto !important;}/*параметры сетки бутстрап (блок под svg)*/
    #production{  /*svg компонента (Этапы производства (большая svg)*/
      margin-left: auto;
      margin-right: auto;
      width: 45% !important;
      display:block;
      padding-top: 0;
    }
  }
  /*Компонент - "Наши возможности"*/
  #company_features{
    .col-7{ /*параметры сетки бутстрап (блок под текст с svg и заголовок)*/
      flex: 0 0 66.666667% !important;
      max-width: 66.666667% !important;
    }
    .col-7 .row{ /*параметры сетки бутстрап (блок под каждую возможность)*/
      padding-left: 0 !important;
      padding-top: 2%;
      padding-right: 0 !important;
    }
    .possibility .col-8{ /*параметры сетки бутстрап (блок под возможность (текст))*/
        padding-right: 0 !important;
        padding-left: 0 !important;
    }
    #computer,#materials,#video_monitoring,
    #access_control,#server,#telecommunications{  /*svg компонента (маленькие svg под каждую возможность)*/
      height: 5.625rem !important;
    }
  }
  /*Компонент - "Мы поставляем"*/
  #supply{
    .text{padding-left: 2.5rem;} /*текст по всему компоненту (Мы поставляем)*/
    #storage_system,#printer,#projectors,#workstations,
    #video_surveillance_equipment,#software,#scs{ /*svg компонента (маленькие svg под каждую позицию поставки)*/
      height: 1.875rem ;
    }
  }
  /*Компонент - "Программныее решения"*/
  #software_solutions{
    .text { /*текст по всему компоненту (Программные решения)*/
      line-height: 0.938rem;
      height: 3.438rem;
    }
    .col .row{ /*параметры сетки бутстрап (блок под каждое программное решение)*/
      margin-top: 0 !important;
      padding-bottom:0;
    }
  }
  /*Компонент - "Сервисная поддержка"*/
  #service_support{
    .text {line-height: 0.938rem;}/*текст по всему компоненту (Сервисная поддержка)*/
    .support .col{padding: 0.938rem !important;}/*параметры сетки бутстрап (пункты сервисной поддержки)*/
  }
  /*Компонент - "Контакты"*/
  #contacts {
    .map {/*место под карту*/
      iframe { /*карта с гугл-карт*/
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
    #gts {/*название компании - "Гостехносервис"*/
      font-size: 3.438rem;
      top: 6.563rem;
    }
    #gts_description {/*фраза - "IT-Технологии и Оборудование"*/
      font-size: 1.125rem;
      top: 10.625rem;
    }
  }
  /*Компонент - "Этапы производства"*/
  #production_stages{
    .text{line-height: 1.25rem;} /*текст по всему компоненту (Этапы производства)*/
    #design,#delivery,#introduction,#support,#guarantee{/*svg компонента (маленькие svg в этапах)*/
      width: 6.25rem !important;
      height:3.438rem !important;
    }
    .col_svg{height: 1.563rem !important;}/*параметры сетки бутстрап (блок под svg)*/
  }
  /*Компонент - "Наши возможности"*/
  #company_features{
    .col-7{ /*параметры сетки бутстрап (блок под текст с svg и заголовок)*/
      flex: 0 0 66.666667% !important;
      max-width: 66.666667% !important;
    }
    .col-7 .row{padding-left: 0 !important;} /*параметры сетки бутстрап (блок под каждую возможность)*/
    #computer,#materials,#video_monitoring,
    #access_control,#server,#telecommunications{  /*svg компонента (маленькие svg под каждую возможность)*/
      height: 5rem !important;
    }
  }
  /*Компонент - "Мы поставляем"*/
  #supply{
    .text{padding-left: 3.125rem;} /*текст по всему компоненту (Мы поставляем)*/
    #storage_system,#printer,#projectors,#workstations,
    #video_surveillance_equipment,#software,#scs{ /*svg компонента (маленькие svg под каждую позицию поставки)*/
      height: 2.5rem ;
    }
  }
  /*Компонент - "Программныее решения"*/
  #software_solutions{
    .text { /*текст по всему компоненту (Программные решения)*/
      line-height: 1.25rem;
      height: 4.063rem;
    }
    .col .row{  /*параметры сетки бутстрап (блок под каждое программное решение)*/
      margin-top: 0 !important;
      padding-bottom:0;
    }
  }
  /*Компонент - "Сервисная поддержка"*/
  #service_support{
    .text {line-height:1.25rem;} /*текст по всему компоненту (Сервисная поддержка)*/
    .support .col{padding: 1.25rem !important;} /*параметры сетки бутстрап (пункты сервисной поддержки)*/
  }
  /*Компонент - "Контакты"*/
  #contacts {
    .map {/*место под карту*/
      iframe {/*карта с гугл-карт*/
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
    #gts {/*название компании - "Гостехносервис"*/
      font-size: 4.063rem;
      top: 7.813rem;
    }
    #gts_description {/*фраза - "IT-Технологии и Оборудование"*/
      font-size: 1.25rem;
      top: 12.5rem;
    }
  }
  /*Компонент - "Этапы производства"*/
  #production_stages{
    .text {line-height: 1.25rem;}  /*текст по всему компоненту (Этапы производства)*/
    #design,#delivery,#introduction,#support,#guarantee{/*svg компонента (маленькие svg в этапах)*/
      width: 6.875rem !important;
      height:3.438rem;
    }
  }
  /*Компонент - "Наши возможности"*/
  #company_features{
    .col-7{ /*параметры сетки бутстрап (блок под текст с svg и заголовок)*/
      flex: 0 0 66.666667% !important;
      max-width: 66.666667% !important;
    }
    .col-7 .row{padding-left: 0 !important;} /*параметры сетки бутстрап (блок под каждую возможность)*/
    #computer,#materials,#video_monitoring,
    #access_control,#server,#telecommunications{  /*svg компонента (маленькие svg под каждую возможность)*/
      height: 3.75rem !important;
    }
  }
  /*Компонент - "Мы поставляем"*/
  #supply{
    .text{padding-left:3.75rem;} /*текст по всему компоненту (Мы поставляем)*/
    #storage_system,#printer,#projectors,#workstations,
    #video_surveillance_equipment,#software,#scs{ /*svg компонента (маленькие svg под каждую позицию поставки)*/
      height: 3.125rem ;
    }
  }
  /*Компонент - "Программныее решения"*/
  #software_solutions{
    .text { /*текст по всему компоненту (Программные решения)*/
      height: 6.25rem;
      line-height: 1.25rem;
    }
  }
  /*Компонент - "Сервисная поддержка"*/
  #service_support{
    .text {line-height: 1.25rem;} /*текст по всему компоненту (Сервисная поддержка)*/
  }
  /*Компонент - "Контакты"*/
  #contacts {
    .map {/*место под карту*/
      iframe {/*карта с гугл-карт*/
        min-height: 550px !important;
        border-radius: 1.563rem !important;
      }
    }
  }
}
</style>
