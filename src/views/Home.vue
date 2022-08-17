<template> 
     <div class="section w-full flex flex-wrap  m-auto">
            <div v-for="project in projects" v-bind:key="project" class="   hidden sm:block py-10 px-5 w-1/4 relative">
              
              <div class="bg-light w-full h-auto rounded-lg  mb-2 border-none">
               
                <img :src="`Images/${project.src}`" style='height: 300px;' class=" w-full shadow mb-2"/>
                
               
              </div>
              <div class='flex flex-col items-start pt-2'>

                 <h1 class="text-xl font-semibold tracking-wide ml-0 pb-2">
                Air Force One Custom
                </h1>
                <span class="inline-flex w-1/3 bg-green-400 text-white text-base rounded-full h-6 px-3 justify-center tracking-wide items-center">Disponible</span>
              </div>
              
            </div>
                 <div v-for="project in projectsSM" v-bind:key="project" class=" p-3 sm:hidden w-1/2 relative">
              
              <div class="bg-light w-full h-auto rounded-lg  mb-2 border-none">
               
                <img :src="`Images/${project.src}`" style=' height: 200px;' class=" w-full shadow mb-2"/>
                
               
              </div>
              <div class='flex flex-col items-start'>

                 <h1 class="text-base font-semibold tracking-wide ml-0">
                Air Force One Custom tzooooo
                </h1>
                <span class="inline-flex w-1/3 bg-green-400 text-white rounded-full h-6 px-10 justify-center tracking-wide items-center">Disponible</span>
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
export default class Home extends Vue {
   projects = [
  
     {src: '598F30F1-807C-47F6-80ED-19B8E529F21D.JPG'},
     {src: '3598E3FE-E79A-4E74-B80D-A5522133FBAA.JPG'},
     {src: '6275C964-4A2B-45E1-AD98-AC222675F5AE.JPG'},
     {src: 'A4BCDAE2-EFEA-4F23-9AD6-575B264F45B4.JPG'},
     {src: 'A29E6049-EDE1-42D4-AEA3-66A37B2F21ED.JPG'},
     {src: 'B458D863-7C32-404A-B531-4C08A3BAD563.jpg'},
     {src: 'bgbird.JPG'},
     {src: 'E5215E73-E319-405F-B298-EC37D9D52EA0.JPG'},
    //  {src: 'FB9E197D-7793-4888-BA7F-54D0C976AA71.jpg'},
    //  {src: 'FB9E197D-7793-4888-BA7F-54D0C976AA71.jpg'},
    //  {src: 'IMG_7074.jpg'},
    //  {src: 'IMG_7075.jpg'},
    //   {src: 'FB9E197D-7793-4888-BA7F-54D0C976AA71.jpg'},
    //  {src: 'IMG_7074.jpg'},
    //  {src: 'IMG_7075.jpg'}
     

  ]
    projectsSM = [
          {src: '1DFB8C2D-5549-4E8C-A592-F42940A154C2.JPG'},
     {src: '2ADA835C-B2CB-4D5B-9283-1E2FF27C6FE1.JPG'},
     {src: '3C6F28B7-FF91-4D85-9D50-D00DDEF869E5.JPG'},
     {src: '8D26EE2C-CF88-46F8-A2A2-AB96FFEF429E.JPG'}
  
  ]
}
</script>

