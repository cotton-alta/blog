<template>
  <div class="page-wrapper">
    <div v-for="article in view_item" :key="article.id">
      <ArticleCard
        class="article-card"
        :title="article.title"
        :date="article.date"
        :content="article.description"
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
import { fileMap as article_list } from "~/posts/summary.json";

export default Vue.extend({
  components: {
    ArticleCard
  },
  data() {
    const res_per_page = 3;
    return {
      view_item: [],
      current_page: 0,
      per_page: res_per_page
    }
  },
  computed: {
    rows(): Number {
      return Object.keys(this.articles).length
    },
    articles() {
      const article_array = Object.keys(article_list).map(article => {
        return {
          id: article_list[article].id,
          title: article_list[article].title,
          date: article_list[article].created_at.replace("T00:00:00.000Z", ""),
          description: article_list[article].description,
          tags: article_list[article].tags,
          href: "articles?base=" + article_list[article].base.replace(".json", "")
        };
      });
      article_array.sort((a, b) => {
        if(a.id > b.id) {
          return 1;
        } else {
          return -1;
        }
      });
      return article_array;
    }
  },
  watch: {
    current_page: function(val) {
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
