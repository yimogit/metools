<template>
   <div :id="layerId">
       <slot></slot>
   </div>
</template>
<script>
    export default {
        props:['options'],
        data(){
            return {
                layerId:'layerId_'+Date.now()+Math.floor(Math.random () * 1000),
                defOption:{}
            }
        },
        created(){
            let self=this;
            self.defOption={
                cancel:self.targetEvent('cancelHandler'),
                end:self.targetEvent('endHandler')
            };
            this.$nextTick(function(){
                let html=document.getElementById(self.layerId).innerHTML;
                self.defOption.content=html;
                if(self.options){      
                    Object.assign(self.defOption,self.options)
                }
                layer.open(self.defOption);
            })
        },
        methods:{
            targetEvent(key){
                this.$emit(key);
            }
        }
    }
</script>