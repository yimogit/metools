<template>
      <div class="layui-unselect layui-form-switch" :class="{'layui-form-onswitch':currentValue}" @click="changeSwitch"><i></i></div>
</template>
<script>
    export default {
        props:['value'],
        data(){
            return {
                selectShow:false,
                currentValue: this.value
            }
        },
        created(){
        },
        methods:{
            changeSwitch(){
                this.currentValue=!this.currentValue;
                this.$emit('input', this.currentValue);
            }
        }
    }
</script>