<template>
  <div>
    <div v-for="article in articles">
      <ArticleCard
        :title="article.title"
        :date="article.date"
        :content="article.content"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import ArticleCard from "~/components/ui/ArticleCard.vue";

export default Vue.extend({
  components: {
    ArticleCard
  },
  data() {
    return {
      articles: [
        { title: "タイトル", date: "2021-01-01", content: "本文" },
        { title: "タイトル", date: "2021-01-01", content: "本文" },
        { title: "タイトル", date: "2021-01-01", content: "本文" }
      ]
    }
  }
});
</script>

<style>
</style>
