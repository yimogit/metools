<template>
    <v-tab :items="tabItems">
        <div slot="main">   
            <div class="layui-form-item layui-form-text">
                <label class="layui-form-label">处理前</label>
                <div class="layui-input-block">
                    <textarea v-model="beforeTxt" placeholder="待处理字符串..." class="layui-textarea"></textarea>
                </div>
            </div>
            <div class="layui-form-item layui-form-text">
                <label class="layui-form-label">替换规则</label>
                <div class="layui-input-inline">
                     <v-select v-model="selectRule" :options="selectOptions"></v-select>
                </div>
                <div class="layui-input-inline">
                    <span style="height:38px;line-height:38px;">→_→</span>
                </div>
                <div class="layui-input-inline">
                    <input type="text" class="layui-input" v-model="r2" placeholder="替换字符串"/>
                </div>
            </div>
            <div class="layui-form-item layui-form-text">
                <div class="layui-input-block">
                    <v-button @click="replaceTxt()">
                        <span>替换 <i class="layui-icon">&#xe61a; </i></span>
                    </v-button>
                </div>
            </div>
            <div class="layui-form-item layui-form-text">
                <label class="layui-form-label">处理后</label>
                <div class="layui-input-block">
                    <textarea v-model="afterTxt" placeholder="处理后字符串..." class="layui-textarea"></textarea>
                </div>
            </div>
        </div>
        </v-tab>
</template>
<script>
    export default {
        data() {
            return {
                tabItems:[
                    {
                        Name:'main',
                        Title:'字符串替换'
                    },
                    {
                        Name:'code',
                        Title:'查看代码',
                        Url:'http://coding.net/u/yimocoding/p/metools/git/blob/master/src/pages/strsplit.vue'
                    }
                ],
                beforeTxt:'',
                afterTxt:'',
                selectRule:'space',
                r2:'',
                selectOptions:[
                    {
                        Text:'空格',
                        Value:'space'
                    },
                    {
                        Text:'回车',
                        Value:'enter'
                    }
                ],
            }
        },
        mounted(){
            // layui.code({
            //     title:'javascript',
            //     encode: true
            // });
        },
        methods: {
            replaceTxt(){
                var str=this.beforeTxt;
                var r1=this.selectRule;
                var r2=this.r2;
                console.log(r1);
                if(r1=='space'){
                    str = str.replace(/\ +/g, r2);
                    str = str.replace(/[ ]/g, r2); 
                }
                else if(r1=='enter'){
                    str=str.replace(/\r\n/g,r2)  
                    str=str.replace(/\n/g,r2)  
                }
                this.afterTxt=str
            }
        }
    }

</script>