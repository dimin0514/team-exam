<template>
  <div id="app">
    <v-app>
      <v-header>
        <component :is="!loginCheck ? 'home' : 'login-after'"></component>
      </v-header>
      <v-container fluid>
        <slide-show />
      </v-container>
      <v-content>
        <main-menu />
      </v-content>
    </v-app>
  </div>
</template>
<script>
import Home from "@/components/Home";
import SlideShow from "@/components/cmm/SlideShow.vue";
import MainMenu from "@/components/cmm/MainMenu.vue";
import LoginAfter from "@/components/cmm/LoginAfter.vue";
export default {
  name: "App",
  components: {
    Home,
    SlideShow,
    MainMenu,
    LoginAfter
  },
  computed: {
    loginCheck() {
      return this.$store.state.common.isAuth;
    }
  }
};
</script>
<style></style>
