import { Button } from './Hamburger.styles';

interface Props {
  open: boolean;
  onClick: () => void;
}

const Hamburger = ({ open, onClick }: Props) => {
  return (
    <Button
      open={open}
      onClick={onClick}
    >
      <span />
      <span />
      <span />
    </Button>
  );
};

export default Hamburger;