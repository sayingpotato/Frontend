import Router, { useRouter } from 'next/router';

import Text from '@components/atoms/text';
import Image from '@components/atoms/image';
import { WholeDiv } from './style';

const MystoreTemplate = ({data}) => {

    console.log(data)

    const mystoreDetailButton = () => {
        Router.push({
            pathname: '/orderdetail',
            query: { id: data.storeId, storeName: data.name },
        })
    }
    
    return (
        <WholeDiv key={data.storeId} onClick={mystoreDetailButton}>
            <Text className="mystoreName" text={data.name} />
            <Text className="mystoreDes" text={data.description} />
            <Image className="mystoreImage" src={data.thumbnail} />
        </WholeDiv>
  );
};

export default MystoreTemplate;