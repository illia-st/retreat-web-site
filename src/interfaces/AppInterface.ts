import { CustomMenuItemProps } from '../components/AppAppBar';

interface AppInterface {
  setAppBarItemsCallback: (items: CustomMenuItemProps[]) => void;
}

export default AppInterface;
