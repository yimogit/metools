window.siteData={
    MenuItems:getMenuItems(),
    SiteInfo:getSiteInfo(),
}
initTongJi()
function getMenuItems(){
    return [
        {
            Key: '100',
            MenuName: '快速导航',
            MenuUrl: '/home'
        },
        {
            Key: '208',
            MenuName: '在线翻译',
            MenuUrl: '/fanyi'
        },
        {
            Key: '207',
            MenuName: '二维码生成',
            MenuUrl: '/qrcode'
        },
        {
            Key: '201',
            MenuName: '加密/解密',
            MenuUrl: '/encrypt'
        },
        {
            Key: '202',
            MenuName: '编码/解码',
            MenuUrl: '/encode'
        },
        {
            Key: '203',
            MenuName: '图片转base64',
            MenuUrl: '/tobase64'
        },
        {
            Key: '204',
            MenuName: '字符串替换',
            MenuUrl: '/strsplit'
        },
        {
            Key: '205',
            MenuName: '人民币转换',
            MenuUrl: '/rmbconvert'
        },
        {
            Key: '206',
            MenuName: 'Markdown转换',
            MenuUrl: '/mdconvert'
        },
        {
            Key: '300',
            MenuName: '友情链接',
            ChildrenMenu:[
                {
                    Key: '301',
                    MenuName: '易墨‘s_Blog',
                    MenuUrl: 'http://www.yimo.link',
                },
                {
                    Key: '303',
                    MenuName: '都没有？那就戳这里',
                    MenuUrl: 'http://tool.oschina.net/',
                }
            ]
        }
    ];
}
function getSiteInfo(){
    return {
        SiteName:'个人工具站 - By 易墨',
        LogoUrl:'',//http://www.yimo.link/static/imgs/logo.png',
        ShowMsg:true,
        FooterLinks:[
            {
                Title: '易墨‘s_Blog',
                Url: 'http://www.yimo.link',
            },
            {
                Title:'分分钟拥有自己的站点吧',
                Url:'https://coding.net/u/yimocoding/p/metools/git/blob/master/不花一分钱就能拥有自己的工具站点.MD'
            }
        ]
    }
}
//需替换为自己的统计代码
function initTongJi(){
    if(location.host.indexOf('localhost')==0){
        return;
    }
    var _hmt = _hmt || [];
    (function() {
      var hm = document.createElement("script");
      hm.src = "https://hm.baidu.com/hm.js?83ed2a06b8c764cebb78eece2c3452a2";
      var s = document.getElementsByTagName("script")[0]; 
      s.parentNode.insertBefore(hm, s);
    })();
}