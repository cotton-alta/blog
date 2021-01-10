<template>
  <div :class="$style.wrapper">
    <b-card>
      <span :class="$style.title">{{ title }}</span>
      <span :class="$style.date">{{ date }}</span>
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
  margin: 0 auto;
}

.title {
  display: block;
}

.date {
  display: block;
  color: #777777;
}

.link {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}
</style>
