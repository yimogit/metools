<template>
      <textarea class="layui-textarea layui-hide" :id="editorId">{{currentValue}}</textarea>
</template>
<script>
    export default {
        props:['value','options'],
        data(){
            return {
                editorId:'layeditor_'+Date.now()+Math.floor(Math.random () * 1000),
                currentValue: this.value,
                currentIndex:null
            }
        },
        created(){
            let self=this
            let defOptions={
                    uploadImage: {
                        url:options.editorUploadApi,
                        type: 'get' //默认post使用需
                    },
                    height:200
            }
            if(self.options && self.options.height!=null){
                defOptions.height=self.options.height
            }
            if(self.options && self.options.hideTool!=null){
                defOptions.hideTool=self.options.hideTool
            }
            if(self.options && self.options.tool!=null){
                defOptions.tool=defOptions.tool
            }
            if(self.options && self.options.uploadImage!=null){
                defOptions.uploadImage=defOptions.uploadImage
            }
            self.$nextTick(function(){
                self.currentIndex=layui.layedit.build(self.editorId,defOptions);
                setInterval(()=>{
                    self.getContent();
                },500);
            })
        },
        methods:{
            getContent(){             
                let self=this;
                let content=layui.layedit.getContent(self.currentIndex)
                if(self.value!=content){
                    // console.log(self.value)
                    self.$emit('input', layui.layedit.getContent(self.currentIndex));
                }
                return content
            }
        }
    }
</script>