import Router, { useRouter } from 'next/router'
import { StorelistTemplateDiv } from './style';

import ImageButton from "@molecules/imageButton"
import Store from "@organisms/store"

const StorelistTemplate = ({storeName, imageSrc, minDiscount, maxDisount}) => {
    const router = useRouter()
    const routerValue = [router['query']['lat'], router['query']['lng']]

    // map에서 중심 값을 통하여 정렬 받을 예정
    // console.log(routerValue)

    const goMapButtonClick = () => {
        router.push({
        pathname: '/map',
            query: { goBackLat: routerValue[0], goBackLng: routerValue[1] },
        })
    }

    return (
        <StorelistTemplateDiv>
            <Store storeName={storeName} 
                imageSrc={imageSrc} 
                minDiscount={minDiscount} 
                maxDisount={maxDisount} />
            <ImageButton className="mapImageButton" src="images/whiteMap.svg" alt="images/whiteMap.svg" onClick={goMapButtonClick}/>
        </StorelistTemplateDiv>
    );
};

export default StorelistTemplate;