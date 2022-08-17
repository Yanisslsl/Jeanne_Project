<template> 
  <div class="section">
    <div class="h-screen">
      <div class="absolute top-1/4 w-full h-full">
        <div class="flex items-center justify-center w-full h-3/4 ">
          <div class="flex flex-col pt-32 pl-32  w-full h-full">
            <div class="font-medium text-left text-3xl pr-64">
              I became interested in landscape photography about five years ago when I moved to New York City. 
              I had a full-time job during the week and spent my weekends getting as far away from the city as possible. 
              I went on wonderful adventures upstate, away from all the crowds and into the peace and beauty of nature. 
              Photographing the state parks of New York inspired me to spend my life traveling the world taking pictures. 
            </div>
            <div class="pt-32 text-left ">
             Currently, the Covid-19 pandemic makes it difficult for me, like everyone, to plan for the future.  <br>
             It is especially uncertain when we can safely travel again. <br>
             I have been planning a trip to Alaska for a few months now, a trip I’ve been wanting to take since I was a small child. <br> 
             I look forward to the opportunity. Traveling to these distant and remote places allows me to see the beauty of our planet, <br> 
             a beauty I love to share through my photography. <br>
            </div>
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
export default class SecondPage extends Vue {
}
</script>
<style scoped>
#description {
  position: relative;
  font-family: Cormorant;
  left: 0px;
  top: 30px;
  /* width: 40%; */
}

</style>

