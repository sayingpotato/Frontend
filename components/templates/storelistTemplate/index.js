import Router, { useRouter } from 'next/router'
import { StorelistTemplateDiv } from './style';

import ImageButton from "@molecules/imageButton"
import Store from "@organisms/store"

const StorelistTemplate = ({storeName, imageSrc, minDiscount, maxDisount, menuTopArr, reviewTopArr}) => {
    const router = useRouter()
    const routerValue = [router['query']['lat'], router['query']['lng']]

    const goMapButtonClick = () => {
        router.push({
        pathname: '/map',
            query: { goBackLat: routerValue[0], goBackLng: routerValue[1] },
        })
    }

    const minDiscountText = `${minDiscount} %`
    const maxDisountText = `${maxDisount} %`

    return (
        <StorelistTemplateDiv>
            <Store storeName={storeName} 
                imageSrc={imageSrc} 
                minDiscount={minDiscountText} 
                maxDisount={maxDisountText}
                menuTopArr={menuTopArr}
                reviewTopArr={reviewTopArr}
                />
            <ImageButton className="mapImageButton" src="images/whiteMap.svg" alt="images/whiteMap.svg" onClick={goMapButtonClick}/>
        </StorelistTemplateDiv>
    );
};

export default StorelistTemplate;