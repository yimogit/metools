import config from 'config'
import cacheHelper from './cacheHelper'
export default {
    SendGetRequest(url,successCallback) {
        var obj=new XMLHttpRequest();  // XMLHttpRequest对象用于在后台与服务器交换数据          
        obj.open('GET',url,true);
        obj.onreadystatechange=function(){
            if (obj.readyState == 4 && obj.status == 200 || obj.status == 304) { // readyState==4说明请求已完成
                successCallback.call(this, obj.responseText);  //从服务器获得数据
            }
        };
        obj.send(null);
    },
    SendPostRequest (url, data, successCallback) {
        var obj = new XMLHttpRequest();
        obj.open("POST", url, true);
        obj.setRequestHeader("Content-type", "application/x-www-form-urlencoded"); // 发送信息至服务器时内容编码类型
        obj.onreadystatechange = function () {
            if (obj.readyState == 4 && (obj.status == 200 || obj.status == 304)) {  // 304未修改
                successCallback.call(this, obj.responseText);
            }
        };
        obj.send(data);
    },
    execJsonp(src){
        var script = document.createElement("script");
        script.setAttribute("type", "text/javascript");
        script.src = src;
        document.body.appendChild(script);
    },
    trim(str){
        if(str)
            return str.replace(/\ +/g, '').replace(/[ ]/g, '');
        return '';
    },
    getProtocol(){
        return location.protocol=='https:'?'https':'http';
    }
}