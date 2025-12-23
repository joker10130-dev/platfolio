import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    server: {
        proxy: {
            '/api': {
                target: 'http://localhost:5000', // your backend port
                changeOrigin: true,
                secure: false
            }
        }
    },
    build: {
        outDir: 'build',
    },
    test: {
        globals: true,
        environment: 'jsdom',
        setupFiles: './src/setupTests.js',
    },
    optimizeDeps: {
        include: ["react/jsx-runtime", "react/jsx-dev-runtime"]
    }
});