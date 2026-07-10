
import {
  HeaderContainer,
  Overlay,
  Content,
  Title,
  Navigation,
  LogoContainer,
  Logo,
} from './Header.styles';

import HeaderMenu from './HeaderMenu';
import Hamburger from './Hamburguer/Hamburger';
import Drawer from './Drawer';

import logo from '../../assets/icons/africa.png';

import { useEffect, useState } from 'react';

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);

useEffect(() => {
  if (openMenu) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'auto';
  }

  return () => {
    document.body.style.overflow = 'auto';
  };
}, [openMenu]);

useEffect(() => {
  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      setOpenMenu(false);
    }
  };

  window.addEventListener('keydown', handleKeyDown);

  return () => {
    window.removeEventListener('keydown', handleKeyDown);
  };
}, []);

  return (
    <HeaderContainer>

      <Overlay>

        <Content>

          <Title>
            Observatório Matrizes Africanas
          </Title>

          <Navigation>

            <HeaderMenu />

            <LogoContainer>

              <Logo
                src={logo}
                alt="Observatório Matrizes Africanas"
              />

            </LogoContainer>

            <Hamburger
              open={openMenu}
              onClick={() => setOpenMenu(!openMenu)}
            />

          </Navigation>

        </Content>

      </Overlay>

      <Drawer
        open={openMenu}
        onClose={() => setOpenMenu(false)}
      />

    </HeaderContainer>
  );
};

export default Header;