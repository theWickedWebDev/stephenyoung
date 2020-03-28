import babel from 'rollup-plugin-babel';
import clean from 'rollup-plugin-clean';
import uglify from 'rollup-plugin-uglify-es';
import { terser } from 'rollup-plugin-terser';
import sass from 'node-sass';
import autoprefixer from 'autoprefixer';
import postcss from 'rollup-plugin-postcss';
var flow = require('rollup-plugin-flow');

const config = function() {
  const entry = './src/index.js';
  const outputFolder = './dist';

  return {
    input: entry,
    output: [
      { file: outputFolder + '/index.cjs.min.js', format: 'cjs' },
      { file: outputFolder + '/index.esm.min.js', format: 'es' },
      { file: outputFolder + '/index.cjs.js', format: 'cjs' },
      { file: outputFolder + '/index.esm.js', format: 'es' },
    ],
    plugins: [
      clean(),
      flow({ pretty: true }),
      postcss({
        preprocessor: (content, id) => new Promise((resolve, reject) => {
          const result = sass.renderSync({ file: id })
          resolve({ code: result.css.toString() })
        }),
        plugins: [
          autoprefixer,
        ],
        sourceMap: true,
        extract: true,
        minify: true,
        extensions: ['.sass','.css']
      }),
      babel({
        exclude: 'node_modules/**',
        "presets": ['@babel/env', '@babel/react'],
        "plugins": [
          "@babel/plugin-proposal-class-properties",
          "@babel/plugin-proposal-export-default-from"
        ],
      }),
      uglify({}),
      terser({
        include: [/^.+\.min\.js$/],
        output: {
          comments: function(node, comment) {
            var text = comment.value;
            var type = comment.type;
            if (type == "comment2") {
              // multiline comment
              return /@preserve|@license|@cc_on/i.test(text);
            }
          }
        }
      }),
    ]
  };
}

export default config();
