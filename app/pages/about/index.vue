<template>
  <div class="page-wrapper">
    <PageHeadline title="About" />
    <div class="page-box">
      <ProfileImg class="page-img" />
      <div class="page-text">
        <span class="page-text__head">{{ handlename }}</span>
        <span class="page-text__main">{{ description }}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import ProfileImg from '~/components/ui/ProfileImg.vue';
import PageHeadline from '~/components/ui/PageHeadline.vue';

export default Vue.extend({
  components: {
    ProfileImg,
    PageHeadline
  },
  data() {
    return {
      handlename: 'コットン',
      description: '東京の某大学の学部3年生です。webエンジニアになるため日々勉強をしています。個人開発だけではなくチーム開発にも積極的に取り組んでいます。'
    }
  }
});
</script>

<style lang="scss">
.page-wrapper {
  margin: 20px 0px;
}

.page-box {
  display: flex;
  width: 98%;
  margin: 10px auto;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
}

.page-img {
  margin: 20px;
}

.page-text {
  width: 500px;
  max-width: 98%;
  margin: 20px 0px;
  &__main, &__head {
    display: block;
    width: 500px;
    max-width: 98%;
    margin: 0 auto;
  }
  &__head {
    font-size: 25px;
    font-weight: bold;
    text-align: center;
  }
}
</style>
