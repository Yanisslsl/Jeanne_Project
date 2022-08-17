<template>
  <div class="section">
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import '../assets/Images/bg1.JPG'

 // @ is an alias to /src

@Options({
  components: {
   },
})
export default class FourthPage extends Vue {
  hey = 'dsss'
  options = {
    autoplay: true,
    dots: false
  }
}
</script>


<style scoped>
#main {
  font-family: Cormorant;
  left: 10%;
}


#main_image {
  position: relative;
  z-index: -10;
  top: -25%;
  left: 15%;
  height: 90%;
  width: 100%;
}

#img-first-page {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}

@media screen and (min-width: 640px) {
}

 

</style>

