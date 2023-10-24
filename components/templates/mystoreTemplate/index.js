import Router, { useRouter } from 'next/router';
import { useState } from 'react';

import Text from '@components/atoms/text';
import Image from '@components/atoms/image';
import Button from '@components/atoms/button';

import { WholeDiv, MeatBallDiv, MeatBallLine, DataDiv, InfoDiv } from './style';
import Title from '@components/molecules/title';

const MystoreTemplate = ({data}) => {

    const [meatballOpen, setMeatBallOpen] = useState(false);

    const mystoreDetailButton = () => {
        Router.push({
            pathname: '/orderdetail',
            query: { id: data.storeId, storeName: data.name },
        })
    }

    const router = useRouter();

    const statisticsOnClick = () => {
        router.push({
            pathname: '/statistics',
            query: { id: data.storeId },
        })
    }

    const predictionOnClick = () => {
        router.push({
            pathname: '/prediction',
            query: { id: data.storeId },
        })
    }

    const meatballClick = () => {
        setMeatBallOpen(!meatballOpen)
    }
    
    return (
        <WholeDiv key={data.storeId} >
            <MeatBallDiv onClick={meatballClick}>
                <MeatBallLine />
                <MeatBallLine />
                <MeatBallLine />
            </MeatBallDiv>
            <DataDiv onClick={mystoreDetailButton}>
                <Text className="mystoreName" text={data.name} />
                <Text className="mystoreDes" text={data.description} />
                <Image className="mystoreImage" src={data.thumbnail} />
            </DataDiv>
            {meatballOpen ? (
                <InfoDiv>
                    <Button text="통계 내역" onClick={statisticsOnClick} className="infoButton" />
                    <Button text="예측" onClick={predictionOnClick} className="infoButton" />
                </InfoDiv>
            ) : null}
            
        </WholeDiv>
  );
};

export default MystoreTemplate;