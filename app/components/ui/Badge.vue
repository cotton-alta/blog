<template>
  <div class="wrapper">
    <b-badge pill variant="secondary">
      {{ text }}
    </b-badge>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  props: {
    text: {
      type: String,
      default: ""
    }
  }
});
</script>

<style>
.wrapper {
  display: inline-block;
}
</style>
