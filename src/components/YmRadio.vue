<template>
    <div>
        <div class="layui-unselect layui-form-radio" v-if="options!=null"
          v-for="item in options"
            @click="changeRadio(item)" 
            :class="{'layui-form-radioed':currentValue.Value==item.Value}">
            <i class="layui-anim layui-icon" :class="{'layui-anim-scaleSpring':currentValue.Value==item.Value}"></i>
            <span>{{item.Text}}</span>
        </div>
        <div class="layui-unselect layui-form-radio" v-if="optionVals!=null"
          v-for="item in optionVals"
            @click="changeRadio(item)" 
            :class="{'layui-form-radioed':currentVal==item}">
            <i class="layui-anim layui-icon" :class="{'layui-anim-scaleSpring':currentVal==item}"></i>
            <span>{{item}}</span>
        </div>
    </div>
</template>
<script>
    export default {
        props:['value','options','optionVals'],
        data(){
            return {
                currentValue: {
                    Text:'',
                    Value:null
                },
                currentVal:''
            }
        },
        created(){
            let self=this
            if(self.options!=null){
                self.options.forEach(item=>{
                    if(item.Value==self.value){
                        self.currentValue={
                            Text:item.Text,
                            Value:item.Value
                        }
                    }
                })
            }
            else if(self.optionVals!=null){
                self.currentVal=this.value;
            }
        },
        methods:{
            changeRadio(item){
                if(this.options!=null){
                    this.currentValue={
                            Text:item.Text,
                            Value:item.Value
                    }
                    this.$emit('input', item.Value);
                }
                else{
                    this.currentVal=item;
                    this.$emit('input', item);
                }
            }
        }
    }
</script>