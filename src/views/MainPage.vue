<template>
  <navbar></navbar>
  <router-view></router-view>

</template>
<script lang='ts'>
import FullPage from "fullpage.js";
import 'fullpage.js/dist/fullpage.css'
import SecondPage from './SecondPage.vue'
import FirstPage from './FirstPage.vue'
import ThirdPage from './ThirdPage.vue'




import { Options, Vue } from 'vue-class-component';
import FourthPage from "./FourthPage.vue";
import FifthPage from "./FifthPage.vue";
import SixthPage from "./SixthPage.vue";
import SeventhPage from "./SeventhPage.vue";
import EighthPage from "./EighthPage.vue";
import Navbar from "./Navbar.vue";
 // @ is an alias to /src
window.addEventListener('scroll', () => {
  console.log(window.scrollY)
})
console.log("HELLo")

@Options({
  components: {
    SecondPage,
    FirstPage,
    ThirdPage,
    FourthPage,
    FifthPage,
    SixthPage,
    SeventhPage,
    EighthPage,
    Navbar
  }
})
export default class MainPage extends Vue {


}
</script>

<style lang="scss" >
#app {
 
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-left: 0px;
  
  overflow-x: hidden;
  font-family: 'Cormorant', Arial, Helvetica, sans-serif;
  font-size: 12px;
   
}

@font-face {
  font-family: 'Cormorant';
  src: URL('../assets/fonts/Quicksand/Quicksand-Light.ttf') format('truetype');
}



</style>