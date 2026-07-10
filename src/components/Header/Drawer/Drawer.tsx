import { MENU_ITEMS } from '../constants/menu';

import {
    Backdrop,
    DrawerContainer,
    CloseButton,
    Menu,
    MenuItem,
} from './Drawer.styles';

import CloseIcon from '@mui/icons-material/Close';

interface Props {
  open: boolean;
  onClose: () => void;
}

const Drawer = ({ open, onClose }: Props) => {
  return (
      <><Backdrop
          open={open}
          onClick={onClose} />
          
          <DrawerContainer open={open}>

              <CloseButton onClick={onClose}>
                  <CloseIcon />
              </CloseButton>

              <Menu>
                  {MENU_ITEMS.map((item, index) => (
                    <MenuItem
                        key={item.label}
                        index={index}
                        open={open}
                        onClick={onClose}
                    >
                        {item.label}
                    </MenuItem>
                  ))}
              </Menu>

          </DrawerContainer></>
  );
};

export default Drawer;