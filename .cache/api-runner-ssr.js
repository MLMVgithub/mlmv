var plugins = [{
      plugin: require('/Users/pkoenders/work/mlmv/mlmv/node_modules/gatsby-source-sanity/gatsby-ssr'),
      options: {"plugins":[],"projectId":"97psedqm","dataset":"mlmv-dev","graphqlTag":"default"},
    },{
      plugin: require('/Users/pkoenders/work/mlmv/mlmv/node_modules/gatsby-plugin-webfonts/gatsby-ssr'),
      options: {"plugins":[],"fonts":{"google":[{"family":"Material+Icons","strategy":"base64"},{"family":"Roboto","variants":["300","400","500","700"],"strategy":"base64"},{"family":"Merriweather","variants":["400","700","900"],"strategy":"base64"},{"family":"Noto+Serif","variants":["700"],"text":"“ ”","strategy":"base64"}]},"useMinify":true},
    },{
      plugin: require('/Users/pkoenders/work/mlmv/mlmv/node_modules/gatsby-plugin-react-helmet/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('/Users/pkoenders/work/mlmv/mlmv/node_modules/gatsby-plugin-manifest/gatsby-ssr'),
      options: {"plugins":[],"name":"My Life My Voice","short_name":"MLMV","start_url":"/","background_color":"#121923","theme_color":"#121923","lang":"en","display":"standalone","icon":"src/images/svg/logo-mlmv-manifest.inline.svg","icon_options":{"purpose":"maskable"},"crossOrigin":"anonymous","cache_busting_mode":"none","localize":[{"start_url":"/en/","lang":"en","name":"My Life My Voice","short_name":"MLMV"},{"start_url":"/mi/","lang":"mi","name":"Taku Ao Taku Reo","short_name":"MLMV"}],"legacy":true,"theme_color_in_head":true,"include_favicon":true,"cacheDigest":null},
    },{
      plugin: require('/Users/pkoenders/work/mlmv/mlmv/node_modules/gatsby-plugin-offline/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('/Users/pkoenders/work/mlmv/mlmv/gatsby-ssr'),
      options: {"plugins":[]},
    }]
// During bootstrap, we write requires at top of this file which looks like:
// var plugins = [
//   {
//     plugin: require("/path/to/plugin1/gatsby-ssr.js"),
//     options: { ... },
//   },
//   {
//     plugin: require("/path/to/plugin2/gatsby-ssr.js"),
//     options: { ... },
//   },
// ]

const apis = require(`./api-ssr-docs`)

// Run the specified API in any plugins that have implemented it
module.exports = (api, args, defaultReturn, argTransform) => {
  if (!apis[api]) {
    console.log(`This API doesn't exist`, api)
  }

  // Run each plugin in series.
  // eslint-disable-next-line no-undef
  let results = plugins.map(plugin => {
    if (!plugin.plugin[api]) {
      return undefined
    }
    const result = plugin.plugin[api](args, plugin.options)
    if (result && argTransform) {
      args = argTransform({ args, result })
    }
    return result
  })

  // Filter out undefined results.
  results = results.filter(result => typeof result !== `undefined`)

  if (results.length > 0) {
    return results
  } else {
    return [defaultReturn]
  }
}
