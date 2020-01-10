<template>
  <div>
    <v-toolbar src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg">
      <v-toolbar-title>HealthGram</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-avatar size="40">
        <v-img src="https://cdn.vuetifyjs.com/images/lists/2.jpg"></v-img>
      </v-avatar>
      <v-text title>{{name}}님 환영합니다</v-text>
      <v-toolbar-items>
        <v-avatar size="60" color="red" dark v-on="on" @click="logout">로그아웃</v-avatar>
      </v-toolbar-items>
    </v-toolbar>
  </div>
</template>
<script>
export default {
  name: "toolbar",
  methods: {
    logout() {
      alert("로그아웃");
    }
  },
  computed: {
    name() {
      return this.$store.state.users.user.uname
    }
  }
};
</script>
<style scoped></style>