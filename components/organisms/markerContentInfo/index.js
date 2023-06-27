import { MarkerContentInfoDiv } from './style';

import ImageText from '@molecules/imageText'

const MarkerContentInfo = ({address, time, call}) => {
    return (
        <MarkerContentInfoDiv>
            <ImageText src="images/position.svg" alt="images/position.svg" text={address} textClassName="markerContentInfoText"/>
            <ImageText src="images/clock.svg" alt="images/clock.svg" text={time} textClassName="markerContentInfoText"/>
            <ImageText src="images/call.svg" alt="images/call.svg" text={call} textClassName="markerContentInfoText"/>
        </MarkerContentInfoDiv>
    );
};

export default MarkerContentInfo;