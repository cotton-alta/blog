<template>
  <div class="side-wrapper">
    <SideHeadline title="最新の記事" class="side-headline" />
      <SideCard title="タイトル" date="2021-01-01" />
    <SideHeadline title="カテゴリ" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import SideHeadline from "~/components/ui/SideHeadline.vue";
import SideCard from "~/components/ui/SideCard.vue";

export default Vue.extend({
  components: {
    SideHeadline,
    SideCard
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
</style>
