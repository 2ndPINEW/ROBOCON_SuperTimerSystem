<template>
  <v-layout
      text-center
      wrap
    >
      <v-flex mt-4>
        <div class="title">
          すうぱあたいまあしすてむ
        </div>
        <p class="title">(ロボコンversion)</p><br>
        <p class="body-1 mx-4">ロボコンの競技時間の表示と読み上げを行います</p>
        <p class="body-1 mx-4">不具合や要望がありましたら右上のCONTACTボタンからTwitterDMへお願いします</p>
        <p class="body-1 red mx-4">{{error_message}}</p>
        <br><v-btn
          href="./#/setting"
          >
            <span class="title">設定画面へ</span>
        </v-btn>
        <p class="ma-4">※このアプリは音が鳴ります</p>
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
