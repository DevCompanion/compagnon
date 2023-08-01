import SideBar from '@/Components/ui/sidebar/SideBar';
import SideBarItem from '@/Components/ui/sidebar/SideBarItem';
import SideBarList from '@/Components/ui/sidebar/SideBarList';
import SideBarGroup from '@/Components/ui/sidebar/SideBarGroup';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';

export default function SideBarApp({ showSidebar = true }: { showSidebar: boolean }) {
  const { t } = useTranslation();
  const [itemsByCategory, setItemsByCategory] = useState([]);

  useEffect(() => {
    fetch(route('api.menu.index'))
      .then(async response => await response.json())
      .then(json => {
        setItemsByCategory(json);
      })
      .catch(error => {
        // eslint-disable-next-line no-console
        console.error('Error:', error);
      });
  }, []);

  if (!showSidebar) {
    return <></>;
  }

  return (
    <>
      <SideBar brand={t('app.name', { ns: '' })} url={route('dashboard.index').toString()}>
        <SideBarList>
          {Object.keys(itemsByCategory).map((category, index) => {
            return (
              <SideBarGroup key={index} title={t(category, { ns: '' })}>
                {itemsByCategory[category].map((item, index) => {
                  return (
                    <SideBarItem
                      key={index}
                      nameItem={t('title', { ns: item.ns })}
                      icon={item.icon}
                      url={route(item.route_name).toString()}
                    />
                  );
                })}
              </SideBarGroup>
            );
          })}
        </SideBarList>
      </SideBar>
    </>
  );
}
