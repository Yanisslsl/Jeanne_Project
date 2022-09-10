<template> 
<div>
  hello
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

