import { StyledText } from './style';

const Text = ({ className, text, status, onClick }) => {

    return (
        <StyledText className={className} status={status} onClick={onClick}>{text}</StyledText>
    );
};

export default Text;