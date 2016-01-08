var marked = require('marked');
var yaml = require('yaml-front-matter');
var loaderUtils = require('loader-utils');

function parse(source) {
  this.cacheable && this.cacheable();
  var options = loaderUtils.parseQuery(this.query);
  var obj = yaml.parse(source);
  obj.__content = marked(obj.__content, options);
  return obj;
}

module.exports = function(source) {
  return 'module.exports = ' + JSON.stringify(parse(source));
}
module.exports.parse = parse;
