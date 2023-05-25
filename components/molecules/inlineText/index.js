import { StyledInlineTextDiv } from './style';
import Text from "@atoms/text"

const InlineText = ({text1, text2, text1ClassName, text2ClassName, status}) => {
    return (
        <StyledInlineTextDiv>
            <Text text={text1} className={text1ClassName}/>
            <Text text={text2} className={text2ClassName} status={status} />
        </StyledInlineTextDiv>
    );
};

export default InlineText;