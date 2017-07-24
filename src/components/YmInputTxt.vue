<template>         
    <div class="layui-form-item layui-form-text">
        <label class="layui-form-label" v-text="label"></label>
        <div class="layui-input-block">
            <textarea v-keydown-tab v-model="currentValue" :placeholder="placeholder" class="layui-textarea" :class="areaClass"></textarea>
        </div>
    </div>
</template>
<script>
    export default {
        props:['value','label','placeholder','areaClass'],
        data () {
            return {
                currentValue: this.value      
            }
        },
        watch: {
            value(val) {
                this.currentValue = val;
            },
            currentValue(val) {
                this.$emit('input', val);
            }
        }
    }
</script>
