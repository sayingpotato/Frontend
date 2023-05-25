import { StyledButton } from './style';

const Button = ({ children, onClick, className, text, state }) => {

    return (
        <StyledButton onClick={onClick} className={className} state={state}>{children}{text}</StyledButton>
    );
};

export default Button;