<template>
    <v-container>
        <v-row>
            <v-col>
        <v-card
            min-width="250" 
            class="ma-4 d-xs-8">
            <v-card-title> 準備時間</v-card-title>
            <v-row>
                <v-col>
                    <v-text-field
                        v-model="wait_min"
                        class="ma-4"
                        label="分"
                        value=""
                        :rules="min_Rules"
                        min="0"
                        type="number"
                        hint="半角数字で入力"
                    >
                    </v-text-field>
                </v-col>
                <v-col>
                    <v-text-field
                        v-model="wait_sec"
                        class="ma-4"
                        label="秒"
                        value=""
                        :rules="sec_Rules"
                        max="59"
                        min="0"
                        type="number"
                        hint="0~59の半角数字で入力"
                    >
                    </v-text-field>
                </v-col>
            </v-row>
        </v-card>

            </v-col>
            <v-col>
        <v-card 
            min-width="250"
            class="ma-4">
            <v-card-title> 試合時間</v-card-title>
            <v-row >
                <v-col>
                    <v-text-field
                        v-model="buttle_min"
                        class="ma-4"
                        label="分"
                        value=""
                        :rules="min_Rules"
                        min="0"
                        type="number"
                        hint="半角数字で入力"
                    >
                    </v-text-field>
                </v-col>
                <v-col>
                    <v-text-field
                        v-model="buttle_sec"
                        class="ma-4"
                        label="秒"
                        value=""
                        type="number"
                        :rules="sec_Rules"
                        max="59"
                        min="0"
                        hint="0~59の半角数字で入力"
                    >
                    </v-text-field>
                </v-col>
            </v-row>
        </v-card>

            </v-col>
        </v-row>
        <v-card
            min-width="250" 
            class="ma-4">
            <v-card-title> リトライペナルティ時間</v-card-title>
            <v-row >
                <v-col>
                    <v-text-field
                        v-model="retly_sec"
                        class="ma-4"
                        label="秒"
                        value=""
                        :rules="min_Rules"
                        min="0"
                        type="number"
                        hint="半角数字で入力"
                    >
                    </v-text-field>
                </v-col>
            </v-row>
        </v-card>
        <div class="text-right">
            <div class="mx-4 red--text">{{error_message}}</div>
            <v-btn
                class="mx-4 mb-4"
                v-on:click="toTimer"
                >タイマー画面へ
            </v-btn>
        </div>
    </v-container>
</template>

<script>
import Cookies from 'js-cookie'
export default {
    data: function(){
        return{
            error_message: "",
            wait_min: "1",
            wait_sec: "00",
            buttle_min: "2",
            buttle_sec: "30",
            retly_sec: "15",
            sec_Rules: [
                v => v >= 0 || "0以上の数値を入れてください",
                v => v < 60 || "60より小さい数値を入れてください"
            ],
            min_Rules: [
                v => v >= 0 || "0以上の数値を入れてください",
            ],
        }
    },
    created: function(){
        if(Cookies.get(!Cookies.get('wait_min'))){
            this.wait_min = Number(Cookies.get('wait_min'))
        }
        if(Cookies.get(!Cookies.get('wait_sec'))){
            this.wait_sec = Number(Cookies.get('wait_sec'))
        }
        if(Cookies.get(!Cookies.get('buttle_min'))){
            this.buttle_min = Number(Cookies.get('buttle_min'))
        }
        if(Cookies.get(!Cookies.get('buttle_sec'))){
            this.buttle_sec = Number(Cookies.get('buttle_sec'))
        }
        if(Cookies.get(!Cookies.get('retly_sec'))){
            this.retly_sec = Number(Cookies.get('retly_sec'))
        }
    },
    methods:{
        toTimer: function(){
            if(this.wait_min == ""){
                this.wait_min = 0;
            }
            if(this.wait_sec == ""){
                this.wait_sec = 0;
            }
            if(this.buttle_min == ""){
                this.buttle_min = 0;
            }
            if(this.buttle_sec == ""){
                this.buttle_sec = 0;
            }
            if(this.retly_sec == ""){
                this.retly_sec = 0;
            }
            if(this.wait_min < 0 || this.wait_sec < 0 || this.buttle_min < 0 || this.buttle_sec < 0 || this.retly_sec < 0 || this.wait_sec > 59 || this.buttle_sec > 59){
                    this.error_message = "入力項目を確認してください"
            }else{
                Cookies.set('wait_min', this.wait_min);
                Cookies.set('wait_sec', this.wait_sec);
                Cookies.set('buttle_min', this.buttle_min);
                Cookies.set('buttle_sec', this.buttle_sec);
                Cookies.set('retly_sec', this.retly_sec);
                this.$router.push({path: '/waittimer'})
            }
        }
    }
}
</script>