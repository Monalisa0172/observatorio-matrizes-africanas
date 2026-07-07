import {
  HeaderContainer,
  Overlay,
  Content,
  Title,
  Navigation,
  Menu,
  MenuItem,
  LogoContainer,
  Logo,
} from './Header.styles';
import logo from '../../assets/icons/africa.png';

const Header = () => {
  return (
    <HeaderContainer>
      <Overlay>
        <Content>
          <Title>Observatório Matrizes Africanas</Title>

          <Navigation>
            <Menu>
              <MenuItem>Home</MenuItem>
              <MenuItem>História</MenuItem>
              <MenuItem>Orixás</MenuItem>
              <MenuItem>Casas</MenuItem>
              <MenuItem>Contato</MenuItem>
            </Menu>

            <LogoContainer>
              <Logo
                  src={logo}
                  alt="Observatório Matrizes Africanas"
              />
            </LogoContainer>
          </Navigation>
        </Content>
      </Overlay>
    </HeaderContainer>
  );
};

export default Header;