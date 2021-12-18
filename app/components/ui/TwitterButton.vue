<template>
  <div class="button-wrapper">
    <div class="flex-image"><img src="/twitterbtn.png" /></div>
    <div class="flex-text"><span @click="windowOpen(twitterLink)">Tweet</span></div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  props: {
    title: {
      type: String,
      default: ""
    },
    base: {
      type: String,
      default: ""
    }
  },
  data() {
    let path = encodeURIComponent("https://blog.cotton-portfolio.org") + `/articles?base=${this.base}`,
        text = "[" + this.title + "]";
    return {
      twitterLink: `https://twitter.com/intent/tweet?url=${path}&text=${text}&lang=ja`
    };
  },
  methods: {
    windowOpen: function(link: string) {
      return window.open(link, '_blank', 'top=100,left=100,width=600,height=500');
    }
  }
});
</script>

<style lang="scss">
.button-wrapper {
  width: 85px;
  height: 30px;
  border-radius: 4px;
  color: #ffffff;
  background-color: #1B95E0;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.flex {
  &-image {
    height: 18px;
    img {
      height: 18px;
      margin: 3px 2px 0px 0px;
    }
  }
  &-text {
    padding-top: 2px;
    margin-right: 2px;
  }
}
</style>
