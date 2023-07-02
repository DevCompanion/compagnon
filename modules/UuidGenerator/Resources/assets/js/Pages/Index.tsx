// @ts-ignore
import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link, Head } from '@inertiajs/react';
import UuidGenerator from '../Components/UuidGenerator';
import UuidValidator from '../Components/UuidValidator';

export default function Index({ uuid }) {
    return (
        <>
            <Head title="Welcome" />
            <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100">
              <div>
                <Link href="/">
                  <ApplicationLogo className="w-20 h-20 fill-current text-gray-500" />
                </Link>
              </div>
              <UuidGenerator />
              <UuidValidator />
            </div>
        </>
    );
}
