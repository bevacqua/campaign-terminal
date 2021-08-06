'use strict';

const htmlmd = require('html-md-2');
const marked = require('marked');
const qi = require('q-i')
const TerminalRenderer = require('marked-terminal');
marked.setOptions = {
  renderer: new TerminalRenderer()
};

module.exports = function terminal (modelMapper) {
  return {
    name: 'terminal',
    send: function (model, done) {
      const md = htmlmd(model.body);
      const term = marked(md);

      const modelBits = modelMapper ? modelMapper(model) : model

      console.log(qi.stringify(modelBits));
      console.log(term);

      done();
    }
  };
};
