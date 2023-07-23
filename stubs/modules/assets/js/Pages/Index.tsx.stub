import { Head } from '@inertiajs/react';
import { useTranslation } from 'react-i18next';
import { type PageProps } from '@/types';
import DefaultLayout from '@/Layouts/DefaultLayout';

export default function Index({ ns }: PageProps<{ ns: string }>) {
  const { t } = useTranslation();
  return (
    <>
      <Head title={t('title', { ns })} />
      <DefaultLayout>
        <div data-pw="module" className="min-h-screen flex flex-col items-center pt-6 sm:pt-0">
          Hello, you are in the module {ns}<br />
          You can update the translation files in <code>resources/lang/&lt;lang&gt;/*.json</code>
        </div>
      </DefaultLayout>
    </>
  );
}
