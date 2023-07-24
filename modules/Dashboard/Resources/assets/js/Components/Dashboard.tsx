import SideBar from '../../../../../../resources/js/Components/ui/sidebar/SideBar';
import SideBarItem from '../../../../../../resources/js/Components/ui/sidebar/SideBarItem';
import { FileJson2, Home } from 'lucide-react';
import SideBarList from '../../../../../../resources/js/Components/ui/sidebar/SideBarList';
import SideBarGroup from '../../../../../../resources/js/Components/ui/sidebar/SideBarGroup';

export default function Dashboard() {
  return (
    <>
      <SideBar brand={'Compagnon'}>
        <SideBarList>
          <SideBarGroup title="Dashboard">
            <SideBarItem nameItem={'Home'} icon={<Home />} />
          </SideBarGroup>
          <SideBarGroup title="Converters">
            <SideBarItem nameItem={'Json <=> Yaml'} icon={<FileJson2 />} />
            <SideBarItem nameItem={'Html to Jsx'} icon={<FileJson2 />} />
          </SideBarGroup>
        </SideBarList>
      </SideBar>
    </>
  );
}
