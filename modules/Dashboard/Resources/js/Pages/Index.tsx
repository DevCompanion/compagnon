import { Head } from '@inertiajs/react';
import DefaultLayout from '@/Layouts/DefaultLayout';
import { useTranslation } from 'react-i18next';
import { type PageProps } from '@/types';
import { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/Components/ui/card';

export default function Index({ ns }: PageProps<{ ns: string }>) {
  const { t } = useTranslation();
  const [itemsByCategory, setItemsByCategory] = useState([]);

  useEffect(() => {
    fetch(route('api.menu.index'))
      .then(async response => await response.json())
      .then(json => {
        setItemsByCategory(json);
        // {"module.category.generators":[{"ns":"UuidGenerator","route_name":"uuidgenerator.index","icon":null,"category":"module.category.generators"}]}
      })
      .catch(error => {
        // eslint-disable-next-line no-console
        console.error('Error:', error);
      });
  }, []);

  return (
    <>
      <Head title={t('app.title', { ns: '' })} />
      <DefaultLayout showSidebar={false}>
        <div className="mx-4 my-4 min-h-screen flex flex-col">
          {Object.keys(itemsByCategory).map((category, index) => {
            return (
              <div key={index} className="w-full">
                <h3 className="text-left text-xl font-semibold mb-4">{t(category, { ns: '' })}</h3>
                <div className="w-full flex flex-row flex-wrap gap-4">
                  {itemsByCategory[category].map((item, index) => {
                    return (
                      <>
                        <div key={index} className="w-full md:w-1/2 lg:w-4/12">
                          <a href={route(item.route_name).toString()}>
                            <Card>
                              <CardHeader>
                                <CardTitle>{t('title', { ns: item.ns })}</CardTitle>
                              </CardHeader>
                              <CardContent>
                                <p className="text-left text-sm mb-4">
                                  {t('description', { ns: item.ns })}
                                </p>
                              </CardContent>
                            </Card>
                          </a>
                        </div>
                      </>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </DefaultLayout>
    </>
  );
}
