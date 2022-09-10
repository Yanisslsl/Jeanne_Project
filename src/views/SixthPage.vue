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
export default class SixthPage extends Vue {
  hey = 'dsss'
  options = {
    autoplay: true,
    dots: false
  }
}
</script>


<style scoped>


#img-first-page {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}

#main_image1 {
  position: absolute;
  top: 30vh;
  left: 20vh;
  width: 35vh;
  display: flex;
  flex-direction: column;
  text-align: left;

}

#main_image {
  position: relative;
  top: 30vh;
  left: 65vh;
  width: 100vh;
}

 

</style>

