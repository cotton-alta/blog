<template>
  <div class="page-wrapper">
    <div v-for="article in view_item" :key="article.id">
      <ArticleCard
        class="article-card"
        :title="article.title"
        :date="article.date"
        :content="article.content"
        :href="article.href"
      />
    </div>
    <div class="paginate-wrapper">
      <b-pagination
        v-model="current_page"
        :total-rows="rows"
        :per-page="per_page"
        align="center"
      >
      </b-pagination>
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
    let res_articles = [
      { title: "タイトル", date: "2021-01-01", content: "本文", href: "#" },
      { title: "タイトル", date: "2021-01-01", content: "本文", href: "#" },
      { title: "タイトル", date: "2021-01-01", content: "本文", href: "#" },
      { title: "タイトル", date: "2021-01-01", content: "本文", href: "#" },
    ];
    let res_per_page = 10;
    return {
      articles: res_articles,
      current_page: 1,
      per_page: res_per_page,
      view_item: res_articles.slice(0, res_per_page)
    }
  },
  computed: {
    rows: function(): Number {
      return this.articles.length
    }
  },
  watch: {
    current_page: function(val) {
      this.view_item = this.articles.slice((val - 1) * this.per_page, val * this.per_page);
    }
  }
});
</script>

<style>
.page-wrapper {
  margin: 20px 0px;
}

.article-card {
  margin: 10px auto;
}

.paginate-wrapper {
  margin: 20px 0px;
}
</style>
