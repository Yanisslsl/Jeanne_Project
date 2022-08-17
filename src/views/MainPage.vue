<template>
  <div  :options="options" id="fullpage">
   <first-page></first-page>
    <second-page></second-page>
    <home></home>
    <fourth-page></fourth-page>
    <about></about>
    <third-page></third-page>
    <a-propos></a-propos>

   
   
   
</div>
</template>

<script lang='ts'>
import FullPage from "fullpage.js";
import 'fullpage.js/dist/fullpage.css'
import Home from './Home.vue'
import About from './About.vue'
import FirstPage from './FirstPage.vue'
import SecondPage from './SecondPage.vue'
import ThirdPage from './ThirdPage.vue'
import FourthPage from './FourthPage.vue'
import APropos from './APropos.vue'




import { Options, Vue } from 'vue-class-component';
 // @ is an alias to /src

@Options({
  components: {
    Home,
    About,
    FirstPage,
    SecondPage,
    ThirdPage, 
    FourthPage,
    APropos
  }
})
export default class MainPage extends Vue {
    fullPage: any = null


   mounted() {
    
    // console.log('hello')
    // on créer le composant
    this.fullPage = new FullPage('#fullpage', {
      // options here
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

      // onLeave: (origin: unknown, destination: any) => {
      //   bus.emit(BusEventList.ChangeSection, {origin, destination})
      //   // console.log(this.$router)
      //   this.$router.replace('/' + destination.anchor)
      // },

      afterLoad: (origin: unknown, destination: unknown, direction: unknown) => {
        // let activeSection: string
        // const currentRoute: string | string[] = this.$route.params.section //
      
        // if (this.fullPage == null) {
        //   bus.on(BusEventList.MainComponentMounted, () => {
        //     activeSection = this.fullPage.getActiveSection().anchor
        //     if (activeSection !== currentRoute) {
        //       this.fullPage.moveTo(currentRoute)
        //     }
        //   })
        // }
      },



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
  font-family: 'Quicksand', Arial, Helvetica, sans-serif;
  font-size: 12px;
   
}



</style>