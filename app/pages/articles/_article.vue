<template>
  <div class="page-wrapper">
    <div class="date">{{ date }}</div>
    <h1 class="headline">{{ title }}</h1>
    <div v-html="content"></div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import marked from "marked";

export default Vue.extend({
  data() {
    let mark = "## 見出し \n 本文";
    return {
      date: "2020-01-01",
      title: "タイトル",
      content: marked(mark)
    }
  }
});
</script>

<style>
.page-wrapper {
  margin: 30px 0px;
}

.date {
  color: #777777;
}

.title {

}
</style>
