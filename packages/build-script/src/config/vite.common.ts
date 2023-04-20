import { defineConfig, UserConfig } from 'vite';
import path from 'path';
import react from '@vitejs/plugin-react';
import eslint from 'vite-plugin-eslint';
import sassDts from 'vite-plugin-sass-dts';
import { PROJECT_ROOT, getCustomConfig } from './base';

// https://vitejs.dev/config/
export const getCommonConfig = async () => {
  const CUSTOM_CONFIG = await getCustomConfig();

  if (!CUSTOM_CONFIG?.entry) {
    throw new Error('entry not find');
  }
  const commonConfigJson = defineConfig({
    root: PROJECT_ROOT,
    build: {
      sourcemap: true,
      lib: {
        name: CUSTOM_CONFIG.libName,
        entry: path.resolve(PROJECT_ROOT, CUSTOM_CONFIG.entry),
        formats: CUSTOM_CONFIG.formats || ['cjs', 'es'],
        fileName: CUSTOM_CONFIG.fileName,
      },
      rollupOptions: {
        // 确保外部化处理那些你不想打包进库的依赖
        external: CUSTOM_CONFIG.external || [],
        output: {
          // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
          globals: CUSTOM_CONFIG.global || {},
        },
      },
    },
    plugins: [
      sassDts({
        enabledMode: ['development', 'production'],
        global: {
          generate: true,
          outFile: path.resolve(PROJECT_ROOT, './src/style.d.ts'),
        },
      }),
      react(),
      eslint(),
    ],
  }) as UserConfig;

  if (CUSTOM_CONFIG.libMode === false) {
    delete commonConfigJson?.build?.lib;
    delete commonConfigJson?.build?.rollupOptions;
  }

  return commonConfigJson;
};
