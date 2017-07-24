import router from '../router'
export default {
    imgAuto(path){
        if(path){
            return path;//上传路径
        }
        return 'https://dn-coding-net-production-static.qbox.me/static/7a51352fa766f4176d7c4543339e0e98.png';
    },
    openRoute(route){
        if(typeof(route)==='string' && route.indexOf('http')==0){
            this.openRedirect(route);
            return;
        }
        router.push(route);
    },
    openRedirect(url){
        window.open(url);
    },
    openLayer(url,title){
            layer.open({            
                type:2,
                shade:0,
                skin:'layui-layer-molv',
                anim: 4,
                offset:'rb',
                area: ['400px', '500px'],
                title:title,
                content:url}
            );
    }
}