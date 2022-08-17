<template> 
<div class='section'>
  <div class=" h-full">
    <section class=" h-full sm:h-full sm:flex sm:items-center sm:justify-center sm:py-5 sm:mx-auto sm:max-w-screen-xl ">
    <article class="flex-col justify-center inline-flex self-stretch h-full p-6">
      <h2 class="uppercase font-semibold text-5xl pb-10">Custom sneakers </h2>
      <strong class="text-lg pb-2 font-normal font-sans sm:text-2xl">Personnaliser vos chaussures à  volonté </strong>
      <p class="text-sm py-4">La customisation permet de personnaliser sa paire de basket en fonction de ses goûts et de ses envies. 
    Le but ici est de créer une paire unique au monde, et par conséquent, de se différencier. 
    Par l’intervention de l’artiste sur la sneaker, celle-ci devient une œuvre d’art à part entière, œuvre d’art qui apportera un nouveau type de dynamisme dans une tenue vestimentaire.
    {{imagesize}}
    heyy
     </p>
      
    </article>
    <figure class='pl-10 hidden sm:block'>
    <img 
    src='Images/C1500176-7E5C-4A2A-AAA4-5183FEE445CA.JPG'
    alt="Banner" looding="lazy" class='sm:shadow-2xl sm:rounded-full  '/>
    </figure>
    </section>
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
export default class FourthPage extends Vue {
   projects = [
  
     {src: '598F30F1-807C-47F6-80ED-19B8E529F21D.JPG'},
     {src: '3598E3FE-E79A-4E74-B80D-A5522133FBAA.JPG'},
     {src: '6275C964-4A2B-45E1-AD98-AC222675F5AE.JPG'},
     {src: 'A4BCDAE2-EFEA-4F23-9AD6-575B264F45B4.JPG'},
     {src: 'A29E6049-EDE1-42D4-AEA3-66A37B2F21ED.JPG'},
     {src: 'B458D863-7C32-404A-B531-4C08A3BAD563.jpg'},
     {src: 'bgbird.JPG'},
     {src: 'E5215E73-E319-405F-B298-EC37D9D52EA0.JPG'},
     {src: 'FB9E197D-7793-4888-BA7F-54D0C976AA71.jpg'},
     {src: 'FB9E197D-7793-4888-BA7F-54D0C976AA71.jpg'},
     {src: 'IMG_7074.jpg'},
     {src: 'IMG_7075.jpg'},
      {src: 'FB9E197D-7793-4888-BA7F-54D0C976AA71.jpg'},
     {src: 'IMG_7074.jpg'},
     {src: 'IMG_7075.jpg'}
     

  ]
    projectsSM = [
          {src: '1DFB8C2D-5549-4E8C-A592-F42940A154C2.JPG'},
     {src: '2ADA835C-B2CB-4D5B-9283-1E2FF27C6FE1.JPG'},
     {src: '3C6F28B7-FF91-4D85-9D50-D00DDEF869E5.JPG'},
     {src: '8D26EE2C-CF88-46F8-A2A2-AB96FFEF429E.JPG'}
  
  ]
}
</script>

