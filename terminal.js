'use strict';

const htmlmd = require('html-md-2');
const qi = require('q-i')

module.exports = function terminal (modelMapper) {
  return {
    name: 'terminal',
    send: async function (model, done) {
      const marked = (await import('marked')).marked;
      const TerminalRenderer = (await import('marked-terminal')).default;
      console.log(marked);
      marked.setOptions({
        // Define custom renderer
        renderer: new TerminalRenderer()
      });
      const md = htmlmd(model.body);
      const term = marked(md);

      const modelBits = modelMapper ? modelMapper(model) : model

      console.log(qi.stringify(modelBits));
      console.log(term);

      done();
    }
  };
};
