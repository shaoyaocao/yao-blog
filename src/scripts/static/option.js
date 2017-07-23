const option = {
    title:"欢迎!",
    company:"芍药的个人博客",
    developer:"开发信息",
    version:"版本号:0.0.9-beta",
    development: {
        server: "http://localhost/"
    },
    production: {
        server: "http://yourserver.com/"
    },
    salt:"lsy",
    menu:[
        {
            name:"主菜单",
            class:"fa fa-th-large",
            hidden:false,
            url:"/main",
            isParent:false,
        },
        {
            name:"多级菜单",
            class:"fa fa-sitemap",
            hidden:false,
            url:"/riverallmem",
            isParent:true,
            children:[
                {
                    name:"二级菜单",
                    url:"/minor",
                    class:"fa fa-sitemap",
                    hidden:false,
                    isParent:false
                },
                {
                    name:"三级菜单",
                    url:"/rivermaster",
                    class:"fa fa-bars",
                    hidden:false,
                    isParent:true,
                    children:[
                        {
                        name:"三级菜单子菜单A",
                        url:"/minor",
                        class:"fa fa-tasks",
                        hidden:false,
                        isParent:false,
                        },
                        {
                        name:"三级菜单子菜单B",
                        url:"/minor",
                        class:"fa fa-tasks",
                        hidden:false,
                        isParent:false,
                        }
                    ]
                },
            ]
        },
    ]
}

export default option