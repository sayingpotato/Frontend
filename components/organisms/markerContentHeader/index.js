import { MarkerContentHeaderDiv } from './style';

import InlineText from "@molecules/inlineText"

const MarkerContentHeader = ({name, status, statusText}) => {
    return (
        <MarkerContentHeaderDiv>
            <InlineText text1={name} text2={statusText} text1ClassName="markerContentHeaderName" text2ClassName="markerContentHeaderStatus" status={status} />
        </MarkerContentHeaderDiv>
    );
};

export default MarkerContentHeader;