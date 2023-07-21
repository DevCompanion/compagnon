import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link, Head } from '@inertiajs/react';
import UuidGenerator from '../Components/UuidGenerator';
import UuidValidator from '../Components/UuidValidator';
import { useTranslation } from 'react-i18next';
import { type PageProps } from '@/types';

export default function Index({ uuid }: PageProps<{ uuid: string }>) {
  const { t } = useTranslation();
  return (
    <>
      <Head title="Welcome" />
      <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100">
        <div>
          <Link href="/">
            <ApplicationLogo className="w-20 h-20 fill-current text-gray-500" />
          </Link>
          <h1>{t('title', { ns: 'UuidGenerator' })}</h1>
        </div>
        <UuidGenerator />
        <UuidValidator />
      </div>
    </>
  );
}
