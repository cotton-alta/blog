<template>
  <div class="headline-wrapper">
    {{ title }}
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  props: {
    title: {
      type: String,
      default: ''
    }
  }
});
</script>

<style lang="scss" scoped>
.headline-wrapper {
  width: 98%;
  height: 40px;
  line-height: 40px;
  font-size: 30px;
  margin: 0 auto;
  border-bottom: 2px solid #888888;
}
</style>
