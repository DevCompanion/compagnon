import { Head } from '@inertiajs/react';
import UuidGenerator from '../Components/UuidGenerator';
import UuidValidator from '../Components/UuidValidator';
import { useTranslation } from 'react-i18next';
import { type PageProps } from '@/types';
import DefaultLayout from '@/Layouts/DefaultLayout';

export default function Index({ uuid, ns }: PageProps<{ uuid: string; ns: string }>) {
  const { t } = useTranslation();
  return (
    <>
      <Head title={t('title', { ns })} />
      <DefaultLayout name={t('title', { ns })}>
        <div className="mx-4 my-4 min-h-screen flex flex-col gap-4">
          <UuidGenerator ns={ns} />
          <UuidValidator ns={ns} />
        </div>
      </DefaultLayout>
    </>
  );
}
