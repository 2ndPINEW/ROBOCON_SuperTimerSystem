<template>
  <v-app>
    <v-app-bar app>
      <v-btn
        text
        @click="toHome"
      >
      <v-toolbar-title class="headline text-uppercase">
        <span>{{Super}}</span>
        <span class="font-weight-light">{{LOGO_name}}</span>
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
  created: function(){
    var ua = navigator.userAgent;
    var width = window.innerWidth;
    if(ua.match(/(iPhone|iPod|Android.*Mobile)/i)&&width < 300){
      this.Super = "S"
      this.LOGO_name = "TS"
    }else if(ua.match(/(iPhone|iPod|Android.*Mobile)/i)&&width < 400){
      this.Super = "Super"
      this.LOGO_name = "TS"
    }else{
      this.Super = "Super"
      this.LOGO_name = "TimerSystem"
    }
  },
  data(){
    return{
      Super: "Super",
      LOGO_name: "TimerSystem"
    }
  },
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
