<template>
  <div class="page-wrapper">
    <ProfileImg />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import ProfileImg from '~/components/ui/ProfileImg.vue';

export default Vue.extend({
  components: { ProfileImg }
});
</script>

<style>
.page-wrapper {
  margin: 30px 0px;
}
</style>
