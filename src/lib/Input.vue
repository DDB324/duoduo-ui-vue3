<template>
  <label class="wrapper" :class="{error}">
    <input class="duoduo-input" type="text"
           :value="value"
           :disabled="disabled"
           :readonly="readonly"
           @input="$emit('update:value',$event.target.value)"
    >
    <template v-if="error">
      <div class="errorMessage">
        <d-icon name="prompt-fill"></d-icon>
        <span>{{ error }}</span>
      </div>
    </template>
  </label>
</template>

<script lang="ts">
export default {
  props: {
    value: {type: String,},
    disabled: {type: Boolean, default: false},
    readonly: {type: Boolean, default: false},
    error: {type: String,}
  },
};
</script>

<style lang="scss">
.wrapper {display: inline-flex;align-items: center;
  font-size: 14px;margin-right: 8px;margin-bottom: 12px;

  :not(:last-child) {margin-right: .5em;}

  .duoduo-input {height: 32px;border: 1px solid #999;
    border-radius: 4px;padding: 0 8px;font-size: inherit;

    &:focus {box-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);outline: none}

    &:hover {border-color: #1a64ea;}

    &[disabled], &[readonly] {border-color: #ccc;color: #ccc;cursor: not-allowed;}
  }

  &.error {
    .duoduo-input {border-color: #f1453d;}
  }

  > .errorMessage {color: #f1453d;vertical-align: bottom;}
}

</style>