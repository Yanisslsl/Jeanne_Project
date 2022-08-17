<template>
  <div class="section   ">

     


     <VueAgile :options="options">
        <div class="slide bg-profile flex justify-center items-center ">
              <div class=" font-serif mx-4 p-4 text-center md:p-8">

            <h1 class="text-5xl uppercase">
                Havane.a
            </h1>
            <p class="text-lg">
                Artiste bordelaise et étudiante en graphisme
            </p>


        </div>
        
        </div>
             <div class="slide bg-profile1 flex justify-center items-center ">
              <div class=" font-serif mx-4 p-4 text-center md:p-8">

            <h1 class="text-5xl uppercase">
                Havane.a
            </h1>
            <p class="text-lg">
                Artiste bordelaise et étudiante en graphisme
            </p>


        </div>
        
        </div>
        
        
        
        
        
    </VueAgile>

 
          
         
           
      





    

    





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


<style >
.fp-controlArrow.fp-prev {
   display: none;
}
.fp-controlArrow.fp-next {
  display: none;
}

@media screen and (min-width: 640px) {
 .fp-controlArrow.fp-prev {
    left: 0;
    border: none;
    width: 50px;
    height: 101px;
    background: url(../assets/icons/left.PNG) no-repeat;
    cursor: pointer;
}
.fp-controlArrow.fp-next {
    right: 0;
    border: none;
    width: 50px;
    height: 101px;
    background: url(../assets/icons/right.PNG) no-repeat;
    cursor: pointer;
}
}

  .bg-profile {
    background: url(../assets/Images/bg1.JPG);
    background-repeat: no-repeat;
    background-size: cover;
  
  }
  .bg-profile1 {
    background: url(../assets/Images/IMG_5717.JPG);
    background-repeat: no-repeat;
    background-size: cover;
  
  }
 

</style>