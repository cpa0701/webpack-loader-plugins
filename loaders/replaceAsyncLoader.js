/**
 * Create by Pengan Chen on 2020/11/6
 */
const loaderUtils = require('loader-utils')
module.exports = function (source) {// 不能用()=>因为this需要指向webpack
  const options = loaderUtils.getOptions(this)
  const callback = this.async(); //异步loader
  setTimeout(() => {
    let result = source.replace('dell', options.name).replace('{{title}}', '中文标题');
    callback(null, result)
  }, 500)
}
