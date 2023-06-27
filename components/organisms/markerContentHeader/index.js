import { MarkerContentHeaderDiv } from './style';

import InlineText from "@molecules/inlineText"

const MarkerContentHeader = ({name, status, statusText}) => {
    return (
        <MarkerContentHeaderDiv>
            <InlineText divClassName="basic" textOne={name} textTwo={statusText} textOneClassName="markerContentHeaderName" textTwoClassName="markerContentHeaderStatus" status={status} />
        </MarkerContentHeaderDiv>
    );
};

export default MarkerContentHeader;