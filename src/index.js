// import PrerenderSPAPlugin from "../lib/prerender-spa-plugin"
// import CopyWebpackPluginSPA from "copy-webpack-plugin"
// import path from "path"

const PrerenderSPAPlugin = require('prerender-spa-plugin')
const CopyWebpackPluginSpa = require('copy-webpack-plugin')
const path = require('path');

class PrerenderClass extends PrerenderSPAPlugin{
    constructor(options){
        options.entry = options.entry || "";
        options.staticDir = options.staticDir || path.join(rootPath('dist',options.entry));
        options.outputDir = options.staticDir || path.join(rootPath('dist',options.entry));
        options.routes = options.routes || ['/'];
        options.other = options.other || {
            captureAfterTime: 50000,
            //忽略打包错误
            ignoreJSErrors: true,
            phantomOptions: '--web-security=false',
            maxAttempts: 10,
        }
        new CopyWebpackPluginSpa([{
            from: options.staticDir
          }]),

        super(options.outputDir,options.routes,options.other)


        // new PrerenderSPAPlugin(
        // //将渲染的文件放到dist目录下
        //     options.outputDir,   
        //     //需要预渲染的路由信息
        //     options.routes,
        //     options.other
        // )
    }

    // initPrerender() {
    //     new CopyWebpackPlugin2([{
    //         from: this.staticDir
    //       }]),

    //     new PrerenderSPAPlugin(
    //     //将渲染的文件放到dist目录下
    //         this.outputDir,   
    //         //需要预渲染的路由信息
    //         this.routes,
    //         this.other
    //     )
    // }
}

module.exports = PrerenderClass