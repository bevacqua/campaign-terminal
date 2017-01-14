'use strict';

var _ = require('lodash');
var htmlmd = require('html-md-2');
var marked = require('marked');
var TerminalRenderer = require('marked-terminal');
var options = {
  renderer: new TerminalRenderer()
};

module.exports = function terminal () {
  return {
    name: 'terminal',
    send: function (model, done) {
      var body = model.body;

      var tj = model.toJSON; // preserve
      model.toJSON = toJSON;

      if (model._header) {
        model._header.toJSON = toImageJSON;
      }
      if (model.images) {
        model.images.forEach(jsonImage);
      }
      var md = htmlmd(body);
      var term = marked(md, options);

      console.log(JSON.stringify(model, null, 2));
      console.log(term);

      model.toJSON = tj; // restore
      done();

      function jsonImage (img) {
        img.toJSON = toImageJSON;
      }
      function toJSON () {
        return _.omit(this, ['social', 'styles', 'html', 'body', 'generated']);
      }
      function toImageJSON () {
        return _.omit(this, ['data']);
      }
    }
  };
};
