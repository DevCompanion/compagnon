import './bootstrap';
import '../css/app.css';

import { createRoot } from 'react-dom/client';
import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import './lib/i18n';

const appName = window.document.getElementsByTagName('title')[0]?.innerText || 'Compagnon';

createInertiaApp({
  title: title => `${title} - ${appName}`,
  resolve: async name => {
    const isModule = name.split('::');
    if (isModule.length === 1) {
      return await resolvePageComponent(
        `./Pages/${name}.tsx`,
        import.meta.glob('./Pages/**/*.tsx')
      );
    }

    if (isModule.length === 2) {
      return await resolvePageComponent(
        `../../modules/${isModule[0]}/Resources/js/Pages/${isModule[1]}.tsx`,
        import.meta.glob('../../modules/**/*.tsx')
      );
    }

    if (isModule.length === 3) {
      const moduleType = isModule[0] === 'Modules' ? 'modules' : 'external-modules';
      return await resolvePageComponent(
        `../../${moduleType}/${isModule[1]}/Resources/js/Pages/${isModule[2]}.tsx`,
        import.meta.glob('../../external-modules/**/*.tsx')
      );
    }

    throw new Error(`Page [${name}] not found.`);
  },
  setup({ el, App, props }) {
    const root = createRoot(el);

    root.render(<App {...props} />);
  },
  progress: {
    color: '#4B5563',
  },
});
