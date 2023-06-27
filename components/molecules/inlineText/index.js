import { StyledInlineTextDiv } from './style';
import Text from "@atoms/text"

const InlineText = ({divClassName, textOne, textTwo, textOneClassName, textTwoClassName, status}) => {
    return (
        <StyledInlineTextDiv className={divClassName}>
            <Text text={textOne} className={textOneClassName}/>
            <Text text={textTwo} className={textTwoClassName} status={status} />
        </StyledInlineTextDiv>
    );
};

export default InlineText;