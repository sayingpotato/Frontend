import React from 'react';

import { StyledPercentBlockDiv } from './style';
import InlineBlock from "@atoms/inlineBlock"
import ImageText from "@molecules/imageText"
import Text from "@atoms/text"

const PercentBlock = ({ children }) => {
  return (
    <StyledPercentBlockDiv>
      {React.Children.map(children, child => (
        <InlineBlock className={child.props.out}>
          <InlineBlock className={`${child.props.inlineBlockClass}`}>
            <ImageText divClassName="basic" src={child.props.src} alt={child.props.alt} text={child.props.text} textClassName={child.props.textClassName}/>
            <Text className={child.props.reviewCountTextClassName} text={child.props.reviewCountText} />
          </InlineBlock>
        </InlineBlock>
      ))}
    </StyledPercentBlockDiv>
  );
};

export default PercentBlock;