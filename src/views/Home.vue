<template>
  <div class="topnavAndBanner">
    <Topnav/>
    <Banner/>
  </div>
  <Features/>
</template>

<script lang="ts">
import Topnav from '../components/Topnav.vue';
import Features from '../components/Features.vue';
import Banner from '../components/Banner.vue';

export default {
  components: {Topnav, Features, Banner}
};
</script>

<style lang="scss" scoped>
.topnavAndBanner {
  background: rgb(227, 255, 240);
  background: linear-gradient(135deg, rgba(227, 255, 240, 1) 0%, rgba(183, 233, 230, 1) 100%);
  clip-path: ellipse(80% 60% at 50% 40%);
}
</style>