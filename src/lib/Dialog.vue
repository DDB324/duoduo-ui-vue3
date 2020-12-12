<template>
  <template v-if="visible">
    <div class="duoduo-dialog-overlay"></div>
    <div class="duoduo-dialog-wrapper">
      <div class="duoduo-dialog">
        <header>标题<span class="duoduo-dialog-close"></span></header>
        <main>
          <p>第一行字</p>
          <p>第二行字</p>
        </main>
        <footer>
          <Button level="main">OK</Button>
          <Button>Cancel</Button>
        </footer>
      </div>
    </div>
  </template>
</template>

<script lang="ts">
import Button from './Button.vue';

export default {
  components: {
    Button
  },
  props: {
    visible: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style lang="scss">
$radius: 4px;
$border-color: #d9d9d9;
.duoduo-dialog-overlay {
  position: fixed;
  background: fade-out(black, 0.5);
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 10;
}

.duoduo-dialog-wrapper {
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 11;

  .duoduo-dialog {
    min-width: 15em;
    max-width: 90%;
    background: white;
    border-radius: $radius;
    box-shadow: 0 0 3px fade-out(black, 0.5);

    header {
      font-size: 20px;
      padding: 12px 16px;
      border-bottom: 1px solid $border-color;
      display: flex;
      justify-content: space-between;
      align-items: center;

      .duoduo-dialog-close {
        position: relative;
        width: 16px;
        height: 16px;
        cursor: pointer;

        &::before, &::after {
          content: '';
          display: inline-block;
          height: 1px;
          width: 100%;
          background: black;
          position: absolute;
          top: 50%;
          left: 50%;
        }

        &::before {
          transform: translate(-50%, -50%) rotate(45deg);
        }

        &::after {
          transform: translate(-50%, -50%) rotate(-45deg);
        }
      }
    }

    main {
      padding: 12px 16px;
    }

    footer {
      border-top: 1px solid $border-color;
      padding: 12px 16px;
      text-align: right;
    }
  }
}
</style>