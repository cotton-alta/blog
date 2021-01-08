<template>
  <div :class="$style.wrapper">
    <span :class="$style.text">{{ text }}</span>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  data() {
    return { text: "hello" };
  }
});
</script>

<style module>
.wrapper {
  width: 98%;
  height: 40px;
  line-height: 40px;
  margin: 0 auto;
  border-bottom: 2px solid #888888;
}

.text {
  font-size: 20px;
}
</style>
