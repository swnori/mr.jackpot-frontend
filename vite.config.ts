import tsconfigPaths from 'vite-tsconfig-paths';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };
  return {
    server: {
      port: 3000,
    },
    preview: {
      port: 3000,
    },
    plugins: [react(), tsconfigPaths()],
  };
});
