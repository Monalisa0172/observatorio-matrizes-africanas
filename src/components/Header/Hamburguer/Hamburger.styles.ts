import styled from 'styled-components';

interface Props {
  open: boolean;
}

export const Button = styled.button<Props>`
  display: none;

  width: 42px;
  height: 42px;

  border: none;

  background: transparent;

  cursor: pointer;

  padding: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: flex;

    flex-direction: column;

    justify-content: center;

    gap: 6px;
  }

  span {
    width: 100%;

    height: 3px;

    border-radius: 999px;

    background: ${({ theme }) => theme.colors.white};

    transition: ${({ theme }) => theme.transitions.default};
  }

  span:nth-child(1) {
    transform: ${({ open }) =>
      open ? 'rotate(45deg) translateY(12px)' : 'none'};
  }

  span:nth-child(2) {
    opacity: ${({ open }) => (open ? 0 : 1)};
  }

  span:nth-child(3) {
    transform: ${({ open }) =>
      open ? 'rotate(-45deg) translateY(-12px)' : 'none'};
  }
`;