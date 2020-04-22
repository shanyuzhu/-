
module.exports = {
    devServer: {
        post: 'localhost',
        port: 8080,
        proxy: {
            '/api': {
                target: '',
                changeOrigin: true,
                pathRewrite: {
                    '/api': ''
                }
            }
        }
    }
}