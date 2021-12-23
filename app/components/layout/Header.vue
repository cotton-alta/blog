<template>
  <div>
    <b-navbar toggleable="lg" type="light" variant="light">
      <b-navbar-brand :href="base_url">{{ blog_title }}</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse">
      </b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item :href="base_url">Home</b-nav-item>
          <b-nav-item :href="about_url">About</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import settings from "./../../settings.yml";

export default Vue.extend({
  data() {
    const base_url = process.env.BASE_URL;
    const about_url = `${base_url}about`;
    return {
      blog_title: settings.blog_title,
      base_url,
      about_url
    }
  }
});
</script>

<style>
</style>
