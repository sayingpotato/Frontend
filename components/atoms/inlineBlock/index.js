import { StyledInlineBlock } from './style';

const InlineBlock = ({ children, className }) => {

    return (
        <StyledInlineBlock className={className}>{children}</StyledInlineBlock>
    );
};

export default InlineBlock;