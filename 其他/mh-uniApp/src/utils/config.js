const config = {
    appId: uni.getAccountInfoSync().miniProgram.appId,
    BASE_API: 'https://bbox.xtq99.com/api/', // 生产环境
    // BASE_API: 'http://lshop.xtq99.com/api/', // 开发环境
    ICON_URL: 'https://ashop.xmfinger.com/front-end/icons/',
    version: '1.0.0', // 版本
    isBuild: false // 是否为发布版
}
export default config