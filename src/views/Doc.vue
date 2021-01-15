<template>
  <div class="layout">
    <Topnav toggle-menu-button-visible class="docNav"/>
    <div class="content">
      <Aside></Aside>
      <main>
        <router-view/>
      </main>
    </div>
  </div>
</template>

<script lang="ts">
import Topnav from '../components/Topnav.vue';
import Aside from '../components/Doc/Aside.vue';

export default {
  components: {Topnav, Aside},
};
</script>

<style lang="scss" scoped>
.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;

  .docNav {
    flex-shrink: 0;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    box-shadow: 0 0 3px #2078ef;
    background: white;
  }

  .content {
    display: flex;
    padding-top: 60px;
    padding-left: 156px;
    @media (max-width: 500px) {
      padding-left: 0;
    }
  }

  main {
    overflow: auto;
    flex-grow: 1;
    padding: 32px;
    background: white;
  }
}
</style>