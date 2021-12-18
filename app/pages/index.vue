<template>
  <div class="page-wrapper">
    <div v-for="article in view_item" :key="article.id">
      <ArticleCard
        class="article-card"
        :title="article.title"
        :date="article.date"
        :content="article.description"
        :href="article.href"
        :tags="tag_array(article.tags)"
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
import { article_list } from "~/posts/summary.js";

interface ArticleType {
  id: number;
  title: string;
  date: string;
  description: string;
  tags: string;
  href: string;
}

export default Vue.extend({
  components: { ArticleCard },
  data() {
    const res_per_page = 10;
    const res_view_item: ArticleType[] = [];
    return {
      view_item : res_view_item,
      current_page: 0,
      per_page: res_per_page,
      articles: article_list
    };
  },
  methods: {
    tag_array(tag_str: string) {
      return tag_str.split(", ");
    }
  },
  computed: {
    rows(): Number {
      return Object.keys(this.articles).length;
    }
  },
  watch: {
    current_page(val) {
      this.view_item = this.articles.slice((val - 1) * this.per_page, val * this.per_page);
    }
  },
  mounted() {
    this.current_page = 1;
  },
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
