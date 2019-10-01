<template>
<div id="timer">
    <v-container>
    <div v-if="isSmartPhone" class="display-2 ma-4">準備時間</div>
    <div v-if="isTabletPC_more_small" class="display-3 ma-4">準備時間</div>
    <div v-if="isTabletPC_small" class="display-3 ma-4">準備時間</div>
    <div v-if="isTabletPC_middle" class="display-3 ma-4">準備時間</div>
    <div v-if="isTabletPC_large" class="display-4 ma-4">準備時間</div>
    <div v-if="isPC_more_small" class="display-2 ma-4">準備時間</div>
    <div v-if="isPC_small" class="display-3 ma-4">準備時間</div>
    <div v-if="isPC_middle" class="display-4 ma-4">準備時間</div>
    <div v-if="isPC_large" class="display-4 ma-4">準備時間</div>
    <v-card class="ma-4 text-center">
        <div v-if="isSmartPhone_small" class="time-sp_s font-weight-bold">{{ formatTime }}</div>
        <div v-if="isSmartPhone_middle" class="time-sp_m font-weight-bold">{{ formatTime }}</div>
        <div v-if="isSmartPhone_large" class="time-sp_l font-weight-bold">{{ formatTime }}</div>
        <div v-if="isTabletPC_more_small" class="time-tp_ms font-weight-bold">{{ formatTime }}</div>
        <div v-if="isTabletPC_small" class="time-tp_s font-weight-bold">{{ formatTime }}</div>
        <div v-if="isTabletPC_middle" class="time-tp_m font-weight-bold">{{ formatTime }}</div>
        <div v-if="isTabletPC_large" class="time-tp_l font-weight-bold">{{ formatTime }}</div>
        <div v-if="isPC_more_small" class="time-pc_ms font-weight-bold">{{ formatTime }}</div>
        <div v-if="isPC_small" class="time-pc_s font-weight-bold">{{ formatTime }}</div>
        <div v-if="isPC_middle" class="time-pc_m font-weight-bold">{{ formatTime }}</div>
        <div v-if="isPC_large" class="time-pc_l font-weight-bold">{{ formatTime }}</div>
    </v-card>
    <div class="tool text-right ma-4">
            <v-btn class= "ma-2" v-on:click="start" v-if="!timerOn">スタート</v-btn>
            <v-btn class= "ma-2" v-on:click="stop" v-if="timerOn">一時停止</v-btn>
            <v-btn class= "ma-2" v-on:click="toNextTimer">競技画面</v-btn>
            <v-btn class= "ma-2" v-on:click="toSetting">設定画面</v-btn>
    </div>
    </v-container>
    <audio id="end_sound" src="https://2ndpinew.site/work/ROBOCON_SuperTimerSystem/assets/wait_end.wav"></audio>
    <audio id="30" src="https://2ndpinew.site/work/ROBOCON_SuperTimerSystem/assets/30.wav"></audio>
    <audio id="60" src="https://2ndpinew.site/work/ROBOCON_SuperTimerSystem/assets/60.wav"></audio>
    <audio id="120" src="https://2ndpinew.site/work/ROBOCON_SuperTimerSystem/assets/120.wav"></audio>
</div>
</template>

<script>
import Cookies from 'js-cookie'
export default {
    created: function(){
        this.min = Number(Cookies.get('wait_min'))
        this.sec = Number(Cookies.get('wait_sec'))
        let self = this;
        setInterval(function() {self.windowresize();}, 500);
    },
    data() {
        return {
            min: 0,
            sec: 0,
            timerOn: false,
            timerObj: null,
            tineComplete: false,
            ua: "",
            isPC_more_small: false,
            isPC_small: false,
            isPC_middle: false,
            isPC_large: false,
            isSmartPhone: false,
            isSmartPhone_large: false,
            isSmartPhone_middle: false,
            isSmartPhone_small: false,
            isTabletPC_more_small: false,
            isTabletPC_small: false,
            isTabletPC_middle: false,
            isTabletPC_large: false
        };
    },
    methods: {
        windowresize: function(){
            var width = window.innerWidth;
            this.ua = navigator.userAgent;
            this.isSmartPhone_large = false;
            this.isSmartPhone_middle = false;
            this.isSmartPhone_small = false;
            this.isSmartPhone = false;
            this.isTabletPC_large = false;
            this.isTabletPC_middle = false;
            this.isTabletPC_small = false;
            this.isTabletPC_more_small = false;
            this.isPC_small = false;
            this.isPC_more_small = false;
            this.isPC_middle = false;
            this.isPC_large = false;
            if(this.ua.match(/(iPhone|iPod|Android.*Mobile)/i)){
                if(width > 400){
                    this.isSmartPhone_large = true;
                }else if(width > 350){
                    this.isSmartPhone_middle = true;
                }else{
                    this.isSmartPhone_small = true;
                }
                this.isSmartPhone = true
            }else if(this.ua.match(/(iPad|Android)/i)){
                if(width > 1200){
                    this.isTabletPC_large = true;
                }else if(width > 1000){
                    this.isTabletPC_middle = true;
                }else if(width < 700){
                    this.isTabletPC_more_small = true;
                }else{
                    this.isTabletPC_small = true;
                }
            }else{
                if(width > 1500){
                    this.isPC_large = true;
                }else if(width > 1000){
                    this.isPC_middle = true;
                }else if(width < 700){
                    this.isPC_more_small = true;
                }else{
                    this.isPC_small = true;
                }
            }
        },
        playEndSound: function(){
            var audio = document.getElementById('end_sound');
            audio.play();
        },
        playSound: function(file_name){
            var audio = document.getElementById(file_name);
            audio.play();
        },
        toSetting: function(){
            clearInterval(this.timerObj);
            this.min = Number(Cookies.get('wait_min'))
            this.sec = Number(Cookies.get('wait_sec'))
            this.$router.push("/setting")
        },
        toNextTimer: function(){
            clearInterval(this.timerObj);
            this.min = Number(Cookies.get('wait_min'))
            this.sec = Number(Cookies.get('wait_sec'))
            this.$router.push("/buttletimer")
        },
        count: function() {
            if (this.sec <= 0 && this.min >= 1) {
                this.min--;
                this.sec = 59;
            } else if (this.sec <= 0 && this.min <= 0) {
                this.sleep(1100)
                this.min = Number(Cookies.get('wait_min'))
                this.sec = Number(Cookies.get('wait_sec'))
                this.complete();
            } else {
                this.sec--;
                if (this.sec <= 0 && this.min <= 0) {
                    this.playEndSound();
                }
                if (this.totalSec == 30) {
                    this.playSound("30");
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
.time-sp_s {
    font-size: 80px;
}
.time-sp_m {
    font-size: 100px;
}
.time-sp_l {
    font-size: 120px;
}
.time-tp_ms {
    font-size: 200px;
}
.time-tp_s {
    font-size: 260px;
}
.time-tp_m {
    font-size: 330px;
}
.time-tp_l {
    font-size: 400px;
}
.time-pc_ms {
    font-size: 100px;
}
.time-pc_s {
    font-size: 200px;
}
.time-pc_m {
    font-size: 350px;
}
.time-pc_l {
    font-size: 450px;
}
</style>