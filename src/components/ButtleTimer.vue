<template>
<div id="timer">
    <v-container>
    <div class="display-4 ma-4">競技時間{{message}}</div>
    <v-card class="ma-4 text-center">
        <div class="time font-weight-bold">{{ formatTime }}</div>
    </v-card>
    <div class="tool text-right ma-4">
        <v-btn class= "ma-2" v-on:click="start_retly">リトライ</v-btn>
        <v-btn class= "ma-2" v-on:click="start" v-if="!timerOn">スタート</v-btn>
        <v-btn class= "ma-2" v-on:click="stop" v-if="timerOn">一時停止</v-btn>
        <v-btn class= "ma-2" v-on:click="toNextTimer">準備画面へ</v-btn>
        <v-btn class= "ma-2" v-on:click="toSetting">設定画面へ</v-btn>
    </div>
    </v-container>
    <audio id="end_sound" src="https://2ndpinew.site/work/ROBOCON_SuperTimerSystem/assets/buttle_end.wav"></audio>
    <audio id="retly_end" src="https://2ndpinew.site/work/ROBOCON_SuperTimerSystem/assets/retly_end.wav"></audio>
    <audio id="retly_start" src="https://2ndpinew.site/work/ROBOCON_SuperTimerSystem/assets/retly_start.wav"></audio>
    <audio id="retly_error" src="https://2ndpinew.site/work/ROBOCON_SuperTimerSystem/assets/retly_error.wav"></audio>
    <audio id="30" src="https://2ndpinew.site/work/ROBOCON_SuperTimerSystem/assets/30.wav"></audio>
    <audio id="60" src="https://2ndpinew.site/work/ROBOCON_SuperTimerSystem/assets/60.wav"></audio>
    <audio id="90" src="https://2ndpinew.site/work/ROBOCON_SuperTimerSystem/assets/90.wav"></audio>
    <audio id="120" src="https://2ndpinew.site/work/ROBOCON_SuperTimerSystem/assets/120.wav"></audio>
</div>
</template>

<script>
import Cookies from 'js-cookie'
export default {
    created: function(){
        var min = Number(Cookies.get('buttle_min'))
        var sec = Number(Cookies.get('buttle_sec'))
        this.min = min
        this.sec = sec
    },
    data() {
        return {
            min: 0,
            sec: 0,
            message: "",
            retly_sec: null,
            retlying: false,
            timerOn: false,
            timerObj: null,
            retly_timerObj: null,
            tineComplete: false
        };
    },
    methods: {
        playEndSound: function(){
            var audio = document.getElementById('end_sound');
            audio.play();
        },
        playSound: function(file_name){
            var audio = document.getElementById(file_name);
            audio.play();
        },
        start_retly: function(){
            if(!this.retlying){
                this.retly_sec = Number(Cookies.get('retly_sec'))
                if(this.retly_sec > this.sec){
                    this.playSound("retly_error");
                }else{
                    this.message = "(リトライ中)"
                    this.retlying = true;
                    let self = this;
                    this.playSound("retly_start");
                    this.retly_timerObj = setInterval(function() {self.count_retly();}, 1000);
                }
            }
        },
        count_retly: function(){
            this.retly_sec--;
            if (this.retly_sec <= 0) {
                clearInterval(this.retly_timerObj);
                this.playSound("retly_end");
                this.retlying = false;
                this.message = "";
            }
        },
        toSetting: function(){
            clearInterval(this.timerObj);
            this.min = Number(Cookies.get('buttle_min'))
            this.sec = Number(Cookies.get('buttle_sec'))
            this.$router.push("/setting")
        },
        toNextTimer: function(){
            clearInterval(this.timerObj);
            this.min = Number(Cookies.get('buttle_min'))
            this.sec = Number(Cookies.get('buttle_sec'))
            this.$router.push("/waittimer")
        },
        count: function() {
            if (this.sec <= 0 && this.min >= 1) {
                this.min--;
                this.sec = 59;
            } else if (this.sec <= 0 && this.min <= 0) {
                this.sleep(1100)
                this.min = Number(Cookies.get('buttle_min'))
                this.sec = Number(Cookies.get('buttle_sec'))
                this.complete();
            } else {
                this.sec--;
                if (this.sec <= 0 && this.min <= 0) {
                    this.playEndSound();
                }
                if (this.totalSec == 30) {
                    this.playSound("30");
                }
                if (this.totalSec == 60) {
                    this.playSound("60");
                }
                if (this.totalSec == 90) {
                    this.playSound("90");
                }
                if (this.totalSec == 120) {
                    this.playSound("120");
                }
            }
        },
        start: function() {
            let self = this;
            this.timerObj = setInterval(function() {self.count();}, 1000);
            this.timerOn = true;
        },

        stop: function() {
            clearInterval(this.timerObj);
            this.timerOn = false;
        },

        complete: function() {
            clearInterval(this.timerObj);
            this.toNextTimer()
        },
        sleep: function(waitMsec) {
            var startMsec = new Date();
            while (new Date() - startMsec < waitMsec);
        }
    },
    computed: {
        formatTime: function() {
            let timeStrings = [this.min.toString(), this.sec.toString()].map(function(str) {
                if (str.length < 2) {
                return "0" + str;
                } else {
                return str;
                }
            });
            if(this.retlying){
                if(this.retly_sec.length < 2){
                    return "0" + this.retly_sec;
                }else{
                    return this.retly_sec;
                }
            }
            return timeStrings[0] + ":" + timeStrings[1];
        },
        totalSec: function(){
            var sec = this.sec + this.min*60;
            return sec;
        }
    }
};
</script>

<style scoped>
#timer {
    display: flex;
    align-items: center;
    justify-content: center;
}
.time {
    font-size: 400px;
}
</style>