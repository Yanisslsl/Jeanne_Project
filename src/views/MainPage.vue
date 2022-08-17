<template>
  <div  :options="options" id="fullpage">
    <first-page></first-page>
    <second-page></second-page>
    <third-page></third-page>
    <fourth-page></fourth-page>

</div>
</template>

<script lang='ts'>
import FullPage from "fullpage.js";
import 'fullpage.js/dist/fullpage.css'
import SecondPage from './SecondPage.vue'
import FirstPage from './FirstPage.vue'
import ThirdPage from './ThirdPage.vue'





import { Options, Vue } from 'vue-class-component';
import FourthPage from "./FourthPage.vue";
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
    FourthPage
  }
})
export default class MainPage extends Vue {
    fullPage = null


   mounted(): void {
    this.fullPage = new FullPage('#fullpage', {
      autoScrolling: true,
      scrollHorizontally: true,
      scrollBar: false,
      lockAnchors: true,
      continuousHorizontal: true,
      licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
      anchors: ['home', 'values', 'knowledge', 'openSource', 'contact'],
      verticalCentered:false,
      menu: '.nav-bar',
      normalScrollElements: '.scrollable-content',
      navigation: true,
      navigationPosition: 'left',
      dragAndMove: true,
      slidesNavigation: true,
      scrollOverflow: true,
      fixedElements: '.c-top-bar, .social',
      // onLeave: function(origin: any, destination: any, direction: any, trigger: any){
      //   console.log(origin, destination, direction, trigger)
      //   console.log(document.getElementById('#img-first-page'))
      // }
    })
    
    const navButtons = document.getElementById('fp-nav')


    if(navButtons){
    //   console.log(navButtons.className)
    //   navButtons.className += ' hidden'
    // navButtons.style.left = '8px'
    // arrowRight[1].style.display += 'none'
    navButtons.style.display = 'none'
    }

    
}


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
  src: URL('../assets/fonts/Julius_Sans_One/JuliusSansOne-Regular.ttf') format('truetype');
}



</style>