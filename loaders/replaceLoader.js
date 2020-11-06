/**
 * Create by Pengan Chen on 2020/11/6
 */
module.exports = function (source) {// 不能用()=>因为this需要指向webpack
  return source.replace('lee', 'world');
}
