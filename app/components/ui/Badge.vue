<template>
  <div class="wrapper">
    <b-badge pill variant="secondary">
      {{ text }}
    </b-badge>
    <a class="link" :href="href"></a>
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
  },
  computed: {
    href() {
      return `/categories?tag=${this.text}`;
    }
  }
});
</script>

<style>
.wrapper {
  position: relative;
  display: inline-block;
}

.link {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}
</style>
