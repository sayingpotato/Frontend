import { MarkerInfoDiv, MainDiv, PName, PStatus, InfoValue } from './style'
import { GiPositionMarker } from 'react-icons/gi'
import { AiOutlineClockCircle } from 'react-icons/ai'
import { IoIosCall } from 'react-icons/io'

import Image from 'next/image'
import position from '@public/images/position.svg'
import clock from '@public/images/clock.svg'
import call from '@public/images/call.svg'

const MarkerInformation = (props) => {
  const handleMoreMarkerInfo = () => {
    console.log('페이지 이동')
  }
  return (
    <div onClick={handleMoreMarkerInfo}>
      <MarkerInfoDiv>
        <MainDiv>
          <PName>{props.info['name']}</PName>
          <PStatus status={props.info['status'] === 'OPEN' ? 'green' : 'red'}>
            {props.info['status'] === 'OPEN' ? '영업중' : '영업 종료'}
          </PStatus>
        </MainDiv>
        <div>
          <Image
            width={30}
            height={30}
            src={position}
            className="position"
            alt="position"
          />
          <InfoValue>{props.info['address']}</InfoValue>
        </div>
        <div>
          <Image
            width={30}
            height={30}
            src={clock}
            className="clock"
            alt="clock"
          />
          <InfoValue>{props.info['time']}</InfoValue>
        </div>
        <div>
          <Image
            width={30}
            height={30}
            src={call}
            className="call"
            alt="call"
          />
          <InfoValue>{props.info['call']}</InfoValue>
        </div>
      </MarkerInfoDiv>
    </div>
  )
}

export default MarkerInformation
