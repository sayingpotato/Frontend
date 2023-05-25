import { DayInfoDiv } from './style';

import Title from "@molecules/title"

const DayInfo = ({subClassName, mainClassName, prevDay, nowDay, nextDay}) => {
    return (
        <DayInfoDiv>
            <Title className={subClassName} text={prevDay} />
            <Title className={mainClassName} text={nowDay} />
            <Title className={subClassName} text={nextDay} />
        </DayInfoDiv>
    );
};

export default DayInfo;