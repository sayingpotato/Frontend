import Router, { useRouter } from 'next/router';

import Text from '@components/atoms/text';
import Image from '@components/atoms/image';
import Button from '@components/atoms/button';

import { WholeDiv } from './style';

const MystoreTemplate = ({data}) => {

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
            pathname: '/predictio',
            query: { id: data.storeId },
        })
    }
    
    return (
        <WholeDiv key={data.storeId}>
            <div onClick={mystoreDetailButton}>
                <Text className="mystoreName" text={data.name} />
                <Text className="mystoreDes" text={data.description} />
                <Image className="mystoreImage" src={data.thumbnail} />
            </div>
            <Button text="통계 내역" onClick={statisticsOnClick} />
            <Button text="예측" onClick={predictionOnClick} />
        </WholeDiv>
  );
};

export default MystoreTemplate;