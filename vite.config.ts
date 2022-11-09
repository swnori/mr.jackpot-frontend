import tsconfigPaths from 'vite-tsconfig-paths';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3000,
  },
  plugins: [react(), tsconfigPaths()],
});
