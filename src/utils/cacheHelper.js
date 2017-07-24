export default {
    GetCacheByKey(key){
      var data=localStorage.getItem(key);
      return eval(data);
    },
    SetCacheByKey(key,data){
      if(typeof(data)==="object"){
        localStorage.setItem(key,JSON.stringify(data))
      }
      else{
        localStorage.setItem(key,data)
      }
    },
    RemoveCahceByKey(key){
        localStorage.removeItem(key);
    },
    ClearCache(){
      localStorage.clear();
    }
}