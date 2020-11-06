/**
 * Create by Pengan Chen on 2020/11/6
 */
class CopyrightWebpackPlugin {
  // constructor (options) {
  //   console.log(options)
  // }

  apply (compiler) {// compiler存放打包所有配置和内容
    compiler.hooks.compile.tap('CopyrightWebpackPlugin', (compilation) => {
      console.log('compile')
    })
    compiler.hooks.emit.tapAsync('CopyrightWebpackPlugin', (compilation, cb) => {// compilation只存放这次打包的所有内容
      debugger
      compilation.assets['copyright.txt'] = {
        source: function () {
          return 'copyright by dell lee'
        },
        size: function () {
          return 21
        }
      }
      cb()
    })
  }
}

module.exports = CopyrightWebpackPlugin
