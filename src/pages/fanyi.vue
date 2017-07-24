<template>
    <v-tab :items="tabItems">
        <div slot="fanyi">
            <div class="layui-form-item layui-form-text">
                <label class="layui-form-label">翻译的句子</label>
                <div class="layui-input-block">
                    <textarea v-model="model.beforeTxt" @keydown.enter="youdaofanyi"
                              placeholder="请输入转换前字符串..."
                              class="layui-textarea"></textarea>
                </div>
            </div>
            <div class="layui-form-item layui-form-text">
                <div class="layui-input-block">
                    <v-button @click="youdaofanyi()"
                              v-if="!loading">
                        <span><i class="layui-icon">&#xe61a; </i>有道翻译</span>
                    </v-button>
                    <v-button v-else>
                        <span>翻译中</span>
                    </v-button>
                    <v-button @click="baidufanyi()"
                              v-if="!loading2">
                        <span><i class="layui-icon">&#xe61a; </i>百度翻译</span>
                    </v-button>
                    <v-button v-else>
                        <span>翻译中</span>
                    </v-button>
                </div>
            </div>
            <div class="layui-form-item layui-form-text">
                <label class="layui-form-label">翻译结果</label>
                <div class="layui-input-block">
                    <textarea v-model="model.afterTxt" 
                              placeholder="有道翻译结果..."
                              class="layui-textarea areaResult"></textarea>
                    <textarea v-model="model.afterTxt2" 
                              placeholder="百度翻译结果..."
                              class="layui-textarea areaResult"></textarea>
                </div>
            </div>
            <div class="layui-form-item layui-form-text">
                <pre v-html="model.jsonData" v-if='model.jsonData' class="layui-code">
                </pre>
            </div>
        </div>
    </v-tab>
</template>
<script>
import common from '../utils/common'
import CryptoJS from 'crypto-js'
export default {
    data() {
        return {
            tabItems: [
                {
                    Name: 'fanyi',
                    Title: '在线翻译'
                },
                {
                    Name: 'code',
                    Title: '查看代码',
                    Url: 'http://coding.net/u/yimocoding/p/metools/git/blob/master/src/pages/fanyi.vue'
                }
            ],
            model: {
                beforeTxt: '',
                afterTxt: '',
                afterTxt2:'',
                jsonData:''
            },
            loading: false,
            loading2: false
        }
    },
    watch: {
        '$route': 'fetchData'
    },
    created() {
        this.fetchData()
    },
    methods: {
        fetchData() {
        },
        youdaofanyi() {
            //http://fanyi.youdao.com/openapi?path=data-mode
            let self = this;
            var str = this.model.beforeTxt;
            if (common.trim(str) == '') {
                self.model.beforeTxt = '';
                return;
            }
            var api = common.getProtocol()+'://fanyi.youdao.com/openapi.do';
            self.loading = true;
            layui.jquery.ajax({
                url:api,
                data: {
                    keyfrom:'metools',
                    key:'955743043',
                    type:'data',
                    doctype:'jsonp',
                    version:1.1,
                    q: str,
                },
                type: 'get',
                dataType: 'jsonp',
                success: function (resp) {
                    self.loading = false;
                    if(resp.errorCode==0){
                        self.model.afterTxt = '';
                        resp.translation.forEach(item=>{
                            self.model.afterTxt+=item+'\n'
                        })
                        self.model.jsonData='';
                    }
                    else{
                        self.model.afterTxt='翻译失败~~~'
                        self.model.jsonData=JSON.stringify(resp);
                    }
                },
                error:function(data){
                    self.loading=false;
                    self.model.afterTxt='翻译失败~~~'
                    self.model.jsonData=JSON.stringify(data);
                }
            })
        },
        baidufanyi(){           
            //http://api.fanyi.baidu.com/api/trans/product/apihelp
            let self=this;
            var url=common.getProtocol()=='http'?'http://api.fanyi.baidu.com/api/trans/vip/translate':'https://fanyi-api.baidu.com/api/trans/vip/translate';
            if (common.trim(self.model.beforeTxt) == '') {
                self.model.beforeTxt = '';
                return;
            }
            var appid = '20170416000044969';
            var key = 'X1ZMBUNuENgb7pzMVrpA';
            var salt = (new Date).getTime();
            var query =self.model.beforeTxt
            // 多个query可以用\n连接  如 query='apple\norange\nbanana\npear'
            var from = 'auto';
            var to = 'auto';
            var str1 = appid + query + salt +key;
            var sign = CryptoJS['MD5'](str1).toString();
            self.loading2=true;
            layui.jquery.ajax({
                url: url,
                type: 'get',
                dataType: 'jsonp',
                data: {
                    q: query,
                    appid: appid,
                    salt: salt,
                    from: from,
                    to: to,
                    sign: sign
                },
                success: function (data) {
                    self.loading2=false;
                    self.model.afterTxt2=''
                    data.trans_result.forEach(item=>{
                        self.model.afterTxt2+=item.dst+'\n'
                    });
                    self.model.jsonData='';
                },
                error:function(data){
                    self.loading2=false;
                    self.model.afterTxt2='翻译失败~~~'
                    self.model.jsonData=JSON.stringify(data);
                }
            });

        }
    }
}

</script>
<style scoped>
    .areaResult{
        width:48%;
        float: left;
        margin-right: 1%;
    }    
</style>