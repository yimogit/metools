<template>
    <div style="width:100%;height:100%;" class="layui-tab-brief">
        <ul class="layui-tab-title site-demo-title" style="margin-bottom:10px;">
            <li class="layui-this">欢迎页</li>
            <li @click="disabledColor" v-text="colorStatus"></li>
            <li tabcode="code" @click="$options.filters.openRedirect('http://coding.net/u/yimocoding/p/metools/git/blob/master/src/pages/home.vue')">查看代码</li>
        </ul>
        <div style="width:100%;height:100%;">
            <div v-for="item in menus" class="welcome layui-circle" @click="$options.filters.openRoute(item.MenuUrl)" :style="color()">
                <router-link :to="{path:item.MenuUrl}" v-if="item.MenuUrl && item.MenuUrl.indexOf('/')==0 ">{{item.MenuName}}</router-link>
                <a :href="item.MenuUrl" target="_blank" v-else>{{item.MenuName}}</a>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                colorValue: '',
                colorStatus:'固定颜色',
                menus: []
            }
        },
        created() {
            let self = this
            self.menus = [];
            window.siteData.MenuItems.forEach(item => {
                if (item.ChildrenMenu && item.ChildrenMenu.length > 0) {
                    item.ChildrenMenu.forEach(item2 => {
                        self.menus.push(item2)
                    })
                }
                else {
                    self.menus.push(item)
                }
            })

            this.colorStatus=localStorage.getItem('defColorStatus')||this.colorStatus;
        },
        methods: {
            disabledColor(){
                this.colorStatus = this.colorStatus=='颜色随机'?'固定颜色':'颜色随机'
                localStorage.setItem('defColorStatus',this.colorStatus)
            },
            color() {
                if(this.colorStatus=='固定颜色'){
                    return 'background-color:#1aa094';
                }
                let rseed = []
                for (var i = 1; i < 10; i++) {
                    rseed.push(i);
                }
                let color = 'rgba('
                color += Math.floor(Math.random() * 300) + ','
                color += Math.floor(Math.random() * 300) + ','
                color += Math.floor(Math.random() * 300) + ','
                color += '0.8)';
                return { 'background-color': color }
            }
        }
    }

</script>