import Mock from 'mockjs'
// /----------------------------------------
/////门户用户接口
//登录
Mock.mock('/api/user/login', {
    "status": 0,
    "data": {
        "id": "Random.id()",
        "username": "@cname",
        "email": "@email",
        "phone|1-9": 0,
        "role": 0,
        "createTime": 1479048325000,
        "updateTime": 1479048325000,
        "logintime": "Random.now()",
        "token": "Random.guid()",
    }
});
Mock.mock('/api/user/login', {
    "status": 1,
    "msg": "密码错误"
});
//注册
Mock.mock('/api/user/register', {
    "status": 0,
    "data": {
        "id": 12,
        "username": "@cname",
        "email": "@email",
        "phone|1-9": 0,
        "role": 0,
        "createTime": 1479048325000,
        "updateTime": 1479048325000
    },
    "msg": "校验成功",
});
Mock.mock('/api/user/register', {
    "status": 1,
    "msg": "用户已存在"
});

//获取用户信息
Mock.mock('/api/user', {
    "status": 0,
    "data": {
        "id": 12,
        "username": "aaa",
        "email": "aaa@163.com",
        "phone": null,
        "role": 0,
        "createTime": 1479048325000,
        "updateTime": 1479048325000
    },
});


// ```
// categoryId
// keyword
// pageNum(default=1)
// pageSize(default=10)
// orderBy(default="")：排序参数：例如price_desc，price_asc

// ```
Mock.mock('/products', {

    "status": 0,
    "data": {
        "pageNum": 1,
        "pageSize": 14,
        "size": 2,
        "orderBy": null,
        "startRow": 1,
        "endRow": 2,
        "total": 2,
        "pages": 1,
        "list": [
            {
                "id": 1,
                "categoryId": 3,
                "name": "iphone7",
                "subtitle": "双十一促销",
                "mainImage": "mainimage.jpg",
                "status": 1,
                "price": 7199.22
            },
            {
                "id": 2,
                "categoryId": 2,
                "name": "oppo R8",
                "subtitle": "oppo促销进行中",
                "mainImage": "mainimage.jpg",
                "status": 1,
                "price": 2999.11
            }
        ],
        "firstPage": 1,
        "prePage": 0,
        "nextPage": 0,
        "lastPage": 1,
        "isFirstPage": true,
        "isLastPage": true,
        "hasPreviousPage": false,
        "hasNextPage": false,
        "navigatePages": 8,
        "navigatepageNums": [
            1
        ]
    }
})
Mock.mock('/products', {
    "status": 1,
    "msg": "参数错误"
});
