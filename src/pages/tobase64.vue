<template>
    <div style="width:100%;height:100%;" class="layui-tab-brief">
        <ul class="layui-tab-title site-demo-title" style="margin-bottom:10px;">
            <li class="layui-this"  @click="switchTab(1)">图片转Base64</li>
            <li @click="$options.filters.openRedirect('http://coding.net/u/yimocoding/p/metools/git/blob/master/src/pages/tobase64.vue')">查看代码</li>
        </ul>
        <div style="width:100%;height:100%;">   
            <div class="layui-form-item layui-form-text">  
                <label class="layui-form-label">上传图片</label>
                <div class="layui-input-block">
            <v-upload @before="toBase64" :beforeShow="true" :uploadApi="'/static/data/editorUpload.json'"></v-upload>
            </div>
            </div>
            <div class="layui-form-item layui-form-text">
                <label class="layui-form-label">Base64编码</label>
                <div class="layui-input-block">
                <textarea v-model="previewBase64" placeholder="Base64图片" class="layui-textarea"></textarea>
            </div>
            </div>
            <div class="layui-form-item layui-form-text">
                <label class="layui-form-label">预览图</label>
                <div class="layui-input-block">
                <img :src="previewBase64" v-if="previewBase64" style="width:200px;" />
            </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                previewBase64:''
            }
        },
        methods: {
            toBase64(base64){
                this.previewBase64=base64;
            }
        }
    }

</script>