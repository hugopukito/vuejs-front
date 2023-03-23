const PrerenderSPAPlugin = require('prerender-spa-plugin-next')

module.exports = {
  transpileDependencies: true,
  configureWebpack: {
    plugins: [
      new PrerenderSPAPlugin({
        routes: ['/topics', '/keyboard'],
      })
    ]
  }
}
