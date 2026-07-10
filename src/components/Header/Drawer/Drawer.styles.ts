import styled, { keyframes, css } from 'styled-components';
import { DrawerProps, MenuItemProps } from './Drawer.types';

export const Backdrop = styled.div<DrawerProps>`
  position: fixed;
  inset: 0;

  background: rgba(22,13,8,.60);

  opacity: ${({ open }) => (open ? 1 : 0)};
  visibility: ${({ open }) => (open ? 'visible' : 'hidden')};
  pointer-events: ${({ open }) => (open ? 'all' : 'none')};

  transition:
    opacity .35s ease,
    visibility .35s ease;

  z-index: 998;
`;

export const DrawerContainer = styled.aside<DrawerProps>`
  position: fixed;

  top: 0;
  right: 0;

  width: 320px;
  max-width: 85vw;
  height: 100vh;
  overflow-y: auto;

  background: linear-gradient(
  180deg,
  rgba(64, 38, 22, .97) 0%,
  rgba(40, 24, 16, .98) 55%,
  rgba(24, 14, 10, .99) 100%
);

  display: flex;
  flex-direction: column;

  padding: 2rem;

  z-index: 999;

  transform: ${({ open }) =>
    open
      ? 'translateX(0)'
      : 'translateX(105%)'};

  opacity: ${({ open }) => (open ? 1 : 0.98)};
  pointer-events: ${({ open }) => (open ? 'all' : 'none')};

  transition:
    transform .45s cubic-bezier(.22,.61,.36,1),
    opacity .30s ease;

  box-shadow: -10px 0 35px rgba(0,0,0,.45);
  backdrop-filter: blur(18px);
  border-left:1px solid rgba(255,255,255,.08);
`;

export const CloseButton = styled.button`
  align-self: flex-end;

  background: transparent;
  border: none;

  color: ${({ theme }) => theme.colors.white};

  cursor: pointer;

  transition:
  transform .25s ease,
  color .25s ease;

  &:hover{

      color:${({ theme }) => theme.colors.secondary};

      transform: rotate(90deg) scale(1.15);

  }
`;

const fadeIn = keyframes`

from{

    opacity:0;

    transform:translateX(30px);

}

to{

    opacity:1;

    transform:translateX(0);

}

`;

export const Menu = styled.ul`
  list-style: none;

  padding: 3.5rem 0 0;

  margin: 0;

  display: flex;

  flex-direction: column;

  gap: 2rem;

  opacity: ${({ theme }) => 1};

  transition: opacity .25s ease;

  transition-delay: .20s;
`;

export const MenuItem = styled.li<MenuItemProps>`
  position: relative;

  color: ${({ theme }) => theme.colors.white};

  font-family: ${({ theme }) => theme.typography.fontFamily.body};

  font-size: ${({ theme }) => theme.typography.fontSize.lg};

  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};

  cursor: pointer;

  animation: ${({ open }) =>
    open
      ? css`
          ${fadeIn} .45s ease forwards;
        `
      : 'none'};

  animation-delay: ${({ index }) => `${index * 80}ms`};

  opacity: 0;

  transition: .25s ease;

  &::after {
    ...
  }

  &:hover {
    ...
  }
`;
