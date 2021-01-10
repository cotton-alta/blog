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
// import { fileMap as article_list } from "~/posts/summary.json";
import { article_list } from "~/posts/summary.js";

// type Json = typeof article_list;

interface ArticleType {
  // [key: string]: any;
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
    const res_per_page = 3;
    const res_view_item: ArticleType[] = [];
    return {
      view_item : res_view_item,
      current_page: 0,
      per_page: res_per_page,
      articles: article_list
    }
  },
  methods: {
    tag_array(tag_str: string) {
      return tag_str.split(", ");
    }
  },
  computed: {
    rows(): Number {
      return Object.keys(this.articles).length
    }
    // articles(): ArticleType[] {
    //   const article_array: ArticleType[] = Object.keys(article_list).map((key: any) => {
    //     let article = article_list[key];
    //     return {
    //       id: article.id,
    //       title: article.title,
    //       date: article.created_at.replace("T00:00:00.000Z", ""),
    //       description: article.description,
    //       tags: article.tags,
    //       href: "articles?base=" + article.base.replace(".json", "")
    //     };
    //   });
    //   article_array.sort((a: ArticleType, b: ArticleType) => {
    //     const a_id: number = a.id as unknown as number;
    //     const b_id: number = b.id as unknown as number;
    //     if(a_id < b_id) {
    //       return 1;
    //     } else {
    //       return -1;
    //     }
    //   });
    //   return article_array;
    // }
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
