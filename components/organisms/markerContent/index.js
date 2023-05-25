import Router, { useRouter } from 'next/router';
import { MarkerContentDiv } from './style';

import MarkerContentHeader from "@organisms/markerContentHeader"
import MarkerContentInfo from "@organisms/markerContentInfo"

const MarkerContent = ({state, info}) => {

    const handleMoreMarkerInfo = () => {
        console.log('페이지 이동')
    }

    return (
        <MarkerContentDiv state={state} onClick={handleMoreMarkerInfo}>
            <MarkerContentHeader name={info['name']} status={info['status'] === 'OPEN' ? 'green' : 'red'} statusText={info['status'] === 'OPEN' ? '영업중' : '영업 종료'}/>
            <MarkerContentInfo address={info['address']} time={info['time']} call={info['call']} />
        </MarkerContentDiv>
    );
};

export default MarkerContent;