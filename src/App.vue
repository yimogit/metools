<template>
     <div class="layui-layout layui-layout-admin"  id="app">
        <div class="layui-header ymheader">
            <a @click="$options.filters.openRoute('/')">
                <img class="logo layui-circle" v-if="siteInfo.LogoUrl" :src="siteInfo.LogoUrl">
                <img class="logo layui-circle" v-else src="./assets/images/logo.png">
            </a>
            <div class="searchTxt">
                <input type="text" v-model="searchTxt" class="layui-input" placeholder="搜索" @keyup.enter="search"/>
            </div>
            <div class="user-action" v-if="siteInfo.SiteName">
               <a @click="$options.filters.openRoute('/')" v-text="siteInfo.SiteName"></a>
            </div>
            <div class="user-action" v-else>
               <a @click="$options.filters.openRoute('/')" >个人工具站 - By 易墨</a>
            </div>
        </div>
        <div class="layui-side layui-bg-black" id="leftMenu">
            <div class="layui-side-scroll">
                <v-header :menuType="1" :menuModel="menuItems" :allOpen="true"></v-header>
            </div>
        </div>
        <div class="layui-body layui-tab-content" id="rightContent">
            <router-view></router-view>
        </div>
        <div class="layui-footer footer footer-doc" id="contentFooter" >
            <p v-if="siteInfo.FooterLinks && siteInfo.FooterLinks.length>0">
                <a :href="item.Url" v-text="item.Title" v-for="item in siteInfo.FooterLinks"  target="_blank"></a>
                <a @click="openMsg" v-if="siteInfo.ShowMsg">少年需要留个言么？</a>
            </p>
        </div>
    </div>
</template>
<script>
export default {
    data (){
      return {
          menuItems:[],
          siteInfo:{
              LogoUrl:'',
              SiteName:'',
              ShowMsg:false,
              FooterLink:[]
          }
      }
    },
    methods:{
        search(){
            var txt=this.searchTxt
            var newMenu=[];
            window.siteData.MenuItems.forEach(function(item) {
                if((item.MenuName && item.MenuName.indexOf(txt)>-1 ) || (item.MenuUrl && item.MenuUrl.indexOf(txt)>-1)){
                    newMenu.push(item);
                }
            });
            console.log(newMenu);
            if(newMenu.length>0){
                this.menuItems=newMenu;
            }
            else{
                this.menuItems=window.siteData.MenuItems;
                layer.msg('然而并没有搜到什么~')
            }
        },
        openMsg(){
            layer.open({            
                type:2,
                shade:0,
                skin:'layui-layer-molv',
                anim: 4,
                offset:'rb',
                area: ['400px', '500px'],
                title:'我是谁？',
                content:'./static/msg.html'});
        }
    },
    created(){
        this.siteInfo=window.siteData.SiteInfo;
        this.menuItems=window.siteData.MenuItems;
    }
}
</script>
<style>
    @media screen and (max-width: 500px){
        .searchTxt{
            display: none;
        }
        .layui-form-item .layui-form-label{
            display: none;
        }
        .layui-form-item .layui-input-block{
                margin-left: auto;
        }
        .layui-tab-title li[tabcode="code"]{
            display: none;
        }
        #contentFooter{
            display: none;
        }
        .layui-layout-admin .layui-body{
            bottom: 0;
        }
        .welcome.layui-circle{
            margin-left: 10%;
        }
    }
</style>
