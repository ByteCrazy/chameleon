import { viteStaticCopy } from 'vite-plugin-static-copy';
import pkg from './package.json';
import { visualizer } from 'rollup-plugin-visualizer';
import commonConfig from './build.common.config';

// 开发模式默认读取 index.html 作为开发模式入口
// entry 作为打包库入口
const plugins = [];

if (process.env.ANALYZE) {
  plugins.push(
    visualizer({
      open: true,
      emitFile: false,
      gzipSize: true,
      brotliSize: true,
    })
  );
}

if (process.env.BUILD_TYPE === 'APP') {
  plugins.push(
    viteStaticCopy({
      targets: [
        {
          src: './node_modules/@chamn/render/dist/index.umd.js',
          dest: './',
          rename: 'render.umd.js',
        },
      ],
    })
  );
}

const mainConfig = {
  libMode: true,
  entry: './src/index.tsx',
  fileName: 'index',
  external: ['react', 'react-dom', 'monaco-editor', 'antd', '@chamn/model', '@chamn/layout'],
  global: {
    react: 'React',
    'react-dom': 'ReactDOM',
  },
  vite: {
    plugins: plugins,
    ...commonConfig,
    define: {
      'process.env': JSON.stringify('{}'),
      __RUN_MODE__: JSON.stringify(process.env.BUILD_TYPE),
      __PACKAGE_VERSION__: JSON.stringify(pkg.version),
      __BUILD_VERSION__: JSON.stringify(Date.now()),
    },
  },
};

const config = mainConfig;
module.exports = config;
