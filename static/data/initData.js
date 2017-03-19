function getSitInitData(){
    var data={};
    data.MenuItems=getMenuItems();
    return data;
}
function getMenuItems(){
    return [
        {
            Key: '100',
            MenuName: '快速导航',
            MenuUrl: '/home'
        },
        // {
        //     Key: '200',
        //     MenuName: '快捷转换',
        //     ChildrenMenu: [
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
                // {
                //     Key: '205',
                //     MenuName: 'Markdown转换',
                //     MenuUrl: '/mdhh'
                // }
        //     ]
        // },
    ];
}
window.siteData=getSitInitData();