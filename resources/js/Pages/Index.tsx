import { Head } from '@inertiajs/react';
import DefaultLayout from '@/Layouts/DefaultLayout';
import ApplicationLogo from '@/Components/app/ApplicationLogo';
import { useTranslation } from 'react-i18next';

export default function Index() {
  const { t } = useTranslation();

  return (
    <>
      <Head title={t('app.title', { ns: '' })} />
      <DefaultLayout>
        <div className="relative flex flex-col gap-4 justify-center items-center min-h-screen">
          <h1 className="font-nunito text-4xl">
            Hello <span className="font-black">COMPAGNON</span>
          </h1>
          <ApplicationLogo className="w-20 h-20" />
          {/* <div className="sm:fixed sm:top-0 sm:right-0 p-6 text-right"> */}
          {/* {auth.user ? ( */}
          {/*  <Link */}
          {/*    href={route('dashboard')} */}
          {/*    className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500" */}
          {/*  > */}
          {/*    Dashboard */}
          {/*  </Link> */}
          {/* ) : ( */}
          {/*  <> */}
          {/*    <Link */}
          {/*      href={route('login')} */}
          {/*      className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500" */}
          {/*    > */}
          {/*      Log in */}
          {/*    </Link> */}

          {/*    <Link */}
          {/*      href={route('register')} */}
          {/*      className="ml-4 font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500" */}
          {/*    > */}
          {/*      Register */}
          {/*    </Link> */}
          {/*  </> */}
          {/* )} */}
          {/* </div> */}
        </div>
      </DefaultLayout>
    </>
  );
}
