<template>
  <div class="side-wrapper">
    <SideHeadline title="最新の記事" class="side-headline" />
      <div v-for="article in articles" :key="article.id">
        <SideCard
          class="side-card"
          :title="article.title"
          :date="article.date"
          :href="article.href"
        />
      </div>
    <SideHeadline title="カテゴリ" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import SideHeadline from "~/components/ui/SideHeadline.vue";
import SideCard from "~/components/ui/SideCard.vue";
import { article_list } from "~/posts/summary.js";

export default Vue.extend({
  components: {
    SideHeadline,
    SideCard
  },
  computed: {
    articles() {
      return article_list.slice(0, 3);
    }
  }
});
</script>

<style>
.side-wrapper {
  margin: 20px 0px;
}

.side-headline {
  margin-bottom: 10px;
}

.side-card {
  margin: 10px 0px;
}
</style>
