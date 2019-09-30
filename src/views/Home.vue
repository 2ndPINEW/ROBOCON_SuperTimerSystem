<template>
  <v-layout
      text-center
      wrap
    >
      <v-flex mt-4>
        <h1 class="display-1">
          すうぱあたいまあしすてむ(ロボケンversion)
        </h1>
        <p></p><br>
        <p class="title">ロボコンの競技時間の表示と時間の読み上げを行います.</p>
        <p class="title red ma-4">{{error_message}}</p>
        <br><v-btn
          text
          href="./#/setting"
          >
            <span class="title">設定画面へ</span>
        </v-btn>
        <p>※PCオンリーです</p>
      </v-flex> 
  </v-layout>
</template>

<script>
import Cookies from 'js-cookie'

export default {
  data(){
    return{
      error_message: ""
    }
  },
  created: function(){
      Cookies.set('check', "true");
      if(Cookies.get('check')=="true"){
        this.error_message = "";
      }else{
        this.error_message = "設定の保存にCookieを使用するため有効にしてください。";
      }
    },
};
</script>
