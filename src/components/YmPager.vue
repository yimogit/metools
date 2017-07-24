<template>
    <div :id="pagerId" class="ympager"></div>
</template>
<script>
    export default {
        props:['pageIndex','totalPage','groups','skin'],
        data(){
            return {
                pagerId:'pagerId'+Date.now()+Math.floor(Math.random () * 1000),                
                cindex:this.pageIndex||1,
                cpages:this.totalPage||1,
                cgroups:this.groups||10,
                cskin:this.skin||''//'#009688',
            }
        },
        created(){
            let self=this
            this.$nextTick(function(){                
                layui.laypage({                    
                     cont: self.pagerId
                    ,skin: self.cskin
                    ,pages: self.cpages //总页数
                    ,groups: self.cgroups //连续显示分页数
                    ,curr:self.pageIndex //当前页
                    ,jump:function(obj, first){
                        self.$emit('pageHandler',obj.curr)
                    }
                });
            });
        }
    }
</script>
<style>
    .ympager{float:right}
</style>