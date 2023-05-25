import { StyledInlineButtontDiv } from './style';
import Button from "@atoms/button"

const InlineButton = ({divClassName, text1, text2, text1ClassName, text2ClassName, text1OnClick, text2OnClick, state}) => {
    return (
        <StyledInlineButtontDiv className={divClassName}>
            <Button text={text1} className={text1ClassName} onClick={text1OnClick} state={state}/>
            <Button text={text2} className={text2ClassName} onClick={text2OnClick} state={state}/>
        </StyledInlineButtontDiv>
    );
};

export default InlineButton;