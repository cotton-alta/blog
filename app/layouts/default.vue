<template>
  <div>
    <Header />
    <div class="container">
      <div class="row">
        <Nuxt class="main col-sm-12 col-lg-9" />
        <SideBar class="side col-sm-12 col-lg-3" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Header from "~/components/layout/Header.vue";
import SideBar from "~/components/layout/SideBar.vue";
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

export default Vue.extend({
  components: {
    Header,
    SideBar
  }
});
</script>

<style>
html {
  font-family:
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}

.main {
  background: #999999;
  height: 100px;
}

.side {
  background: #888888;
}
</style>
