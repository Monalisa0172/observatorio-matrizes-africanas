import styled from 'styled-components';


export const HeaderContainer = styled.header`
  width: 100%;
  height: ${({ theme }) => theme.layout.header.height};

  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  background: transparent;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export const Overlay = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  background: linear-gradient(
    90deg,
    rgba(58, 31, 20, 0.85) 0%,
    rgba(58, 31, 20, 0.65) 50%,
    rgba(25, 14, 10, 0.85) 100%
  );
`;

export const Content = styled.div`
  width: ${({ theme }) => theme.layout.container.width};
  max-width: ${({ theme }) => theme.layout.container.maxWidth};

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.h1`
  margin: 0;

  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};

  letter-spacing: 2px;
  text-transform: uppercase;

  color: ${({ theme }) => theme.colors.secondary};

  max-width: 600px;
`;

export const Navigation = styled.nav`
  display: flex;
  align-items: center;
  gap: 40px;
`;

export const Menu = styled.ul`
  display: flex;
  align-items: center;
  gap: 28px;

  margin: 0;
  padding: 0;

  list-style: none;
`;

export const MenuItem = styled.li`
  position: relative;

  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};

  color: ${({ theme }) => theme.colors.white};

  cursor: pointer;

  transition: ${({ theme }) => theme.transitions.default};

  &:hover {
    color: ${({ theme }) => theme.colors.secondary};
  }

  /* underline elegante no hover */
  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -6px;

    width: 0%;
    height: 2px;

    background: ${({ theme }) => theme.colors.secondary};

    transition: ${({ theme }) => theme.transitions.default};
  }

  &:hover::after {
    width: 100%;
  }
`;

export const LogoContainer = styled.div`
  width: 52px;
  height: 52px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;

  background: rgba(255, 255, 255, 0.08);

  border: 1px solid rgba(255, 255, 255, 0.15);

  transition: ${({ theme }) => theme.transitions.default};

  cursor: pointer;

  &:hover {
    transform: scale(1.05);
    border-color: ${({ theme }) => theme.colors.secondary};
  }
`;

export const Logo = styled.img`
    width: 42px;
    height: 42px;

    object-fit: contain;

    transition: ${({ theme }) => theme.transitions.default};
`;