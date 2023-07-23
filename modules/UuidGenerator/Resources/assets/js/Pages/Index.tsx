import { Head } from '@inertiajs/react';
import UuidGenerator from '../Components/UuidGenerator';
import UuidValidator from '../Components/UuidValidator';
import { useTranslation } from 'react-i18next';
import { type PageProps } from '@/types';
import DefaultLayout from '@/Layouts/DefaultLayout';

export default function Index({ uuid }: PageProps<{ uuid: string }>) {
  const { t } = useTranslation();
  return (
    <>
      <Head title={t('title', { ns: 'UuidGenerator' })} />
      <DefaultLayout>
        <div className="min-h-screen flex flex-col items-center pt-6 sm:pt-0">
          <UuidGenerator />
          <UuidValidator />
        </div>
      </DefaultLayout>
    </>
  );
}
