// third-party
import { FormattedMessage } from 'react-intl';

// Assets
import { IconArrowBack, IconHome } from '@tabler/icons';

// constant
const icons = {
  IconArrowBack,
  IconHome,
};

// ==============================|| SIDEBAR MENU ITEMS ||============================== //

const sidebar = {
  id: 'sidebar',
  title: <FormattedMessage id="dashboard" />,
  type: 'group',
  children: [
    {
      id: 'main',
      title: <FormattedMessage id="to_frontpage" />,
      type: 'item',
      url: '/',
      icon: icons.IconArrowBack,
      breadcrumbs: false,
    },
    {
      id: 'default',
      title: <FormattedMessage id="default" />,
      type: 'item',
      url: '/dashboard/default',
      icon: icons.IconHome,
      breadcrumbs: true,
    },
  ],
};

export default sidebar;
