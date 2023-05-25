import { MarkerContentInfoDiv } from './style';

import ImageText from '@molecules/imageText'

const MarkerContentInfo = ({address, time, call}) => {
    return (
        <MarkerContentInfoDiv>
            <ImageText src="images/position.svg" alt="images/position.svg" text={address} textClass="markerContentInfoText"/>
            <ImageText src="images/clock.svg" alt="images/clock.svg" text={time} textClass="markerContentInfoText"/>
            <ImageText src="images/call.svg" alt="images/call.svg" text={call} textClass="markerContentInfoText"/>
        </MarkerContentInfoDiv>
    );
};

export default MarkerContentInfo;