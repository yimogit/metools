<template>
        <div class="layui-unselect layui-form-select" :class="{'layui-form-selected':selectShow}">
            <div class="layui-select-title">
                <input type="text" placeholder="请选择" @click="changeSelect" readonly :value="currentValue.Text" class="layui-input layui-unselect">
                <i class="layui-edge"></i>
            </div>
            <dl class="layui-anim layui-anim-upbit" v-show="selectShow">
                <dd v-for="item in options" :class="{'layui-this':currentValue.Value==item.Value}" @click="currentSelect(item)"  value="item.Value">{{item.Text}}</dd>
            </dl>
        </div>
</template>
<script>
    export default {
        props:['value','options'],
        data(){
            return {
                selectShow:false,
                currentValue: {
                    Text:'',
                    Value:null,
                }
            }
        },
        created(){
            let self=this
            self.options.forEach(item=>{
                if(item.Value==self.value){
                    self.currentValue={
                        Text:item.Text,
                        Value:item.Value
                    }
                }
            })
        },
        methods:{
            currentSelect(item){
                let self=this;
                self.currentValue=item
                this.changeSelect();
                this.$emit('input', item.Value);
            },
            changeSelect(){
                this.selectShow=!this.selectShow;
            }
        }
    }
</script>