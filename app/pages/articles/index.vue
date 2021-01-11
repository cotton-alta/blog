<template>
  <div class="page-wrapper">
    <div class="date">{{ date }}</div>
    <h1 class="title">{{ title }}</h1>
    <div class="tags" v-for="tag in tags" :key="tag.id">
      <h5><Badge :text="tag" /></h5>
    </div>
    <div class="content" v-html="content"></div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import marked from "marked";
import hljs from "highlightjs";

export default Vue.extend({
  created() {
    marked.setOptions({
      langPrefix: "hljs language-",
      highlight: function(code, lang) {
        return hljs.highlightAuto(code, [lang]).value
      }
    });
  },
  // asyncData({ route }) {
  data() {
    let article = require(`~/posts/json/${this.$route.query.base}.json`);
    return {
      date: article.created_at.replace("T00:00:00.000Z", ""),
      title: article.title,
      // content: marked(article.bodyContent),
      tags: article.tags.split(", ")
    };
  },
  computed: {
    content() {
      let article = require(`~/posts/json/${this.$route.query.base}.json`);
      return marked(article.bodyContent);
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
  margin: 20px 0px;
}

.tags {
  display: inline-block;
  margin-right: 5px;
}

.content {
  margin-top: 20px;
}
</style>
