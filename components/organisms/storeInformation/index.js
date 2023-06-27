import { StoreInformationDiv, TextInfoDiv } from './style';

import Image from "@atoms/image"
import ImageText from '@molecules/imageText';

const StoreInformation = ({address, time, call, concent, rank, room}) => {
    return (
        <>
        <ImageText imageClassName="storeInfoIcon" src="images/position.svg" text={address} divClassName="storeInformationPostion" textClassName="storeDetailInfo" />
            <StoreInformationDiv>
                <TextInfoDiv>
                    <ImageText imageClassName="storeInfoIcon" src="images/clock.svg" text={time} textClassName="storeDetailInfo" divClassName="basic" />
                    <ImageText imageClassName="storeInfoIcon" src="images/call.svg" text={call} textClassName="storeDetailInfo" divClassName="basic" />
                    <ImageText imageClassName="storeInfoIcon" src="images/concent.svg" text={concent} textClassName="storeDetailInfo" divClassName="basic" />
                    <ImageText imageClassName="storeInfoIcon" src="images/rank.svg" text={rank} textClassName="storeDetailInfo" divClassName="basic" />
                </TextInfoDiv>
                <Image src={room} alt={room} />
            </StoreInformationDiv>
        </>
    );
};

export default StoreInformation;