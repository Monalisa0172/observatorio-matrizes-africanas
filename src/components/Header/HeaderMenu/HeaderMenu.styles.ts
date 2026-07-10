import styled from 'styled-components';

export const Menu = styled.ul`
  display: flex;
  align-items: center;
  gap: 2.5rem;

  margin: 0;
  padding: 0;

  list-style: none;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: none;
  }
`;

export const MenuItem = styled.li`
  position: relative;

  cursor: pointer;

  color: ${({ theme }) => theme.colors.white};

  font-family: ${({ theme }) => theme.typography.fontFamily.body};

  font-size: ${({ theme }) => theme.typography.fontSize.md};

  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};

  transition: ${({ theme }) => theme.transitions.default};

  &:hover {
    color: ${({ theme }) => theme.colors.secondary};
  }

  &::after {
    content: '';

    position: absolute;

    bottom: -8px;
    left: 0;

    width: 0;

    height: 2px;

    background: ${({ theme }) => theme.colors.secondary};

    transition: ${({ theme }) => theme.transitions.default};
  }

  &:hover::after {
    width: 100%;
  }
`;