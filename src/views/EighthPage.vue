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
export default class EighthPage extends Vue {
  hey = 'dsss'
  options = {
    autoplay: true,
    dots: false
  }
}
</script>


<style scoped>
#over-text{
  top: 10vh;
  left: 10vh;
  z-index: 1;
  position: relative;
  color: rgb(102, 51, 0);
}

#main_image {
  position: absolute;
  width: 90%;
  left: 15%;
  z-index: -1;
}

#img-first-page {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}

@media screen and (min-width: 640px) {
}

 

</style>

