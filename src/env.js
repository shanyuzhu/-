let baseURl;
switch (process.env.NODE_ENV) {
    case 'development':
        baseURl = 'http://dev-mall-pre.springboot.cn/api'
        break;
    case 'test':
        baseURl = 'http://test-mall-pre.springboot.cn/api'
        break;
    case 'prod':
        baseURl = 'http://mall-pre.springboot.cn/api'
        break;
    default:
        baseURl = 'http://mall-pre.springboot.cn/api'
        break;
}


export default {
    baseURl
}