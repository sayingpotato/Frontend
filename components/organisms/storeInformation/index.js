import { StoreInformationDiv, TextInfoDiv } from './style';

import Image from "@atoms/image"
import ImageText from '@molecules/imageText';

const StoreInformation = ({address, time, call, concent, rank, room}) => {
    const concentText = '콘센트' + concent + '개';
    const timeText = time[0].startDay + '~' + time[0].endDay + ' ' + time[0].startTime + '~' + time[0].endTime

    return (
        <>
        <ImageText imageClassName="storeInfoIcon" src="images/position.svg" text={address} divClassName="storeInformationPostion" textClassName="storeDetailInfo" />
            <StoreInformationDiv>
                <TextInfoDiv>
                    <ImageText imageClassName="storeInfoIcon" src="images/clock.svg" text={timeText} textClassName="storeDetailInfo" divClassName="basic" />
                    <ImageText imageClassName="storeInfoIcon" src="images/call.svg" text={call} textClassName="storeDetailInfo" divClassName="basic" />
                    <ImageText imageClassName="storeInfoIcon" src="images/concent.svg" text={concentText} textClassName="storeDetailInfo" divClassName="basic" />
                    <ImageText imageClassName="storeInfoIcon" src="images/rank.svg" text={rank} textClassName="storeDetailInfo" divClassName="basic" />
                </TextInfoDiv>
                <Image className="storeRoomImage" src={room} alt={room} />
            </StoreInformationDiv>
        </>
    );
};

export default StoreInformation;