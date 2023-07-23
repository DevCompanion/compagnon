import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

export default async ({ mode }) => {
  const reactBabelPlugins = [];
  if (mode === 'production') {
    reactBabelPlugins.push([
      'babel-plugin-jsx-remove-data-test-id',
      {
        attributes: 'data-pw',
      },
    ]);
  }

  return await defineConfig({
    plugins: [
      laravel({
        input: 'resources/js/app.tsx',
        refresh: true,
      }),
      react({
        babel: {
          plugins: reactBabelPlugins,
        },
      }),
    ],
  });
};
