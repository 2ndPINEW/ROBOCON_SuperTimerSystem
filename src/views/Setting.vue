<template>
    <v-container>
        <v-card class="ma-4 d-xs-8">
            <v-card-title> 準備時間</v-card-title>
            <v-row>
                <v-col>
                    <v-text-field
                        v-model="speach_min"
                        class="ma-4"
                        label="分"
                        value=""
                        min="0"
                        type="number"
                        hint="半角数字で入力"
                    >
                    </v-text-field>
                </v-col>
                <v-col>
                    <v-text-field
                        v-model="speach_sec"
                        class="ma-4"
                        label="秒"
                        value=""
                        min="0"
                        type="number"
                        hint="半角数字で入力"
                    >
                    </v-text-field>
                </v-col>
            </v-row>
        </v-card>
        <v-card class="ma-4">
            <v-card-title> 試合時間</v-card-title>
            <v-row >
                <v-col>
                    <v-text-field
                        v-model="question_min"
                        class="ma-4"
                        label="分"
                        value=""
                        min="0"
                        type="number"
                        hint="半角数字で入力"
                    >
                    </v-text-field>
                </v-col>
                <v-col>
                    <v-text-field
                        v-model="question_sec"
                        class="ma-4"
                        label="秒"
                        value=""
                        type="number"
                        min="0"
                        hint="半角数字で入力"
                    >
                    </v-text-field>
                </v-col>
            </v-row>
        </v-card>
        <v-card class="ma-4">
            <v-card-title> リトライペナルティ時間</v-card-title>
            <v-row >
                <v-col>
                    <v-text-field
                        v-model="retly_sec"
                        class="ma-4"
                        label="秒"
                        value=""
                        min="0"
                        type="number"
                        hint="半角数字で入力"
                    >
                    </v-text-field>
                </v-col>
            </v-row>
        </v-card>
        <div class="text-right">
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
            speach_min: "1",
            speach_sec: "00",
            question_min: "2",
            question_sec: "30",
            retly_sec: "15",
        }
    },
    methods:{
        toTimer: function(){
            Cookies.set('wait_min', this.speach_min);
            Cookies.set('wait_sec', this.speach_sec);
            Cookies.set('buttle_min', this.question_min);
            Cookies.set('buttle_sec', this.question_sec);
            Cookies.set('retly_sec', this.retly_sec);
            this.$router.push({path: '/waittimer'})
        }
    }
}
</script>