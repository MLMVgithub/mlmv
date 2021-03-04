module.exports = [{
      plugin: require('../node_modules/gatsby-plugin-react-axe/gatsby-browser.js'),
      options: {"plugins":[],"debounce":1000,"showInProduction":false,"axeOptions":{}},
    },{
      plugin: require('../node_modules/gatsby-remark-images/gatsby-browser.js'),
      options: {"plugins":[],"linkImagesToOriginal":false,"maxWidth":1440,"quality":100,"withWebp":true,"loading":"lazy","showCaptions":false,"markdownCaptions":false,"sizeByPixelDensity":false,"backgroundColor":"white","tracedSVG":false,"disableBgImageOnAlpha":false,"disableBgImage":false},
    },{
      plugin: require('../node_modules/gatsby-remark-images-medium-zoom/gatsby-browser.js'),
      options: {"plugins":[],"background":"#ffffff","zIndex":100000},
    },{
      plugin: require('../node_modules/gatsby-plugin-manifest/gatsby-browser.js'),
      options: {"plugins":[],"name":"My Life My Voice","short_name":"MLMV","start_url":"/","background_color":"#121923","theme_color":"#121923","lang":"en","display":"standalone","icon":"src/images/svg/logo-mlmv-manifest.inline.svg","icon_options":{"purpose":"maskable"},"crossOrigin":"anonymous","cache_busting_mode":"none","localize":[{"start_url":"/en/","lang":"en","name":"My Life My Voice","short_name":"MLMV"},{"start_url":"/mi/","lang":"mi","name":"Taku Ao Taku Reo","short_name":"MLMV"}],"legacy":true,"theme_color_in_head":true,"include_favicon":true,"cacheDigest":null},
    },{
      plugin: require('../node_modules/gatsby-plugin-offline/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../gatsby-browser.js'),
      options: {"plugins":[]},
    }]
