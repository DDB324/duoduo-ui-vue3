<template>
  <div class="switchDemo">
    <Switch v-model:value="y"></Switch>
    {{y}}
  </div>
</template>

<script lang="ts">
import Switch from '../lib/Switch.vue';
import {ref} from 'vue';

export default {
  components:{Switch},
  setup(){
    const y = ref(false)
    return {y}
  }
}
</script>