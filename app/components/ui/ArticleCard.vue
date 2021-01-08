<template>
  <div :class="$style.wrapper">
    <b-card :title="title">
      <span :class="$style.date">{{ date }}</span>
      <span :class="$style.content">{{ content }}</span>
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
    },
    content: {
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

.date {
  display: block;
  color: #777777;
}

.content {
  display: block;
}
</style>
