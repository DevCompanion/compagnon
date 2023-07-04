import './bootstrap';
import '../css/app.css';

import { createRoot } from 'react-dom/client';
import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';

const appName = window.document.getElementsByTagName('title')[0]?.innerText || 'Laravel';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => {
        let isModule = name.split("::");
        if (isModule.length === 1) {
            return resolvePageComponent(`./Pages/${name}.tsx`, import.meta.glob('./Pages/**/*.tsx'));
        }

        if (isModule.length === 2) {
            return resolvePageComponent(`../../modules/${isModule[0]}/Resources/assets/js/Pages/${isModule[1]}.tsx`, import.meta.glob('../../modules/**/*.tsx'));
        }

        if (isModule.length === 3) {
            const moduleType = isModule[0] === 'Modules' ? 'modules' : 'external-modules';
            return resolvePageComponent(`../../${moduleType}/${isModule[1]}/Resources/assets/js/Pages/${isModule[2]}.tsx`, import.meta.glob('../../external-modules/**/*.tsx'));
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
