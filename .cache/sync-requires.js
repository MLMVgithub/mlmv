const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/pkoenders/work/mlmv/mlmv/.cache/dev-404-page.js"))),
  "component---src-templates-404-js": hot(preferDefault(require("/Users/pkoenders/work/mlmv/mlmv/src/templates/404.js"))),
  "component---src-templates-about-js": hot(preferDefault(require("/Users/pkoenders/work/mlmv/mlmv/src/templates/about.js"))),
  "component---src-templates-accessibility-js": hot(preferDefault(require("/Users/pkoenders/work/mlmv/mlmv/src/templates/accessibility.js"))),
  "component---src-templates-contact-js": hot(preferDefault(require("/Users/pkoenders/work/mlmv/mlmv/src/templates/contact.js"))),
  "component---src-templates-index-js": hot(preferDefault(require("/Users/pkoenders/work/mlmv/mlmv/src/templates/index.js"))),
  "component---src-templates-news-event-item-js": hot(preferDefault(require("/Users/pkoenders/work/mlmv/mlmv/src/templates/newsEventItem.js"))),
  "component---src-templates-news-event-list-js": hot(preferDefault(require("/Users/pkoenders/work/mlmv/mlmv/src/templates/newsEventList.js"))),
  "component---src-templates-peer-supporter-item-js": hot(preferDefault(require("/Users/pkoenders/work/mlmv/mlmv/src/templates/peerSupporterItem.js"))),
  "component---src-templates-peer-supporter-list-js": hot(preferDefault(require("/Users/pkoenders/work/mlmv/mlmv/src/templates/peerSupporterList.js"))),
  "component---src-templates-resources-js": hot(preferDefault(require("/Users/pkoenders/work/mlmv/mlmv/src/templates/resources.js"))),
  "component---src-templates-terms-and-use-js": hot(preferDefault(require("/Users/pkoenders/work/mlmv/mlmv/src/templates/terms-and-use.js")))
}

