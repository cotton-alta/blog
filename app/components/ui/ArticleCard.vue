<template>
  <div :class="$style.wrapper">
    <b-card :title="title">
      <div :class="$style.tags" v-for="tag in tags" :key="tag.id">
        <h5><Badge :text="tag" /></h5>
      </div>
      <span :class="$style.date">{{ date }}</span>
      <span :class="$style.content">{{ content }}</span>
    </b-card>
    <a :href="href" :class="$style.link"></a>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Badge from "~/components/ui/Badge.vue";

export default Vue.extend({
  components: {
    Badge
  },
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
    },
    tags: {
      type: Array,
      default: []
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

.tags {
  display: inline-block;
  margin-right: 5px;
}
</style>
