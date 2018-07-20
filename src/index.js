// import PrerenderSPAPlugin from "../lib/prerender-spa-plugin"
// import CopyWebpackPluginSPA from "copy-webpack-plugin"
// import path from "path"

const PrerenderSPAPlugin = require('../lib/prerender-spa-plugin')
const Renderer = PrerenderSPAPlugin.PuppeteerRenderer
const path = require('path');

class PrerenderClass extends PrerenderSPAPlugin{
    constructor(options){
        options.entry = options.entry || "";
        options.staticDir = options.staticDir || path.join(rootPath('dist',options.entry));
        options.outputDir = options.staticDir || path.join(rootPath('dist',options.entry));
        options.routes = options.routes || ['/'];
        options.renderer = options.renderer || new Renderer({
            inject: {
                foo: 'bar'
              },
              headless: false,
              // 在 main.js 中 document.dispatchEvent(new Event('render-event'))，两者的事件名称要对应上。
              renderAfterDocumentEvent: 'render-event'
        })
        // new CopyWebpackPluginSpa([{
        //     from: options.staticDir
        //   }]),

        super(options.staticDir,options.outputDir,options.routes,options.renderer)


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