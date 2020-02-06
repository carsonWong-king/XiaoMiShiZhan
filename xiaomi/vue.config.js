/* 
    vue.config.js就是webpack的配置表,webpack最终会传送给node服务器
    来实现整个服务的设置;;; 注意:因为是node服务器,模块是遵循CommonJS
    规范,所以不能用import了;代理接口就是自己的接口,但实际内部会通过
    node.js去转发别人的服务;跨域是浏览器本身的安全策略做的限制,而
    node.js是属于后台,后台就没有任何限制,node.js可以调用任何一个网站
    的接口信息,就像爬虫一样,可以爬取任何一个网站,而不受安全限制,但是
    网站可以通过cookie和session来限制有没有登录,防止别人捉取接口    
 */

module.exports = {
    //必须是devServer,它会默认自动加载devServer配置表
    devServer:{
        host:'localhost',       //主机,访问的主机
        port:8080,              //端口
        /* proxy就是代理,比如访问'/A'接口,实际代理到'/B'接口了,
        真正访问是'/B' */
        proxy:{
            /* 访问'/api',它其实是一个拦截,当拦截到'/api'时,就代理
               到里面设置的地址*/
            '/api':{
                //target:目标,代理到哪里去(内部访问慕课网接口)
                target:'http://www.imooc.com',
                //是否发送请求设置成target
                changeOrigin:true,
                pathRewrite:{       //转发地址
                    //虚拟api,其实并没有api(当拦截到api就把api设为空,然后把target地址拼接上去)
                    '/api':''   
                }
            }
        }
    }
}