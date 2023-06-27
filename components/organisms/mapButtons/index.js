import {  } from './style';

import Button from "@atoms/button"
import ImageButton from "@molecules/imageButton"
import ImageText from "@molecules/imageText"

const MapButtons = ({state, refreshButtonClick, storeListClick}) => {
    return (
        <>
            <ImageButton className="refreshButton" src="images/refresh.svg" alt="images/refresh.svg" onClick={refreshButtonClick} state={state}/>
            <Button className="mapListButton" state={state} onClick={storeListClick}>
                <ImageText divClassName="basic" src="images/storeList.svg" alt="images/storeList.svg" text="가게 보기" textClassName="mapListName" />
            </Button>
        </>
    );
};

export default MapButtons;