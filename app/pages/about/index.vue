<template>
  <div class="page-wrapper">
    <PageHeadline title="About" />
    <div class="page-box">
      <ProfileImg />
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
  }
});
</script>

<style>
.page-wrapper {
  margin: 20px 0px;
}

.page-box {
  margin: 10px auto;
  width: 98%;
}
</style>
