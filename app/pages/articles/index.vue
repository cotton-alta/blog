<template>
  <div class="page-wrapper">
    <div class="date">{{ date }}</div>
    <h1 class="title">{{ title }}</h1>
    <div class="tags" v-for="tag in tags" :key="tag.id">
      <h5><Badge :text="tag" /></h5>
    </div>
    <div class="content" v-html="content"></div>
    <TwitterButton class="twitter" :title="title" :base="$route.query.base" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import marked from "marked";
import hljs from "highlightjs";
import TwitterButton from "~/components/ui/TwitterButton.vue";

export default Vue.extend({
  components: {
    TwitterButton
  },
  created() {
    marked.setOptions({
      langPrefix: "hljs language-",
      highlight: function(code, lang) {
        return hljs.highlightAuto(code, [lang]).value;
      }
    });
  },
  data() {
    let article = require(`~/posts/json/${this.$route.query.base}.json`);
    return {
      date: article.created_at.replace("T00:00:00.000Z", ""),
      title: article.title,
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

.content a {
  word-break: break-all;
}

.twitter {
  margin-top: 30px;
}
</style>
