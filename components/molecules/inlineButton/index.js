import { StyledInlineButtontDiv } from './style';
import Button from "@atoms/button"

const InlineButton = ({divClassName, textOne, textTwo, textOneClassName, textTwoClassName, textOneOnClick, textTwoOnClick, state}) => {
    return (
        <StyledInlineButtontDiv className={divClassName}>
            <Button text={textOne} className={textOneClassName} onClick={textOneOnClick} state={state}/>
            <Button text={textTwo} className={textTwoClassName} onClick={textTwoOnClick} state={state}/>
        </StyledInlineButtontDiv>
    );
};

export default InlineButton;