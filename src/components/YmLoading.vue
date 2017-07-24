<template>
    <div v-if="typeOne" class="layui-layer layui-layer-loading  layer-anim" id="layui-loading-1" type="loading" times="1" showtime="0" contype="string" style="top: 50%;left: 50%;margin-top: -12px;margin-left: -30px;z-index:19891027">
        <div class="layui-layer-content layui-layer-loading0"></div>
        <span class="layui-layer-setwin"></span>
    </div>
</template>
<script>
    export default {
        props:['show','type','typeOne'],
        data(){
            return {
                lodingId:null
            }
        },
        created(){
        },
        watch:{
            'show':function(val){
                let self=this;
                if(val==true){
                    self.lodingId=layer.load(self.type||0)
                }
                else{
                    layer.close(self.lodingId)
                }
            }
        }
    }
</script>