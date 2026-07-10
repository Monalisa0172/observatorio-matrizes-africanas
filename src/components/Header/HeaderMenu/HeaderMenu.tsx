import { MENU_ITEMS } from '../constants/menu';

import {
  Menu,
  MenuItem,
} from './HeaderMenu.styles';

const HeaderMenu = () => {
  return (
    <Menu>
      {MENU_ITEMS.map((item) => (
        <MenuItem key={item.path}>
          {item.label}
        </MenuItem>
      ))}
    </Menu>
  );
};

export default HeaderMenu;