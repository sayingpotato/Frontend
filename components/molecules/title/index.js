import { StyledTitle } from './style';

const Title = ({text, className}) => {
    return (
        <StyledTitle className={className}>{text}</StyledTitle>
    );
};

export default Title;