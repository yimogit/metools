<template>
    <div :class="defClass">
        <ul class="layui-tab-title site-demo-title" style="margin-bottom:10px;">
            <li :class="{'layui-this':currentTab==item.Name}" :tabCode="item.Name"  @click="current(item)" v-for="item in items" v-text="item.Title"></li>
        </ul>
        <div  class="layui-tab-content">   
            <div  class="layui-tab-item" :class="{'layui-show':currentTab==item.Name}"  v-for="item in items">
                <slot :name="item.Name" ></slot>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        props:['items','tabClass'],
        data () {
            return {
                currentTab:this.items[0].Name,
                defClass:this.tabClass||'layui-tab-brief'
            }
        },
        methods: {
         current(item){
            if(item.Url){
                window.open(item.Url);
                this.currentTab=this.currentTab
            }
            else{
                this.currentTab=item.Name
            }
            this.$emit('currentHandler',item);
         }   
        }

    }
</script>