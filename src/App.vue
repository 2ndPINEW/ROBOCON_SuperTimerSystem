<template>
  <v-app>
    <v-app-bar app>
      <v-btn
        text
        @click="toHome"
      >
      <v-toolbar-title class="headline text-uppercase">
        <span>Super</span>
        <span class="font-weight-light">TimerSystem</span>
      </v-toolbar-title>
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn
        text
        href="https://twitter.com/2ndpinew"
        target="_blank"
      >
        <span class="mr-2">Contact</span>
      </v-btn>
    </v-app-bar>
    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  methods: {
    toHome: function(){
      this.$router.push("/")
    },
  },
  components: {
  },
  data: () => ({
    //
  }),
};
</script>
