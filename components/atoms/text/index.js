import { StyledText } from './style';

const Text = ({ className, text, status }) => {

    return (
        <StyledText className={className} status={status}>{text}</StyledText>
    );
};

export default Text;