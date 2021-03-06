import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import { terser } from 'rollup-plugin-terser'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'


export default [
    {
        input : 'src/index.js',
        plugins : [
            peerDepsExternal (),
            resolve (
                {
                    preferBuiltins : false
                }),
            commonjs (),
            terser ()
        ],
        output :
            {
                file : 'dist/pixiTextInput.js',
                globals :
                    {
                        'pixi.js' : 'PIXI'
                    },
                format : 'umd',
                name : 'ButtonTexture',
                sourcemap : true
            }
    },
    {
        input : 'src/index.js',
        plugins : [
            peerDepsExternal (),
            resolve (
                {
                    preferBuiltins : false
                }),
            commonjs ()
        ],
        output :
            {
                file : 'dist/pixiTextInput.es.js',
                format : 'esm',
                sourcemap : true
            }
    }]
