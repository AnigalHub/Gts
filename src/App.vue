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

<style lang="scss">

#app{
  margin: 0 !important;
  padding: 0 !important;
}
@media (min-width: 1200px){
  .container, .container-lg, .container-md, .container-sm, .container-xl {
    max-width: 1920px !important;
    max-height: 100%;
  }
}
body{
    background: linear-gradient(to top,#180b2d, #2b1149,#1d0d34);
}
.container-fluid{
  padding-left: 0 !important;
  padding-right: 0 !important;
}
.row {
  margin: 0 !important;
}
h2{
  padding-top: 4%;
  font-weight: 700;
  padding-bottom: 1%;
  cursor: default;
  text-align: center;
  text-shadow: 0 .5px 0 #CCCCCC, 0 .5px 0 #a6a6a6, 0 1px 0 #a6a6a6;
}
.text{
  font-size:1.375rem;
  padding-bottom: 2%;
}
h3{
  font-size: 1.5rem !important;
}
h2,h3,.text{
  color: #8bcdf5;
  font-family: 'Roboto', sans-serif;
}

@media screen and (max-width: 500px) {
  h2{
    font-size: 1.2rem !important;
  }
  h3{
    font-size: 1rem !important;
  }
  .text{
    font-size:0.7rem !important;
  }
}
@media screen and (min-width: 500px)and (max-width: 768px) {
  h2{
    font-size: 1.2rem !important;
  }
  h3{
    font-size: 1rem !important;
  }
  .text{
    font-size: 0.9375rem !important;
  }
}
@media screen and (min-width: 768px)and (max-width: 992px) {
  h2{
    font-size: 1.2rem !important;
  }
  h3{
    font-size: 1rem !important;
  }
  .text,td{
    font-size:1rem !important;
    line-height: 1rem;
  }
}
@media screen and (min-width: 992px)and (max-width: 1200px) {
  h2{
    font-size: 1.4rem !important;
  }
  h3{
    font-size: 1.2rem !important;
  }
  .text{
    font-size: 1.0625rem !important;
  }

}
@media screen and (min-width: 1200px)and (max-width: 1400px) {
  h2{
    font-size: 1.4rem !important;
  }
  h3{
    font-size: 1.2rem !important;
  }
  .text,td{
    font-size: 1.125rem !important;
  }
}
@media screen and (min-width: 1400px)and (max-width: 1600px) {
  h2{
    font-size: 1.4rem !important;
  }
  h3{
    font-size: 1.2rem !important;
  }
  .text{
    font-size: 1.25rem !important;
  }
}
</style>
