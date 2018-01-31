'use strict';

var _ = require('lodash');
var htmlmd = require('html-md-2');
var marked = require('marked');
var qi = require('q-i')
var TerminalRenderer = require('marked-terminal');
var options = {
  renderer: new TerminalRenderer()
};

module.exports = function terminal (modelMapper) {
  return {
    name: 'terminal',
    send: function (model, done) {
      var md = htmlmd(model.body);
      var term = marked(md, options);

      var modelBits = modelMapper ? modelMapper(model) : model

      console.log(qi.stringify(modelBits));
      console.log(term);

      done();
    }
  };
};
