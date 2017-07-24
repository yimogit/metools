<template>
    <v-tab :items="tabItems">
        <div slot="main">   
            <div class="layui-form-item layui-form-text">
                <label class="layui-form-label">阿拉伯数字</label>
                <div class="layui-input-block">
                    <input v-model="beforeTxt" placeholder="数字..." class="layui-input"/>
                </div>
            </div>
            <div class="layui-form-item layui-form-text">
                <div class="layui-input-block">
                    <v-button @click="convertDxRmb()">
                        <span>大写 <i class="layui-icon">&#xe61a; </i></span>
                    </v-button>
                    <v-button @click="convertXxRmb()">
                        <span>小写 <i class="layui-icon">&#xe619; </i></span>
                    </v-button>
                </div>
            </div>
            <div class="layui-form-item layui-form-text">
                <label class="layui-form-label">人民币汉字大写</label>
                <div class="layui-input-block">
                    <textarea v-model="afterTxt" placeholder="中文..." class="layui-textarea"></textarea>
                </div>
            </div>
        </div>
    </v-tab>
</template>
<script>
    import rmbHelper from '../utils/rmbHelper'
    export default {
        data() {
            return {
                tabItems:[
                    {
                        Name:'main',
                        Title:'人民币转换'
                    },
                    {
                        Title:'查看代码',
                        Name:'code',
                        Url:'http://coding.net/u/yimocoding/p/metools/git/blob/master/src/pages/rmbconvert.vue',
                    }
                ],
                beforeTxt:'',
                afterTxt:'',
            }
        },
        mounted(){
        },
        methods: {
            convertDxRmb(){
                var beforeTxt=this.beforeTxt;
                this.afterTxt=rmbHelper.convert(beforeTxt);
            },
            convertXxRmb(){
                var afterTxt=this.afterTxt;
                this.beforeTxt=rmbHelper.rmbToNum(afterTxt);
            }
        }
    }

</script>