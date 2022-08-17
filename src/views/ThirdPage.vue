<template>
  <div class="section">
    <div class="h-screen">
      <div class="h-full w-full">
        <div id="main_image">
          <img id='img-first-page' src="https://images.prismic.io/rluijtenant/4c706142-a007-428c-8fd9-ec8ea566ac45_lac-blanc-hikers.jpg?auto=compress,format&w=840&ar=0.6728971963&fit=crop&dpr=2" alt="">
        </div>
        <div id="main_image1">
          <div>
            Collection
          </div>
          <div>
            Photos prises depuis le lac <span class="font-semibold">Bordeaux</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Options, Vue } from 'vue-class-component';
 // @ is an alias to /src

@Options({
  components: {

  },
})
export default class ThirdPage extends Vue {
}
</script>
<style scoped>
#main_image {
  position: absolute;
  top: 20%;
  left: 10%;
  height: 120%;
  width: 50%;
  padding: 0;
  z-index: -1;
}
#main_image1 {
  position: absolute;
  top: 20%;
  right: 10%;
  height: 120%;
  width: 25%;
  padding: 0;
  z-index: 1;
  display: flex;
  flex-direction: column;
  text-align: left;

}

#img-first-page {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}

@media screen and (min-width: 640px) {
}


</style>

