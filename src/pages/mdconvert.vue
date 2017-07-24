<template>
    <v-tab :items="items">
        <div slot="main">
            <v-input-txt label="Markdown" v-model="mdText"></v-input-txt>
            <div class="layui-form-item layui-form-text">
                <div class="layui-input-block">
                    <v-button><i class="layui-icon">&#xe61a; </i>自动转换</v-button>
                </div>
            </div>
            <v-input-txt label="Html"  v-bind:value="htmlText"></v-input-txt>
            <h2 class="site-tips">预览</h2>
            <div v-html="htmlText" class="layui-input-block artcontent" >
            </div>
        </div>
    </v-tab>
</template>
<script>
    import '../assets/css/markdown.css'
    export default {
        data () {
            return {
                items:[
                    {
                        Title:'Markdown转换',
                        Name:'main'
                    },
                    {
                        Name:'source',
                        Title:'marked使用',
                        Url:'https://github.com/chjj/marked'
                    },
                    {
                        Title:'查看代码',
                        Name:'code',
                        Url:'http://coding.net/u/yimocoding/p/metools/git/blob/master/src/pages/mdconvert.vue',
                    }
                ],
                mdText:''
            }
        },
        created () {
            
        },
        computed:{
            htmlText(){
                return this.convert(this.mdText);
            }
        },
        methods: {
            convert(){
                var marked = require('marked');
                marked.setOptions({
                    renderer: new marked.Renderer(),
                    gfm: true,
                    tables: true,
                    breaks: false,
                    pedantic: false,
                    sanitize: false,
                    smartLists: true,
                    smartypants: false
                });
                return marked(this.mdText);
            }
        }

    }
</script>