<template>
  <div class="section">
    <div class="h-screen">
      <div class="h-full">
        <div id='main' class="absolute left-1/4 top-1/4 w-full h-full">
          <div  class="flex flex-col justify-start space-y-4	text-left z-0">
            <div class="text-7xl font-semibold">
              Jeanne Triadou<br>
            </div>
            <div class="text-6xl">
              Photographe professionel,<br>
            </div>
            <div class="text-6xl">
              passioné de <span class="font-semibold">photos</span> depuis toujours, <br>
            </div>
            <div class="text-6xl">
              basé sur <span class="font-semibold"> Bordeaux</span><br>
            </div>
          </div>
          <div id="main_image">
            <img id='img-first-page' src="https://images.prismic.io/rluijtenant/5dd90ecd-33d0-4a4b-a1a1-60243ab41f56_augstmatthorn-1.jpg?auto=compress,format&w=1120&ar=1.1096433289&fit=crop&dpr=1" alt="">
          </div>
        </div>
      </div>
    </div>
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
export default class FirstPage extends Vue {
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

