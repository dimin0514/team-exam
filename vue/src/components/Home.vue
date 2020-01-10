<template>
  <div>
    <v-toolbar src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg">
      <i class="material-icons">fitness_center</i>
      <v-toolbar-title>Health Gram</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn text>
          <v-dialog v-model="dialog" persistent max-width="600px">
            <template v-slot:activator="{ on }">
              <v-btn color="primary" dark v-on="on">Login</v-btn>
            </template>
            <v-card>
              <v-card-title>
                <span class="headline">헬창에 오신걸 환영합니다</span>
              </v-card-title>
              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col cols="12" sm="10" md="12">
                      <v-img src="@/assets/img/2.jpg"></v-img>
                    </v-col>
                    <v-col cols="12">
                      <v-text-field v-model="uid" label="userid" required></v-text-field>
                    </v-col>
                    <v-col cols="12">
                      <v-text-field v-model="pwd" label="Password*" type="password" required></v-text-field>
                    </v-col>
                  </v-row>
                </v-container>
                <small>*indicates required field</small>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
                <v-btn color="blue darken-1" @click="login(uid,pwd)">로그인</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-btn>
        <v-btn text>Sign up</v-btn>
        <v-btn text>게시판</v-btn>
      </v-toolbar-items>
      <template v-if="$vuetify.breakpoint.smAndUp">
        <v-btn icon>
          <v-icon>mdi-export-variant</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>mdi-delete-circle</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>mdi-plus-circle</v-icon>
        </v-btn>
      </template>
    </v-toolbar>
  </div>
</template>
<script>
export default {
  name: "home",
  data() {
    return {
    dialog: false,
    ctx : this.$store.state.common.context
  }
  },
  methods: {
    login(uid,pwd){
      this.$store.dispatch('users/login',{uid : uid , pwd : pwd , context : this.ctx})
      .then(() => this.$store.state.common.isAuth = true)
    }
  },
  computed : {
    closeLogin(){
      return this.$store.state.common.dialog
    }
  }
}
</script>
<style scoped>
</style>