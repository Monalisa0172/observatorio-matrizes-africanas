import styled from 'styled-components';

export const HeaderContainer = styled.header`
  width: 100%;
  height: ${({ theme }) => theme.layout.header.height};

  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;

  background: transparent;
`;

export const Overlay = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

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

  height: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.h1`
  margin: 0;

  color: ${({ theme }) => theme.colors.secondary};

  font-family: ${({ theme }) => theme.typography.fontFamily.body};

  font-size: ${({ theme }) => theme.typography.fontSize.lg};

  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};

  letter-spacing: 2px;

  text-transform: uppercase;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.typography.fontSize.md};

    max-width: 240px;
  }
`;

export const Navigation = styled.nav`
  display: flex;
  align-items: center;
  gap: 24px;
`;

export const LogoContainer = styled.div`
  width: 52px;
  height: 52px;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 50%;

  background: rgba(255,255,255,.08);

  border: 1px solid rgba(255,255,255,.15);

  transition: ${({ theme }) => theme.transitions.default};

  cursor: pointer;

  &:hover{
    transform: scale(1.05);

    border-color:${({ theme }) => theme.colors.secondary};
  }
`;

export const Logo = styled.img`
  width: 42px;
  height: 42px;

  object-fit: contain;

  transition: ${({ theme }) => theme.transitions.default};
`;