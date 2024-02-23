import { LoadButton } from './Button.styled';

const Button = ({ onClick }) => {
  return (
    <div>
      <LoadButton type="button" onClick={() => onClick()}>
        Load more
      </LoadButton>
    </div>
  );
};

export default Button;
