<template>
  <div :class="$style.wrapper">
    <b-card>
      <span :class="$style.title">{{ title }}</span>
      <span :class="$style.date">{{ date }}</span>
    </b-card>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  props: {
    title: {
      type: String,
      default: ""
    },
    date: {
      type: String,
      default: ""
    }
  }
});
</script>

<style module>
.wrapper {
  width: 98%;
  margin: 0 auto;
}

.title {
  display: block;
}

.date {
  display: block;
  color: #777777;
}
</style>
