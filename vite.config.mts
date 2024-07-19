import type { ConfigEnv } from 'vite';
import { defineConfig, loadEnv } from 'vite';
import StylelintPlugin from 'vite-plugin-stylelint';
import CheckerPlugin from 'vite-plugin-checker';
import ReactPlugin from '@vitejs/plugin-react';

export default ({ mode }: ConfigEnv) => {
    const currentEnv = loadEnv(mode, process.cwd());

    return defineConfig({
        base: currentEnv.VITE_PUBLIC_PATH,
        mode: mode,

        plugins: [
            ReactPlugin(),
            StylelintPlugin(),
            CheckerPlugin({
                typescript: true,
                eslint: {
                    lintCommand: 'eslint "./src/**/*.{js,ts,jsx,tsx}"',
                },
            }),
        ],
    });
};
