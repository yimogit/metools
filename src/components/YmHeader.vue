<template>
        <ul class="layui-nav ymheader" :class="menuTypes[menuType]">       
            <li v-for="item in menuModel" class="layui-nav-item" :class="{'layui-current':menuIndex==item.Key,'layui-nav-itemed':(menuType==1 && menuIndex==item.Key && showItemIndex==item.Key)}">
                <router-link :to="item.MenuUrl" v-if="item.MenuUrl && item.MenuUrl.indexOf('/')==0" @click.native="switchMenuItem(item.Key);">
                    <i :class="item.Icon" v-show="item.Icon"></i>
                    {{item.MenuName}}
                    <span v-show="item.ChildrenMenu && item.ChildrenMenu.length>0" class="layui-nav-more" :class="{'layui-nav-mored':menuType==0 && menuIndex==item.Key && showItemIndex==item.Key}"></span>
                </router-link >
                <a v-else :href="item.MenuUrl||'javascript:void(0);'"  target="_blank" @click="switchMenuItem(item.Key);">
                     <i :class="item.Icon" v-show="item.Icon"></i>
                    {{item.MenuName}}
                    <span v-show="item.ChildrenMenu && item.ChildrenMenu.length>0" class="layui-nav-more" :class="{'layui-nav-mored':menuType==0 && menuIndex==item.Key && showItemIndex==item.Key}"></span>
                </a>
                <dl v-show="item.ChildrenMenu && item.ChildrenMenu.length>0 && showItemIndex==item.Key" class="layui-nav-child layui-anim layui-anim-upbit" style="display:block" >
                    <dd class="level2-menu" v-for="item2 in item.ChildrenMenu">
                        <router-link :to="item2.MenuUrl" v-if="item2.MenuUrl && item2.MenuUrl.indexOf('/')==0 ">{{item2.MenuName}}</router-link>
                        <a :href="item2.MenuUrl" target="_blank" v-else>{{item2.MenuName}}</a>
                    </dd>
                </dl>
            </li>
        </ul>
</template>
<style>
    .ymheader .level2-menu a.router-link-active{
        color:white;    
        background: rgb(26, 160, 148);
    }
</style>
<script>
    export default {
        props:['menuType','menuModel'],
        data(){
            return {
                menuTypes:['','layui-nav-tree'],
                menuIndex:null,
                showItemIndex:null,
                menuClick:false                
            }
        },
        methods:{
            switchMenuItem(index){ 
                let self=this
                if(self.showItemIndex==index){
                    self.showItemIndex=null
                }
                else{
                    self.showItemIndex=index
                }
                self.menuIndex=index
                self.menuClick=true
            },
            switchMenu(index){
                let self=this
                self.menuIndex=index
                self.menuClick=true
            }       
        },
        created(){
            let self=this
            document.addEventListener('click',function(){
                if(self.menuClick==false && self.menuType==0){
                    self.showItemIndex=null
                }
                self.menuClick=false
            });
            let routePath=self.$route.path
            self.menuModel.forEach(e=>{
                if(e.MenuUrl && e.MenuUrl.indexOf(routePath) >= 0){
                    self.menuIndex=e.Key
                    self.showItemIndex=e.Key
                    return false
                }
                else if(e.ChildrenMenu && e.ChildrenMenu.length>0){
                    e.ChildrenMenu.forEach(e2=>{
                        if(e2.MenuUrl && e2.MenuUrl.indexOf(routePath) >= 0){
                            console.log(e2.MenuUrl.indexOf(routePath) >= 0)
                            self.menuIndex=e.Key
                            self.showItemIndex=e.Key
                            return false
                        }
                    })
                }
            })
        },
        destroyed(){
            document.removeEventListener('click',function(){});
        }

    }
</script>