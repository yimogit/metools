<template>
    <input type="text" class="layui-input" :id="dateId" @click="changeDate(dateId)" v-model="currentValue">
</template>
<script>
    export default {
        props:['value','isTime','dateFormat'],
        data(){
            return {
                dateId:'laydate_'+Date.now(),
                currentValue: this.value
            }
        },
        methods:{
            changeDate(dateId){
                let self=this;
                layui.laydate({
                    elem:document.getElementById(dateId), 
                    istime: self.isTime||false, 
                    format: self.dateFormat||'YYYY-MM-DD',
                    choose: function(dates){ //选择好日期的回调
                        self.currentValue=dates;
                    }
                })
            }
        },
        watch: {
            value(val) {
                // console.log('value：'+val)
                this.currentValue = val;
            },
            currentValue(val) {
                // console.log('currentValue：'+val)
                this.$emit('input', val);
            }
        }
    }
</script>