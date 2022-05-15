// third-party
import { FormattedMessage } from 'react-intl';

// Assets
import { IconArrowBack, IconHome } from '@tabler/icons';

// constant
const icons = {
  IconArrowBack,
  IconHome,
};

// ==============================|| MAIN MENU ITEMS ||============================== //

const main = {
  id: 'main',
  title: <FormattedMessage id="main" />,
  type: 'group',
  children: [
    {
      id: 'commerce',
      title: <FormattedMessage id="commerce" />,
      type: 'item',
      url: '/commerce',
      icon: icons.IconHome,
      breadcrumbs: true,
    },
    {
      id: 'details',
      title: <FormattedMessage id="details" />,
      type: 'item',
      url: '/commerce/product-details/default',
      icon: icons.IconHome,
      breadcrumbs: true,
    },
    {
      id: 'checkout',
      title: <FormattedMessage id="checkout" />,
      type: 'item',
      url: '/commerce/checkout',
      icon: icons.IconHome,
      breadcrumbs: true,
    },
  ],
};

export default main;
