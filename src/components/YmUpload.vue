<template>
    <div class="uploadLayer" >
        <img class="uploadimg" :src="displayImg" v-if="displayImg">
        <img class="uploadimg" src="../assets/images/logo.png" v-else />
        <input type="file" accept="image/*" name="file" class="layui-upload-file" :id="uploadId">        
        <!--<div class="layui-box layui-upload-button">
            <input type="file" name="file" class="layui-upload-file" :id="uploadId">
            <span class="layui-upload-icon" style="margin:0px;"><i class="layui-icon"></i>上传</span>
         </div>-->
    </div>
</template>
<script>
    export default {
        props:['value','previewPath','uploadApi','beforeShow'],
        data(){
            return {
                uploadId:'upload_'+Date.now(),
                displayImg:this.previewPath
            }
        },
        mounted(){
            let self=this
            layui.upload({
                url: self.uploadApi
                ,method: 'get' //上传接口的http类型
                ,success: function(res){
                    if(res.Data){
                        self.displayImg=res.Data.previewPath
                        self.$emit('input', res.Data.savePath);
                    }
                }
                ,before:function(res){
                    if(self.beforeShow){
                        var reader = new FileReader();
                        reader.readAsDataURL(res.files[0]);
                        reader.onload = function(e){
                            self.displayImg=e.target.result
                            self.$emit('before',self.displayImg);
                        };
                    }
                }
            });
        }
    }
</script>
<style>
    .uploadLayer{
        position: relative;
        float: left;
        width:120px;
        height:120px;
    }
    .uploadLayer .uploadimg{
        width: 120px;
        height: 120px;
        border-radius: 100%;
        position: absolute;
    }
    .uploadLayer .layui-box{
        position: relative;
        top: 0;
        padding-top:35%;
        left: 0;
        width: 100%;
        height:100%;
        cursor: pointer;
        background-color: rgba(0,0,0,0);
        color: rgba(255,255,255,1);
        border:0;
    }
</style>