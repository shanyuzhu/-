// module.exports = {
//     devServer: {
//         host: 'localhost',
//         port: 8080,
//         proxy: {
//             '/api': {
//                 target: 'https://www.easy-mock.com',
//                 changeOrigin: true,
//                 pathRewrite: {
//                     '/api': ''
//                 }
//             }
//         }
//     }
// }
module.exports = {
    devServer: {
        post: 'localhost',
        port: 8080,
        proxy: {
            '/api': {
                target: 'http://www.google.cn/',
                changeOrigin: true,
                pathRewrite: {
                    '/api': ''
                }
            }
        }
    }
}