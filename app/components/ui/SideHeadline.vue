<template>
  <div :class="$style.wrapper">
    <span :class="$style.title">{{ title }}</span>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  props: {
    title: {
      type: String,
      default: ""
    }
  }
});
</script>

<style module>
.wrapper {
  width: 98%;
  height: 40px;
  line-height: 40px;
  border-bottom: 2px solid #888888;
}

.title {
  font-size: 20px;
}
</style>
