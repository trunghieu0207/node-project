import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// @ts-ignore
import babel from 'rollup-plugin-babel';
import { nodePolyfills } from 'vite-plugin-node-polyfills';
import commonjs from '@rollup/plugin-commonjs';

export default defineConfig({
    plugins: [
        react(),
        nodePolyfills(),
        commonjs({
            include: ['src/js/pages/**']
        }),
        babel({
            babelrc: true,
            exclude: 'node_modules/**'
        })
    ],
    build: {
        // sourcemap: true,
        // watch: {
        //     exclude: 'node_modules/**',
        //     include: 'src/js/**'
        // },
        // outDir: './public/dist',
        // lib: {
        //     entry: './src/js/pages/index/index.ts',
        //     formats: ['cjs'],
        //     fileName: '[name]'
        // },
        target: ['modules', 'es5'],
        commonjsOptions: {
            sourceMap: false
        },
        rollupOptions: {
            input: {
                index: './src/js/pages/index/index.js'
            },
            output: {
                format: 'cjs',
                entryFileNames: '[name].js',
                dir: './public/dist'
            }
        }
    }
});
