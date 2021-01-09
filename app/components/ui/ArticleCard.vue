<template>
  <div :class="$style.wrapper">
    <b-card :title="title">
      <span :class="$style.date">{{ date }}</span>
      <span :class="$style.content">{{ content }}</span>
    </b-card>
    <a :href="href" :class="$style.link"></a>
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
    },
    href: {
      type: String,
      default: ""
    }
  }
});
</script>

<style module>
.wrapper {
  position: relative;
  width: 98%;
}

.date {
  display: block;
  color: #777777;
}

.content {
  display: block;
}

.link {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}
</style>
