// vite.config.js
import react from '@vitejs/plugin-react';

export default {
  plugins: [react()],
  // Add the following line
  assetsInclude: ['./src/assets/'],
};