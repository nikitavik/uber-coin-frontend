import type { ConfigEnv } from 'vite'
import { defineConfig, loadEnv } from 'vite'

export default ({ mode }: ConfigEnv) => {
    const currentEnv = loadEnv(mode, process.cwd())

    return defineConfig({
        base: currentEnv.VITE_PUBLIC_PATH,
        mode: mode,
    })
}